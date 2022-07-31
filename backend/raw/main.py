from flask import Flask,jsonify
from flask_cors import CORS, cross_origin
from nirf import nirf_final
from naac_exl import naac
from bs4 import BeautifulSoup as b

app = Flask(__name__)
cors = CORS(app, resources={r"/foo": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api1')
def api1():
    data1 = nirf_final()
    return jsonify(data1)

@app.route('/api2')
def api2():
    data2=naac()
    # print(data2)
    return jsonify(data2)


if __name__ == "__main__":
    app.run(debug=True)

#http://127.0.0.1:5000

