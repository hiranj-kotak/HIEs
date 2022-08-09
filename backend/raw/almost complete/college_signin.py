import pyrebase
firebaseConfig = {
  "apiKey": "AIzaSyAFZ3CXTbgv3JMNpP0bSWTJ7wvNTq3yK4I",
  "authDomain": "college-ac80f.firebaseapp.com",
  "projectId": "college-ac80f",
  "storageBucket": "college-ac80f.appspot.com",
  "messagingSenderId": "27223597633",
  "appId": "1:27223597633:web:9841dd660615e8d0785cc0",
  "measurementId": "G-LT8PKXSQLR",
  "databaseURL": ""
}
firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()
def college_sign_up(data):
  try:
    auth.create_user_with_email_and_password(data['username'],data['password'])
    data['value'] = "True"
    return data
  except:
    data['value'] = "username or password are not in correct way"
    return data



def college_sign_in(data):
  # print(data['username'])
  e=data['username']
  p=data['password']
  try:
    # auth.sign_in_with_email_and_password(data['username'],data['password'])
    auth.sign_in_with_email_and_password(e,p)
    data['value'] = "True"
    return data
  except:
    # print("invalid username of password")
    data['value'] = "invalid username of password"
    return data
#
# d1 = {
#   "username": "hiranj@gmail.com" ,
#   "password" : "hii"
# }
# d2={
# "username": "t@gmail.com" ,
#   "password" :"123456"
# }
# print(college_sign_up(d2))
# print(college_sign_in(d2))

#
#
#