"""empty message

Revision ID: 8545623056b5
Revises: ba88b09fa38e
Create Date: 2024-07-09 09:28:41.524825

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8545623056b5'
down_revision = 'ba88b09fa38e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('mixes', schema=None) as batch_op:
        batch_op.add_column(sa.Column('track_1_name', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('track_2_name', sa.String(), nullable=True))
        batch_op.alter_column('binaural_id',
               existing_type=sa.VARCHAR(),
               nullable=False)
        batch_op.create_unique_constraint(None, ['binaural_id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('mixes', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.alter_column('binaural_id',
               existing_type=sa.VARCHAR(),
               nullable=True)
        batch_op.drop_column('track_2_name')
        batch_op.drop_column('track_1_name')

    # ### end Alembic commands ###