import os
from flask import Flask
from flask_cors import CORS
from .routes import routes  # adjust import if needed
from dotenv import load_dotenv

load_dotenv()  # load .env variables

def create_app():
    app = Flask(__name__)

    # Explicitly allow localhost for dev and deployed frontend
    frontend_urls = [
        "http://localhost:5173",                    # local dev
        "https://carrercraftai.netlify.app"        # deployed frontend
    ]

    CORS(app, origins=frontend_urls, supports_credentials=True)

    app.register_blueprint(routes)
    return app
