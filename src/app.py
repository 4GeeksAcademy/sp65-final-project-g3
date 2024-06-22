"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from api.utils import APIException, generate_sitemap
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from api.models import db
# from models import Person
from flask_jwt_extended import JWTManager
# Spotify importations
from spotipy import Spotify
from spotipy.oauth2 import SpotifyOAuth
from spotipy.cache_handler import FlaskSessionCacheHandler
# from google.cloud import storage


ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False
# Database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)
# Other configurations
setup_admin(app) # Add the admin
setup_commands(app)  # Add the admin
app.register_blueprint(api, url_prefix='/api')  # Add all endpoints form the API with a "api" prefix
# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")  # Change this!
jwt = JWTManager(app)


# Config Spotify
cache_handler = FlaskSessionCacheHandler(session)
sp_oauth = SpotifyOAuth(
    cliend_id = os.getenv("client_id"),
    client_secret = os.getenv("client_secret"),
    redirect_uri = os.getenv("redirect_uri"),
    scope = os.getenv("scope"),
    cache_handler = os.getenv("cache_handler"),
    show_dialog = True)

sp = Spotify(auth_manager = sp_oauth)


# Todo lo referente al Google Cloud Storage
""" 
def authenticate_with_service_account(json_keyfile_path, project_id):
"""     """
Authenticate using a service account key file.
    """ """
    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = json_keyfile_path
    storage_client = storage.Client(project=project_id)
    return storage_client

def list_blobs(bucket_name):
    
    Lists all the blobs in the bucket and returns a dictionary with file names and their URLs.
   
    storage_client = authenticate_with_service_account('path/to/your/service-account-file.json', 'your-project-id')

    bucket = storage_client.bucket(bucket_name)
    blobs = bucket.list_blobs()

    files_dict = {}
    for blob in blobs:
        files_dict[blob.name] = blob.generate_signed_url(expiration=3600)  # URL válida por una hora

    return files_dict
""" 
"""
# Especifica el nombre de tu bucket
bucket_name = "your-bucket-name"

# Llama a la función para listar los archivos y obtener sus URLs
files_dict = list_blobs(bucket_name)

# Imprime la lista de archivos y sus URLs
for file_name, url in files_dict.items():
    print(f"{file_name}: {url}")
     """

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code


# Generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')


# Any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response
    

# This only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
