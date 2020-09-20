import os
from flask import Flask, session, request
from flask_sqalchemy import SALAlchemy

app = Flask(__name__)

#load main config
app.config.from_pyfile('../config.py') 
db = SALAlchemy(app)


import my_app.views
import my_app.models