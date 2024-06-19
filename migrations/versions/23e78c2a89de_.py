"""empty message

Revision ID: 23e78c2a89de
Revises: 
Create Date: 2024-06-19 19:11:36.814477

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '23e78c2a89de'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('binaural',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('type', sa.Enum('Alpha', 'Theta', 'Delta', name='type'), nullable=True),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('duration', sa.Integer(), nullable=True),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('track_url', sa.String(), nullable=True),
    sa.Column('date_publication', sa.Date(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('mixes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('mix_title', sa.String(length=120), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('track_1_url', sa.String(), nullable=False),
    sa.Column('binaural_id', sa.Integer(), nullable=True),
    sa.Column('date', sa.Date(), nullable=True),
    sa.Column('acumulator_concurrency', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('mix_title'),
    sa.UniqueConstraint('track_1_url')
    )
    op.create_table('soundscapes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('duration', sa.Integer(), nullable=True),
    sa.Column('genre', sa.String(length=120), nullable=True),
    sa.Column('url_jamendo', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('tutorials',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('tutorials_type', sa.Enum('Meditation', 'Sleep', 'Focus', name='tutorials_type'), nullable=True),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('body', sa.String(), nullable=True),
    sa.Column('video_url', sa.String(), nullable=True),
    sa.Column('audio_url', sa.String(), nullable=True),
    sa.Column('last_modified', sa.Date(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('first_name', sa.String(length=120), nullable=True),
    sa.Column('last_name', sa.String(length=120), nullable=True),
    sa.Column('country', sa.String(length=120), nullable=True),
    sa.Column('city', sa.String(length=120), nullable=True),
    sa.Column('date_of_birth', sa.Date(), nullable=True),
    sa.Column('password', sa.String(length=80), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.Column('is_admin', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('tutorials')
    op.drop_table('soundscapes')
    op.drop_table('mixes')
    op.drop_table('binaural')
    # ### end Alembic commands ###
