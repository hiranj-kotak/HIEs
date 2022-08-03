from flask import Flask, jsonify, request
# from backend.raw.nirf100 import validate_nirf
from nirf100 import  nirf,validate_nirf
from naac_exl import validate_naac
# from naac_exl2 import naac_2
# from naac_exl3 import naac_3
from flask_cors import CORS

# import requests
# from bs4 import BeautifulSoup as b

app = Flask(__name__)

CORS(app, resources={r"/nirf/": {"origins": "*"}})
CORS(app, resources={r"/post/": {"origins": "*"}})
# CORS(app, resources={r"/naac1/": {"origins": "*"}})
# CORS(app, resources={r"/naac2/": {"origins": "*"}})
# CORS(app, resources={r"/naac3/": {"origins": "*"}})


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/nirf/', methods=['GET'])
def nirf1():
    data100 = nirf()
    # data150 = nirf150()
    # data1.headers.add('Access-Control-Allow-Origin', '*')
    # print(data1)
    return jsonify(data100)


# @app.route('/naac1', methods=['GET'])
# def naac1():
#     data2 = naac_1()
#     # print(data2)
#     return jsonify(data2)


# @app.route('/naac2/', methods=['GET'])
# def naac2():
#     data3 = naac_2()
#     return jsonify(data3)


# @app.route('/naac3/', methods=['GET'])
# def naac3():
#     data4 = naac_3()
#     return jsonify(data4)

@app.route('/post/' ,methods=['POST'])
def post():
    content=request.get_json()
    # print(content)
    data0=validate_nirf(content)
    data00=validate_naac(content)
    # x=(str(data0["NIRFrank"]))
    # print(data00)
    data1={
        "NIRF": data0['NIRF'],
        "NAAC_grade": data00['NAAC_grade'],
        "instituteName" : content['instituteName'],
        "type" : content['type']
    }
    return data1

if __name__ == "__main__":
    app.run(debug=True)



