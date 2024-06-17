"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from api.models import db, Users


api = Blueprint('api', __name__)
CORS(api)  # Allow CORS requests to this API


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {}
    response_body["message"] = "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    return response_body, 200

@api.route('/login', methods=['GET', 'POST', 'PUT', 'DELETE'])
def handle_login():
    response_body = {}

    if request.method == 'GET':
        user_id = request.args.get('id')
        if user_id:
            user = Users.query.get(user_id)
            if user:
                response_body['message'] = 'User found'
                response_body['user'] = user.serialize()
                return jsonify(response_body), 200
            else:
                response_body['message'] = 'User not found'
                return jsonify(response_body), 404
        response_body['message'] = 'Provide user ID to fetch user information'
        return jsonify(response_body), 400

    if request.method == 'POST':
        data = request.json
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            response_body['message'] = 'Email and password are required'
            return jsonify(response_body), 400

        user = Users.query.filter_by(email=email).first()
        if user and user.check_password(password):  # Assuming you have a method to check passwords
            response_body['message'] = 'Login successful'
            response_body['user'] = user.serialize()
            return jsonify(response_body), 200
        else:
            response_body['message'] = 'Invalid email or password'
            return jsonify(response_body), 401

    if request.method == 'PUT':
        data = request.json
        email = data.get('email')
        old_password = data.get('old_password')
        new_password = data.get('new_password')

        if not email or not old_password or not new_password:
            response_body['message'] = 'Email, old password, and new password are required'
            return jsonify(response_body), 400

        user = Users.query.filter_by(email=email).first()
        if user and user.check_password(old_password):  # Assuming you have a method to check passwords
            user.set_password(new_password)  # Assuming you have a method to set passwords
            db.session.commit()
            response_body['message'] = 'Password updated successfully'
            return jsonify(response_body), 200
        else:
            response_body['message'] = 'Invalid email or old password'
            return jsonify(response_body), 401

    if request.method == 'DELETE':
        data = request.json
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            response_body['message'] = 'Email and password are required'
            return jsonify(response_body), 400

        user = Users.query.filter_by(email=email).first()
        if user and user.check_password(password):  # Assuming you have a method to check passwords
            db.session.delete(user)
            db.session.commit()
            response_body['message'] = 'User deleted successfully'
            return jsonify(response_body), 200
        else:
            response_body['message'] = 'Invalid email or password'
            return jsonify(response_body), 401

    response_body['message'] = 'Method not allowed'
    return jsonify(response_body), 405
