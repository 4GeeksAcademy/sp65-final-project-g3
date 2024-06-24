"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, session, redirect
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from datetime import datetime
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
from api.models import db, Users, Soundscapes, Mixes, Tutorials, Binaural
from datetime import datetime
from spotipy import Spotify
from spotipy.oauth2 import SpotifyOAuth
from spotipy.cache_handler import FlaskSessionCacheHandler

api = Blueprint('api', __name__)
CORS(api)  # Allow CORS requests to this API.  ¡'09876ui
'0'


@api.route('/')  # Así sería el login de Spotify para la obtención del token del usuario.
def home():
    if not sp_oauth.validate_token(cache_handler.get_cached_token()):
        auth_url = sp_oauth.get_authorize_url()
        return redirect(auth_url)
    return redirect(url_for('get_playlists'))


@api.route('/logout')  # Así sería el logout de Spotify que redirigiría a la página inicial del login (o donde queramos redirigirlo).
def logout():
    session.clear()
    return redirect(url_for('home'))    


@api.route('/callback')  # Este Endpoint sirve para evitar el continuo relogin del usuario; refresca el token de acceso de forma automática.
def callback():
    sp_oauth.get_access_token(request.args['code'])
    return redirect(url_for('get_playlists'))


@api.route('/get_playlists', methods=['GET'])  # Este Endpoint sirve para traer las playlists del usuario (al menos en teoría)
def get_playlists():
    if not sp_oauth.validate_token(cache_handler.get_cached_token()):
        auth_url = sp_oauth.get_authorize_url()
        return redirect(auth_url)

    playlists = sp.current_user.get_playlists()
    playlists_info = [(pl['name'], pl['external_urls']['spotify']) for pl in playlists ['items']]
    playlists_html = '<br>'.join([f'{name}: {url}' for name, url in playlists_info])

    return playlists_display


# @app.route('/spotify', methods=['GET'])


@api.route('/signup', methods=['POST'])
def signup():
    response_body = {}
    email = request.json.get("email", None).lower()
    password = request.json.get("password", None)
    first_name = request.json.get("first_name", "")  
    last_name = request.json.get("last_name", "") 
    row = db.session.execute(db.session.select(Users).where(Users.email == email)).scalar()
    if row:
        response_body["message"] = "Mail already exists"
        return response_body, 401
    user = Users()
    user.email = email
    user.first_name = first_name
    user.last_name = last_name   
    user.password = password
    user.is_active = True
    user.is_admin = False
    db.session.add(user)
    db.session.commit()
    access_token = create_access_token(identity={'user_id' : user.id, 'user_is_admin' : user.is_admin})
    response_body["message"] = "User Created & Logged in"
    response_body["access_token"] = access_token
    return response_body, 200


@api.route("/login", methods=['POST'])
def login():
    response_body = {}
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = db.session.execute(db.select(Users).where(Users.email == email, Users.password == password, Users.is_active == True)).scalar()
    if user:
        access_token = create_access_token(identity={'user_id' : user.id, 'is_admin' : user.is_admin})
        response_body["message"] = "Login Succesful"
        response_body["access_token"] = access_token
        return response_body, 200
    response_body["message"] = "Bad username or password"
    return response_body, 401


@api.route("/profile", methods=["GET"])
@jwt_required()
def profile():
    response_body = {}
    current_user = get_jwt_identity()
    print(current_user)
    response_body["message"] = f'User succesfully logged in as: {current_user}'
    return response_body, 200


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {}
    response_body["message"] = "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    return response_body, 200


@api.route('/mixes', methods=['GET'])
def handle_mixes():
    response_body = {}
    rows =db.session.execute(db.select(Mixes)).scalars()
    results = [row.serialize() for row in rows]
    response_body['results'] = results
    response_body['message'] = 'Mixes List. These are indeed the mixes you are looking for!!!'
    return response_body, 200


