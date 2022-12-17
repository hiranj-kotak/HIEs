from flask import Flask, request, render_template, abort
from flask_cors import CORS
from user_data import users
from user_login import sign_up, sign_in
from college_signin import college_sign_up, college_sign_in
from Search_And_Validate import validate_naac_grade,validate_nirf_rank
from make_usefull_json import encode_json,decode_json
from college_database import college_data_entry,Search_data
from topcolleges import Topcolleges

# new implement 2
from newSignUp import newSignUp
from email_otp_auth import emailOtpAuth
from newSignIn import newSignIn
from likedColleges import likedColleges,unlikedColleges

app = Flask(__name__)

CORS(app, supports_credentials=True)
# CORS(app)
# CORS(app, resources={r"/college_detail/": {"origins": "*"}})
# CORS(app, resources={r"/college_detail/": {"Headers":"*"}})

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.errorhandler(404)
def page_not_found(error):
   return render_template('404.html', title = '404'), 404

@app.route('/user_signup/', methods=['POST'])
def user_signup():
    data = request.get_json();
    value = sign_up(data)
    # print(value)
    if(value['value']=="True"):
        value=users(value)
    # # print(value)
    return value


@app.route('/user_signin/', methods=['POST'])
def user_signin():
    data = request.get_json()
    value = sign_in(data)
    return value


@app.route('/college_signup/', methods=['POST'])
def college_signup():
    data = request.get_json()
    value = college_sign_up(data)
    return value


@app.route('/college_signin/', methods=['POST'])
def college_signin():
    data = request.get_json()
    value = college_sign_in(data)
    return value


@app.route('/college_detail/', methods=['POST','GET'])
def get_detail_of_college():
    content = request.get_json()

    for i in content:
        if  i=='NAAC':
            content = validate_naac_grade(content)
        if  i=='NIRF':
            content = encode_json(content)
            content = validate_nirf_rank(content)
    content1=content
    college_data_entry(content1)
    content = decode_json(content)
    return content

@app.route('/user_search/', methods=['POST'])
def put_detail_of_college():
    content = request.get_json()
    print(content)
    content=Search_data(content)
    if content==None:
        return "No data found"
    content=decode_json(content)
    return content

@app.route('/topcolleges/', methods=['get'])
def topcolleges():
    content= Topcolleges()
    # print(content)
    # content=decode_json(content)
    # print(content)
    return content

# new implement 2

@app.route('/new_sign_up/', methods=['POST','GET'])
def new_sign_up():
    try:
        content=request.get_json()
        x=newSignUp(content['email'],content['password'])
        if(x=="already user"):
            return "already user",403
        elif(x=="error"):
            return "error",422
        else:
            return x,200
    except:
        return 'error',422

@app.route('/email_otp/', methods=['POST','GET'])
def email_otp():
    try:
        content = request.get_json()
        x=emailOtpAuth(content['email'],content['OTP'])
        if(x=='user not found'):
            return x,404
        elif(x=="wrong otp"):
            return x,401
        elif(x=='error'):
            return x,422
        else:
            return x,200
    except:
        return 'error',422

@app.route('/new_sign_in/', methods=['POST','GET'])
def new_sign_in():
    try:
        content = request.get_json()
        x = newSignIn(content['email'],content['password'])
        if(x=="user not found"):
            return "user not found",404
        elif(x=="incorrect password"):
            return "incorrect password",401
        elif(x=='error'):
            return 'error',422
        else:
            return x,200
    except:
        return "error",422

@app.route('/liked_colleges/', methods=['POST','GET'])
def liked_colleges():
    content = request.get_json()
    x=likedColleges(content['email'],content['id'])
    if(x=='error'):
        return x,422
    else:
        return x,200

@app.route('/unliked_colleges/', methods=['POST', 'GET'])
def unliked_colleges():
    content = request.get_json()
    x = unlikedColleges(content['email'],content['id'])
    if (x == 'error'):
        return x, 422
    else:
        return x, 200


if __name__ == "__main__":
    app.run(debug=True)
# <<<<<<< HEAD

# if __name__ == "__main__":
#     app.run(debug=True,host="0.0.0.0", port=80)
# =======
# >>>>>>> parent of d7f71b0 (update)

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
#  print(content)
    # data0=validate_nirf(content)
    # data00=validate_naac(content)
    # x=(str(data0["NIRFrank"]))
    # print(data00)
    # data1 = {
    #     "NIRF": data0['NIRF'],
    #     "NAAC_grade": data00['NAAC_grade'],
    #     "instituteName": content['instituteName'],
    #     "type": content['type']
    # }
    # return data1
#
# d1 = { "id": "longrandomstring123",
#     "instituteName": "NIrma UNiversity",
#     "NAAC": "A+",
#     "CGPA": "3.33",
#     "NBA": "Not decided what to do",
#     "NIRF":
#         {
#             "overall":"151 to 200",
#             "engineering":"125",
#             "management":"45",
#             "university":"101 to 150",
#             "pharmacy":"28",
#             "architecture":"21"
#         }
# }