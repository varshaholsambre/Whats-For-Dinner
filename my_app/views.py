from my_app import app
from flask import render_template, request, redirect
import requests

name = "Varsha Holsambre"
facts = {"Birthday":"July 6th 2004", "Favorite color":"Blue"}
posts = [{"title":this is my title, "description":"this is my description"}]

@app.route("/")
def index():
    return render_templete("index.html", name = name, facts = facts, posts = posts)

@app.route("/change name")
def change_name{}:
    global name
    new_name = request.args.get("name")
    name = new_name
    return redirect("/")

@app.route("/post", methods = ["POST"])
def make_post{}:
    global posts
    post_info = request.get_json()
    posts.append(post_info)
    return redirect("/")

