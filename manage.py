from flask import Flask, render_template
from flask_script import Manager

app = Flask(__name__)
manager = Manager(app=app)

@app.route('/')
def index():
    return render_template('indexv_1.html')

@app.route('/vx')
def index_x():
    return render_template('index_xv1.html')

if __name__ == '__main__':
    manager.run()