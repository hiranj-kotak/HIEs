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


d1 = {
  "username": "hiranj@gmail.com" ,
  "password" : "hello123"
}

def sign_up(data):
  # try:
    auth.create_user_with_email_and_password(data['username'],data['password'])
  # except:
  #   print("email already exists")



def sign_in(data):
  # print(data['username'])
  e=data['username']
  p=data['password']
  try:
    # auth.sign_in_with_email_and_password(data['username'],data['password'])
    auth.sign_in_with_email_and_password(e,p)
  except:
    print("invalid username of password")


# sign_up(d1
sign_in(d1)