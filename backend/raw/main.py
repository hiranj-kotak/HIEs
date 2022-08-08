from flask import Flask, jsonify, request
# from nirf100 import  nirf
from flask_cors import CORS
# from database import nirf_api
from naac_data_sort import naac_sort
from college_database import college_data_entry

app = Flask(__name__)

CORS(app, resources={r"/nirf/": {"origins": "*"}})
CORS(app, resources={r"/college/": {"origins": "*"}})
CORS(app, resources={r"/user/": {"origins": "*"}})
# CORS(app, resources={r"/naac2/": {"origins": "*"}})
# CORS(app, resources={r"/naac3/": {"origins": "*"}})


@app.route('/')
def hello_world():

    return 'Hello, World!'


# @app.route('/naac/', methods=['GET'])
# def nirf1():
#     data100 = naac_sort()
#
#     # data150 = nirf150()
#     # data1.headers.add('Access-Control-Allow-Origin', '*')
#     # print(data1)
#     return jsonify(data100)



@app.route('/college/' ,methods=['POST'])
def get_detail_of_college():
    content=request.get_json()
    # print(content)
    # data0=validate_nirf(content)
    # data00=validate_naac(content)
    # x=(str(data0["NIRFrank"]))
    # print(data00)
    data1={
        "NIRF": data0['NIRF'],
        "NAAC_grade": data00['NAAC_grade'],
        "instituteName" : content['instituteName'],
        "type" : content['type']
    }
    return data1

@app.route('/user/' ,methods=['POST'])
def put_detail_of_college():
    return "hii"


@app.route('/college_data/', methods=['POST'])
def college_data():
    content = request.get_json()
    data=college_data_entry(content)
    print(data)
    return data
#
#
# @app.route('/user_signup/', methods=['POST'])
# def put_detail_of_college():
#     return "hii"


if __name__ == "__main__":
    app.run(debug=True)



