import pymongo
import random
# import time
from send_mail import send_email
client = pymongo.MongoClient("mongodb+srv://HitKoladiya:hii@cluster0.lwkdtbn.mongodb.net/test")
db = client['HEIS']
signup = db['signup']
signin = db['signin']
def newSignUp(email, password):
    try:
        temp=signin.find_one({'email':email})
        if(temp!=None):
            return "already user"
        OTP = random.randint(1111, 9999)
        message='your OTP is: '+str(OTP)
        user={
            'email':email,
            'password':password,
            'OTP':OTP
        }
        x=signup.find_one({'email':email})
        if(x==None):
            signup.insert_one(user)
        else:
            signup.update_one({'email':x['email']},{'$set':{'OTP':OTP,'password':password}})
    except:
        return 'error'
    return send_email(email,message,'HEIS OTP')
# start=time.time()
# print(newSignUp('21it067@charusat.edu.in','12345678'))
# print(time.time()-start)