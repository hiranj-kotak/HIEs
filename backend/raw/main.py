from flask import Flask, jsonify, request
from nirf100 import  nirf
from flask_cors import CORS
# from database import nirf_api

app = Flask(__name__)

CORS(app, resources={r"/nirf/": {"origins": "*"}})
CORS(app, resources={r"/college/": {"origins": "*"}})
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



@app.route('/college/' ,methods=['POST'])
def get_detail_of_college():
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



