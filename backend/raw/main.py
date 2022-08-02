from flask import Flask,jsonify
from flask_cors import CORS
from nirf100 import nirf
from naac_exl1 import naac_1
from naac_exl2 import naac_2
from naac_exl3 import naac_3
from bs4 import BeautifulSoup as b

app = Flask(__name__)

CORS(app, resources={r"/nirf/": {"origins": "*"}})
CORS(app, resources={r"/naac1/": {"origins": "*"}})
CORS(app, resources={r"/naac2/": {"origins": "*"}})
CORS(app, resources={r"/naac3/": {"origins": "*"}})

@app.route('/')
def hello_world():
    return 'hello world!'
@app.route('/nirf/', methods=['GET'])
def nirf1():
    data100 = nirf()
    # data150 = nirf150()
    # data1.headers.add('Access-Control-Allow-Origin', '*')
    # print(data1)
    return jsonify(data100)

@app.route('/naac1', methods=['GET'])
def naac1():
    data2 = naac_1()
    # print(data2)
    return jsonify(data2)


@app.route('/naac2/', methods=['GET'])
def naac2():
    data3 = naac_2()
    return jsonify(data3)


@app.route('/naac3/', methods=['GET'])
def naac3():
    data4 = naac_3()
    return jsonify(data4)


if __name__ == "__main__":
    app.run(debug=True)

