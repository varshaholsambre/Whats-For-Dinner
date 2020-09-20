from my_app import db

class Fact(db.Model):
	id = db.Column(db.Integer, primary_keys = True)
	name = db.Column(db.String(100))
	value = db.Column(db.String(100))