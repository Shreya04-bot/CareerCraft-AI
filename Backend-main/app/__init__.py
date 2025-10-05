import os
from flask import Flask
from flask_cors import CORS
from .routes import routes  # adjust import if needed
from dotenv import load_dotenv

load_dotenv()  # load .env variables

def create_app():
    app = Flask(__name__)

    # Get frontend URL from env
    frontend_url = os.getenv("FRONTEND_URL", "*")  # fallback to "*" if not set
    CORS(app, origins=[frontend_url])  # enable CORS

    app.register_blueprint(routes)
    return app
