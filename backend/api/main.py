from flask import Flask, jsonify
from nirf import nirf
from naac_exl import naac
from flask_cors import CORS
# import requests
# from bs4 import BeautifulSoup as b

app = Flask(__name__)
CORS(app, resources={r"/api1/": {"origins": "*"}})
CORS(app, resources={r"/api2/": {"origins": "*"}})


@app.route('/')
def hello_world():
    return 'Hit'

@app.route('/api1/', methods=['GET'])
def api1():
    data1=nirf()
    # data1.headers.add('Access-Control-Allow-Origin', '*')
    print(data1)
    return jsonify(data1)


@app.route('/api2')
def api2():
    data2=naac()
    # print(data2)
    return jsonify(data2)



if __name__ == "__main__":
    app.run(debug=True)

