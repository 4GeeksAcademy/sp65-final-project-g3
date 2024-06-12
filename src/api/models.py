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


class Mixes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mix_title = db.Column(db.String(120), unique=True, nullable=False)
    user_id = db.Column(db.Integer)
    track_1_url = db.Column(db.Integer)
    binaural_id = db.Column(db.Integer)
    date = db.Column(db.Date)
    acumulator_concurrency = db.Column(db.Integer)


    def __repr__(self):
        return f'<Mixes {self.mix_title}>'

    def serialize(self):
        return {'id': self.id,
                'mix_title': self.mix_title,
                'user_id': self.user_id,
                'track_1_url': self.track_1_url,
                'binaural_id': self.binaural_id,
                'date': self.date,
                'acumulator_concurrency': self.acumulator_concurrency
                }

class Tutorials(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    type = db.Column(db.enum)
    title = db.Column(db.String)
    body = db.Column(db.String)
    video_url = db.Column(db.String)
    audio_url = db.Column(db.String)
    last_modified = db.Column(db.Date)


    def __repr__(self):
        return f'<Tutorials {self.title}>'

    def serialize(self):
        return {'id': self.id,
                'user_id': self.user_id,
                'type': self.type,
                'title': self.title,
                'body': self.body,
                'video_url': self.video_url,
                'audio_url': self.audio_url,
                'last_modified': self.last_modified
                }