from flask import Flask
from flask_cors import CORS
from .routes import routes

def create_app():
    app = Flask(__name__)

    CORS(app, resources={r"/*": {
        "origins": [
            "http://localhost:5173",
            "https://carrercraftai.netlify.app"
        ]
    }})

    app.register_blueprint(routes)

    return app
