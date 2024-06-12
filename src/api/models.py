from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {'id': self.id,
                'email': self.email,
                'is_active': self.is_active}
    

class Soundscapes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    duration= db.Column(db.Integer, unique=False, nullable=False)
    genre = db.Column(db.String(120), unique=False, nullable=False)
    url_jamendo = db.Column(db.String, unique=False, nullable=True)
    accumulator_concurrency = db.Column(db.String, unique=False, nullable=True)

    def __repr__(self):
        return f'<User {self.name}>'

    def serialize(self):
        return {'id': self.id,
                'name': self.name,
                'duration': self.duration,
                'genre': self.genre,
                'url_jamendo': self.url_jamendo}
