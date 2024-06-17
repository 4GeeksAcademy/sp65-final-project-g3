"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from datetime import datetime
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
from api.models import db, Users, Soundscapes, Mixes, Tutorials, Binaural
from datetime import datetime


api = Blueprint('api', __name__)
CORS(api)  # Allow CORS requests to this API


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {}
    response_body["message"] = "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    return response_body, 200

@api.route('/mixes', methods=['GET', 'POST', 'PUT', 'DELETE'])
def handle_mixes():
    response_body = {}

    if request.method == 'GET':
        rows =db.session.execute(db.select(Mixes)).scalars()
        results = [row.serialize() for row in rows]
        response_body['results'] = results
        response_body['message'] = 'Mixes List. These are indeed the mixes you are looking for!!!'
        return response_body, 200

    if request.method == 'POST':
        data = request.json
        row = Mixes()
        mix_title = data['mix_title'],
        user_id = data['user_id'],
        track_1_url = data['track_1_url'],
        binaural_id = data['binaural_id'],
        image_url = data.get('image_url', None),
        date = datetime.today(),
        acumulator_concurrency = data.get('acumulator_concurrency', 0)
        db.session.add(row)
        db.session.commit()
        response_body['results'] = row.serialize()
        response_body['message'] = 'Mix successfully created'
        return jsonify(response_body), 200
    
    if request.method == 'PUT':
        data = request.json
        print(data)
        user = db.session.execute(db.select(Mixes).where(Mixes.id == mixes_id)).scalar()
        if user:
            mix_title = data['mix_title'],
            user_id = data['user_id'],
            track_1_url = data['track_1_url'],
            binaural_id = data['binaural_id'],
            image_url = data.get('image_url', None),
            date = datetime.today(),
            acumulator_concurrency = data.get('acumulator_concurrency', 0)
            db.session.commit()
            response_body['message'] = 'Mix updated'
            response_body['results'] = row.serialize()
            return response_body, 200
        response_body['message'] = 'This is not the mix you are looking for'
        response_body['results'] = {}
        return response_body, 404
    
    if request.method == 'DELETE':
        mix = db.session.execute(db.select(Mixes).where(Mixes.id == id)).scalar()
        if mix:
            db.session.delete(mix)
            db.session.commit()
            response_body['message'] = 'Mix succesfully eliminated'
            response_body['results'] = {}
            return response_body, 200
        response_body['message'] = 'No such existing Mix'
        response_body['results'] = {}
        return response_body, 200

@api.route('/mixes/<int:user_id>', methods=['GET', 'POST', 'PUT', 'DELETE'])
@jwt_required()
def handle_mixes_id(mixes_id):
    response_body = {}
    if request.method == 'GET':
        mix = db.session.execute(db.select(Mixes).where(Mixes.id == mixes_id)).scalar()
        if mix:
            response_body['results'] = mix.serialize()
            response_body['message'] = "Mix Found"
            return response_body, 200
        response_body['results'] = {}  
        response_body['message'] = 'Mixes List. These are indeed the mixes you are looking for!!!'
        return response_body, 404

    if request.method == 'POST':  # Revisar este, no estoy nada seguro de si es así.
        data = request.json
        row = Mixes ()
        if mix:
            mix.mix_title = data['mix_title'],
            mix.user_id = data['user_id'],
            mix.track_1_url = data['track_1_url'],
            mix.binaural_id = data['binaural_id'],
            mix.image_url = data.get('image_url', None),
            mix.date = datetime.today(),
            mix.acumulator_concurrency = data.get('acumulator_concurrency', 0)
            db.session.add(row)
            db.session.commit()
            response_body['results'] = row.serialize()
            response_body['message'] = 'Mix successfully created'
            return jsonify(response_body), 200
        response_body['message'] = 'Mix could not be created'
        response_body['results'] = {}
        return response_body, 404
    
    if request.method == 'PUT':
        data = request.json
        print(data)
        user = db.session.execute(db.select(Mixes).where(Mixes.id == mixes_id)).scalar()
        if mix:
            mix.mix_title = data['mix_title'],
            mix.user_id = data['user_id'],
            mix.track_1_url = data['track_1_url'],
            mix.binaural_id = data['binaural_id'],
            mix.image_url = data.get('image_url', None),
            mix.date = datetime.today(),
            mix.acumulator_concurrency = data.get('acumulator_concurrency', 0)
            db.session.add(row)
            db.session.commit()
            response_body['results'] = row.serialize()
            response_body['message'] = 'Mix successfully created'
            return jsonify(response_body), 200
        response_body['message'] = 'Mix could not be modified'
        response_body['results'] = {}
        return response_body, 404
        
    
    if request.method == 'DELETE':
        mix = db.session.execute(db.select(Mixes).where(Mixes.id == mixes_id)).scalar()
        if mix:
            db.session.delete(mix)
            db.session.commit()
            response_body['message'] = 'Mix succesfully eliminated'
            response_body['results'] = {}
            return response_body, 200
        response_body['message'] = 'No such existing Mix'
        response_body['results'] = {}
        return response_body, 200
    