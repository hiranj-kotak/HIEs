import pymongo
from send_mail import send_email
client = pymongo.MongoClient("mongodb+srv://HitKoladiya:hii@cluster0.lwkdtbn.mongodb.net/test")
db = client['HEIS']
signup = db['signup']
signin = db['signin']

def newSignIn(email,password):
    try:
        user=signin.find_one({'email':email})
        if(user==None):
            return "user not found"
        if(user['password']==password):
            send_email(email,"Welcome To HEIS",'HEIS new login')
            return 'done'
        else:
            return "incorrect password"
    except:
        return "error"

# print(newSignIn('21it067@charusat.edu.in',"12345678"))
