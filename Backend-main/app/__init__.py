import os
from flask import Flask
from flask_cors import CORS
from .routes import routes  # Use absolute import for Render compatibility
from dotenv import load_dotenv

load_dotenv()  # load .env variables

def create_app():
    app = Flask(__name__)

    # Directly set the two frontend URLs
    frontend_urls = [
        os.getenv("FRONTEND_URL", "https://carrercraftai.netlify.app"),
        "http://localhost:5173"
    ]

    CORS(app, origins=frontend_urls, supports_credentials=True)  # enable CORS

    app.register_blueprint(routes)
    return app
