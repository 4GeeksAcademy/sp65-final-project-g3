"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from api.models import db, Users, Soundscapes, Mixes, Tutorials, Binaural
from datetime import datetime
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity

api = Blueprint('api', __name__)
CORS(api)  # Allow CORS requests to this API

@api.route('/signup', methods=['POST'])
def signup():
    response_body = {}
    email = request.json.get("email", None).lower()
    password = request.json.get("password", None)
    first_name = request.json.get("first_name", "")  
    last_name = request.json.get("last_name", "") 
    # logica de validación de email valido y password valida
    user = Users()
    user.email = email
    user.first_name = first_name
    user.last_name = last_name   
    user.password = password
    user.is_active = True
    db.session.add(user)
    db.session.commit()
    access_token = create_access_token(identity={'user_id' : user.id, 'user_is_admin' : user.is_admin})
    response_body["message"] = "User Created & Logged in"
    response_body["access_token"] = access_token
    return response_body, 200


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {}
    response_body["message"] = "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    return response_body, 200

@api.route('/binaural', methods=['GET', 'POST'])
@jwt_required()
def handle_binaural():
    response_body = {}
    current_user = get_jwt_identity()
    user_id = current_user['user_id']
    print(current_user)

    if request.method == 'GET':
        rows =db.session.execute(db.select(Binaural)).scalars()
        results = [row.serialize() for row in rows]
        response_body['results'] = results
        response_body['message'] = 'Binaural List get succesful'
        return response_body, 200
    if request.method == 'POST':
        if current_user.get('is_admin', False): 
            data = request.json
            row = Binaural()
            row.name = data['name']
            row.description = data['description']
            row.type = data['type']
            row.track_url = data['track_url']
            row.date_publication = datetime.today()
            row.user_id = current_user['user_id']  
            row.is_admin = current_user['is_admin']  
            db.session.add(row)
            db.session.commit()
            response_body['results'] = row.serialize()
            response_body['message'] = 'Binaural Track successfully created'
            return jsonify(response_body), 200
        else:
            response_body['message'] = 'You must be and Admin to post a track'
            return jsonify(response_body), 403

@api.route('/binaural/<int:binaural_id>', methods=['GET', 'PUT'])
@jwt_required()
def handle_binaural_id(binaural_id):
    response_body = {}
    current_user = get_jwt_identity()
    user_id = current_user['user_id']
    print(current_user)
    if request.method == 'GET':
        binaural = db.session.execute(db.select(Binaural).where(Binaural.id == binaural_id)).scalar()
        if binaural:
            response_body['results'] = binaural.serialize()
            response_body['message'] = "Binaural Track Found"
            return response_body, 200
        response_body['results'] = {}  
        response_body['message'] = ("Unable to find track or track inexistent")
        return response_body, 404
    
    if request.method == 'PUT':
        if current_user.get('is_admin', False):
            data = request.json
            # TODO: Validación de datos recibidos 
            print(data)
            binaural = db.session.execute(db.select(Binaural).where(Binaural.id == binaural_id)).scalar()
            if binaural:
                binaural.type = data['type']
                binaural.user_id = user_id
                binaural.description = data['description']
                binaural.name = data['name']
                binaural.date_publication = data['date_publication']
                binaural.track_url = data['track_url']
                binaural.accumulator_concurrency = data['accumulator_concurrency']
                db.session.commit()
                response_body['message'] = 'BInaural track succesfully edited'
                response_body['results'] = binaural.serialize()
                return response_body, 200
            response_body['message'] = 'Binaural Track Not Found or Nonexistent'
            response_body['results'] = {}
            return response_body, 404
        else:
            response_body['message'] = 'Unauthorized: Admin privileges required'
            return jsonify(response_body), 403
    