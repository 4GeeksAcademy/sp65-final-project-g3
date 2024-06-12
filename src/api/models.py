from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_active": self_active
        }
    
class Binaural(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.enum)
    user_jamendo(db.String(120), unique=True, nullable=False)
    acumulador_concurrency(db.Integer)

    def __repr__(self):
        return f'<Binaural {self.Binaural}>'

    def serialize(self):
        return {'id': self.id,
                'type': self.type,
                'url_jamendo': self.url_jamendo,
                'acumulador_concurrency': self.acumulador_concurrency,
                }