@api.route('/mixes', methods=['POST'])
@jwt_required()
def handle_mixes_post():
    response_body = {}
    current_user = get_jwt_identity()
    user_id = current_user['user_id']
    data = request.json
    row = Mixes()
    row.mix_title = data['mix_title'],
    row.user_id = user_id,
    row.track_1_url = data['track_1_url'],
    row.binaural_id = data['binaural_id'],
    row.image_url = data.get('image_url', None),
    row.date = datetime.today(),
    row.acumulator_concurrency = data.get('acumulator_concurrency', 0)  # Pendiente de decidir si dejarlo o no.
    db.session.add(row)
    db.session.commit()
    response_body['results'] = row.serialize()
    response_body['message'] = 'Mix successfully created'
    return jsonify(response_body), 200


@api.route('/mixes/<int:mixes_id>', methods=['GET', 'PUT', 'DELETE'])
@jwt_required()
def handle_mixes_id(mixes_id):
    response_body = {}
    current_user = get_jwt_identity()
    user_id = current_user['user_id']
    print(current_user)
    if request.method == 'GET':
        mix = db.session.execute(db.select(Mixes).where(Mixes.user_id == user_id)).scalar()
        if mix:
            response_body['results'] = mix.serialize()
            response_body['message'] = "Mix Found"
            return response_body, 200
        response_body['results'] = {}  
        response_body['message'] = 'Mixes List. These are indeed the mixes you are looking for!!!'
        return response_body, 404
    
    if request.method == 'PUT':
        data = request.json
        print(data)
        mix = db.session.execute(db.select(Mixes).where(Mixes.id == mixes_id), (Mixes.user_id == user_id)).scalar()
        if mix:
            mix.mix_title = data['mix_title'],
            mix.user_id = data['user_id'],
            mix.track_1_url = data['track_1_url'],
            mix.binaural_id = data['binaural_id'],
            mix.image_url = data.get('image_url', None),
            mix.date = datetime.today(),
            mix.acumulator_concurrency = data.get('acumulator_concurrency', 0)
            db.session.add(mix)
            db.session.commit()
            response_body['results'] = mix.serialize()
            response_body['message'] = 'Mix successfully created'
            return jsonify(response_body), 200
        response_body['message'] = 'Mix could not be modified due to lack of credentials'
        response_body['results'] = {}
        return response_body, 403
        
    
    if request.method == 'DELETE':
        mix = db.session.execute(db.select(Mixes).where(Mixes.user_id == user_id)).scalar()
        if mix:
            db.session.delete(mix)
            db.session.commit()
            response_body['message'] = 'Mix succesfully eliminated'
            response_body['results'] = {}
            return response_body, 200
        response_body['message'] = 'No such existing Mix'
        response_body['results'] = {}
        return response_body, 200


@api.route('/binaural', methods=['GET'])
def handle_binaurals():
    response_body = {}
    rows =db.session.execute(db.select(Binaural)).scalars()
    results = [row.serialize() for row in rows]
    response_body['results'] = results
    response_body['message'] = 'Binaural List get succesful'
    return response_body, 200

  
@api.route('/binaural', methods=['POST'])
@jwt_required()
def handle_binaural():
    response_body = {}
    current_user = get_jwt_identity()
    user_id = current_user['user_id']
    print(current_user)
    print(user_id)
 
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
            print(data)
            binaural = db.session.execute(db.select(Binaural).where(Binaural.id == binaural_id)).scalar()
            if binaural:
                binaural.type = data['type']
                binaural.user_id = user_id
                binaural.description = data['description']
                binaural.name = data['name']
                binaural.date_publication = data['date_publication']
                binaural.track_url = data['track_url']
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


@api.route('/soundscapes', methods=['GET'])
@jwt_required()
def handle_soundscapes():
    response_body = {}

    if request.method == 'GET':
        rows =db.session.execute(db.select(Soundscapes)).scalars()
        results = [row.serialize() for row in rows]
        response_body['results'] = results
        response_body['message'] = 'Soundscapes List get succesful'
        return response_body, 200


