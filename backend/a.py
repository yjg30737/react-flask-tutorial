from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/')
def home():
    return "Home"

@app.route('/users')
def users():
    return {"members": [{ "id" : 1, "name" : "a1" },
    					{ "id" : 2, "name" : "a2" }]}


if __name__ == '__main__':
    app.run()