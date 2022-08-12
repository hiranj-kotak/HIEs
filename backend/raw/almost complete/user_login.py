import pyrebase
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
def sign_up(data):
  try:
    user=auth.create_user_with_email_and_password(data['email'],data['password'])
    user['value'] = "True"
    return user
  except:
    data['value'] = "username or password are not in correct way"
    return data

def sign_in(data):
  # print(data['username'])
  e=data['email']
  p=data['password']
  try:
    # auth.sign_in_with_email_and_password(data['username'],data['password'])
    hii=auth.sign_in_with_email_and_password(e,p)
    data['value']="True"

    return hii
  except:
    # print("invalid username of password")
    data['value'] = "invalid username of password"
    return data

# print(sign_up(d2))
# print(sign_in(d2))

#
# d1 = {
#   "username": "hiranj@gmail.com" ,
#   "password" : "hii"
# }
# d2={
# "username": "t@gmail.com" ,
#   "password" :""
#
# }