@api.route('/soundscapes', methods=['POST'])
@jwt_required()
def handle_soundscape():
    response_body = {}
    current_user = get_jwt_identity()
    user_id = current_user['user_id']
    print(current_user)
    print(user_id)
    
    if request.method == 'POST':
        if current_user.get('is_admin', False): 
            data = request.json
            row = Soundscapes()
            row.name = data['name']
            row.duration = data['duration']
            row.genre = data['genre']
            row.url_jamendo = data['url_jamendo']
            row.user_id = current_user['user_id']  
            row.is_admin = current_user['is_admin']  
            db.session.add(row)
            db.session.commit()
            response_body['results'] = row.serialize()
            response_body['message'] = 'Soundscapes Track successfully created'
            return jsonify(response_body), 200
        else:
            response_body['message'] = 'You must be and Admin to post a track'
            return jsonify(response_body), 403


@api.route('/soundscapes/<int:soundscapes_id>', methods=['GET', 'PUT', 'DELETE' ])  
@jwt_required()
def handle_soundscapes_id(soundscapes_id):
    response_body = {}
    current_user = get_jwt_identity()
    user_id = current_user['user_id']
    print(current_user)
    if request.method == 'GET':
        soundscapes = db.session.execute(db.select(Soundscapes).where(Soundscapes.id == soundscapes_id)).scalar()  
        if soundscapes:
            response_body['results'] = soundscapes.serialize()
            response_body['message'] = "soundscapes Track Found"
            return response_body, 200
        response_body['results'] = {}  
        response_body['message'] = ("Unable to find track or track inexistent")
        return response_body, 404
    
    if request.method == 'PUT':
        if current_user.get('is_admin', False):
            data = request.json
            print(data)
            soundscapes = db.session.execute(db.select(Soundscapes).where(Soundscapes.id == soundscapes_id)).scalar()
            if soundscapes:
                soundscapes.name = data['name']
                soundscapes.duration = data['duration']
                soundscapes.genre = data['genre']
                soundscapes.url_jamendo = data['url_jamendo']
                db.session.commit()
                response_body['message'] = 'Soundscapes track succesfully edited'
                response_body['results'] = soundscapes.serialize()
                return response_body, 200
            response_body['message'] = 'Soundscapes Track Not Found or Nonexistent'
            response_body['results'] = {}
            return response_body, 404
        else:
            response_body['message'] = 'Unauthorized: Admin privileges required'
            return jsonify(response_body), 403

    if request.method == 'DELETE':
        if current_user.get('is_admin', False):            
            soundscapes = db.session.execute(db.select(Soundscapes).where(Soundscapes.id == soundscapes_id)).scalar()
            if soundscapes:
                db.session.delete(soundscapes)
                db.session.commit()
                response_body['message'] = 'Soundscape succesfully eliminated'
                response_body['results'] = {}
                return response_body, 200
            response_body['message'] = 'No such existing Soundscape'
            response_body['results'] = {}
            return response_body, 200


@api.route('/tutorials', methods=['GET', 'POST'])
@jwt_required()
def handle_tutorial():
    response_body = {}
    current_user = get_jwt_identity()
    user_id = current_user['user_id']
    print(current_user)
    print(user_id)

    if request.method == 'GET':
        rows =db.session.execute(db.select(Tutorials)).scalars()
        results = [row.serialize() for row in rows]
        response_body['results'] = results
        response_body['message'] = 'Tutorials List get succesful'
        return response_body, 200
    if request.method == 'POST':
        if current_user.get('is_admin', False): 
            data = request.json
            row = Tutorials()
            row.user_id = current_user['user_id']
            row.tutorials_type = data['tutorials_type']
            row.title = data['title']
            row.body = data['body']            
            row.video_url = data['video_url']
            row.audio_url = data['audio_url']
            row.last_modified = datetime.today() 
            row.is_admin = current_user['is_admin']  
            db.session.add(row)
            db.session.commit()
            response_body['results'] = row.serialize()
            response_body['message'] = 'Tutorial video successfully created'
            return jsonify(response_body), 200
        else:
            response_body['message'] = 'You must be and Admin to post a tutorial'
            return jsonify(response_body), 403


