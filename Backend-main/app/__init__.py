from flask import Flask
from flask_cors import CORS
from .routes import routes  # adjust import if needed

def create_app():
    app = Flask(__name__)

    # Enable CORS for frontend
    CORS(app, origins=["http://localhost:5173"])  # or "*" for testing

    app.register_blueprint(routes)
    return app
