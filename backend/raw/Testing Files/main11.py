from functools import wraps
import pyrebase
from flask import Flask, request
# from nirf100 import  nirf
from flask_cors import CORS
# from database import nirf_api
from user_login import sign_up,sign_in
from college_signin import college_sign_up,college_sign_in

import pyrebase
# import uuid

# uid='name'

firebaseConfig = {
  'apiKey': "AIzaSyC9va0H2T7oM-8fVnubEou9cYP9k7iaVVo",
  'authDomain': "project1-92696.firebaseapp.com",
  'projectId': "project1-92696",
  'storageBucket': "project1-92696.appspot.com",
  'messagingSenderId': "602240743751",
  'appId': "1:602240743751:web:85e0cdca6e1943da997462",
  'measurementId': "G-SZBKNHT6RF",
  "databaseURL" : ""
}
firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()

app = Flask(__name__)

CORS(app, resources={r"/user_signup/": {"origins": "*"}})
CORS(app, resources={r"/user_signin/": {"origins": "*"}})
CORS(app, resources={r"/college_signup/": {"origins": "*"}})
CORS(app, resources={r"/college_signin/": {"origins": "*"}})
CORS(app, resources={r"/college_detail/": {"origins": "*"}})
CORS(app, resources={r"/user_search/": {"origins": "*"}})
# CORS(app, resources={r"/user/": {"origins": "*"}})

def check_token(f):
    @wraps(f)
    def wrap(*args,**kwargs):
        if not request.headers.get('idToken'):
            return {'message': 'No token provided'},400
        try:
            print(request.headers['idToken'])
            user = auth.verify_id_token(request.headers['idToken'])
            request.user = user
        except:
            return {'message':'Invalid token provided.'},400
        return f(*args, **kwargs)
    return wrap

@app.route('/')
@check_token
def hello_world():
    return 'Hello, World!'

@app.route('/user_signup/', methods=['POST'])
def user_signup():
    data=request.get_json();
    value=sign_up(data)
    return value

@app.route('/user_signin/', methods=['POST'])
@check_token
def user_signin():
    data=request.get_json();
    value=sign_in(data)
    return value

@app.route('/college_signup/', methods=['POST'])
def college_signup():
    data=request.get_json();
    value=college_sign_up(data)
    return value

@app.route('/college_signin/', methods=['POST'])
def college_signin():
    data=request.get_json();
    value=college_sign_in(data)
    return value

@app.route('/college_detail/' ,methods=['POST'])
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

@app.route('/user_search/' ,methods=['POST'])
def put_detail_of_college():
    content=request.get_json()
    return "hii"



if __name__ == "__main__":
    app.run(debug=True)



 # @app.route('/naac/', methods=['GET'])
# def nirf1():
#     data100 = naac_sort()
#
#     # data150 = nirf150()
#     # data1.headers.add('Access-Control-Allow-Origin', '*')
#     # print(data1)
#     return jsonify(data100)

# @app.route('/college_data/', methods=['POST'])
# def college_data():
#     content = request.get_json()
#     data=college_data_entry(content)
#     print(data)
#     return data
# #
#