@api.route('/tutorials/<int:tutorial_id>', methods=['GET', 'PUT', 'DELETE'])
@jwt_required()
def handle_tutorial_id(tutorial_id):
    response_body = {}
    current_user = get_jwt_identity()
    user_id = current_user['user_id']
    print(current_user)
    if request.method == 'GET':
        tutorial = db.session.execute(db.select(Tutorials).where(Tutorials.id == tutorial_id)).scalar()
        if tutorial:
            response_body['results'] = tutorial.serialize()
            response_body['message'] = "Tutorial Track Found"
            return response_body, 200
        response_body['results'] = {}  
        response_body['message'] = ("Unable to find track or track inexistent")
        return response_body, 404
    
    if request.method == 'PUT':
        if current_user.get('is_admin', False):
            data = request.json
            # TODO: Validación de datos recibidos 
            print(data)
            tutorial = db.session.execute(db.select(Tutorials).where(Tutorials.id == tutorial_id)).scalar()
            if tutorial:
                tutorial.user_id = current_user['user_id']
                tutorial.tutorials_type = data['tutorials_type']
                tutorial.title = data['title']
                tutorial.body = data['body']            
                tutorial.video_url = data['video_url']
                tutorial.audio_url = data['audio_url']
                tutorial.last_modified = datetime.today() 
                db.session.commit()
                response_body['message'] = 'Tutorial video succesfully edited'
                response_body['results'] = tutorial.serialize()
                return response_body, 200
            response_body['message'] = 'Tutorial video Not Found or Nonexistent'
            response_body['results'] = {}
            return response_body, 404
        else:
            response_body['message'] = 'Unauthorized: Admin privileges required'
            return jsonify(response_body), 403
    if request.method == 'DELETE':
        if current_user.get('is_admin', False):            
            tutorial = db.session.execute(db.select(Tutorials).where(Tutorials.id == tutorial_id)).scalar()
            if tutorial:
                db.session.delete(tutorial)
                db.session.commit()
                response_body['message'] = 'tutorial succesfully eliminated'
                response_body['results'] = {}
                return response_body, 200
            response_body['message'] = 'No such existing Tutorial'
            response_body['results'] = {}
            return response_body, 200


@api.route('/users', methods=['GET', 'POST'])
def handle_users():
    response_body = {}
    if request.method == 'GET':
        rows =db.session.execute(db.select(Users)).scalars()
        results = [row.serialize() for row in rows]
        response_body['results'] = results
        response_body['message'] = 'This are the Users'
        return response_body, 200
    if request.method == 'POST':
        response_body['message'] = 'Invalid endpoint, Please sign up'
        return response_body, 200

      
@api.route('/users/<int:user_id>', methods=['GET', 'PUT', 'DELETE'])
def handle_user(user_id):
    response_body = {}
    if request.method == 'GET':
        user = db.session.execute(db.select(Users).where(Users.id == user_id)).scalar()
        if user:
            response_body['results'] = user.serialize()
            response_body['message'] = 'User Found'
            return response_body, 200
        response_body['message'] = 'Unexistent User'
        response_body['results'] = {}
        return response_body, 404
    if request.method == 'PUT':
        data = request.json
        # TODO: Validación de datos recibidos 
        print(data)
        user = db.session.execute(db.select(Users).where(Users.id == user_id)).scalar()
        if user:
            user.email = data['email']
            user.is_active = data['is_active']
            user.last_name = data['last_name']
            user.first_name = data['first_name']
            db.session.commit()
            response_body['message'] = 'User updated'
            response_body['results'] = user.serialize()
            return response_body, 200
        response_body['message'] = 'This is not the user you are looking for'
        response_body['results'] = {}
        return response_body, 404
    if request.method == 'DELETE':
        user = db.session.execute(db.select(Users).where(Users.id == user_id)).scalar()
        if user:
            # db.session.delete(user)
            user.is_active = False
            db.session.commit()
            response_body['message'] = 'Usuario eliminado'
            response_body['results'] = {}
        response_body['message'] = 'Usuario inexistente'
        response_body['results'] = {}
        return response_body, 200
