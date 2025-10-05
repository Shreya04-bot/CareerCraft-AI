import os
from flask import Flask
from flask_cors import CORS
from .routes import routes  # adjust import if needed
from dotenv import load_dotenv

load_dotenv()  # load .env variables

def create_app():
    app = Flask(__name__)

    # Get frontend URLs from env and include localhost for development
    frontend_urls = os.getenv("FRONTEND_URL", "https://carrercraftai.netlify.app")
    frontend_urls = frontend_urls.split(",")  # allow multiple URLs
    frontend_urls.append("http://localhost:5173")  # add local dev URL

    CORS(app, origins=frontend_urls, supports_credentials=True)  # enable CORS

    app.register_blueprint(routes)
    return app
