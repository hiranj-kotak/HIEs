import pymongo
client = pymongo.MongoClient("mongodb+srv://HitKoladiya:hii@cluster0.lwkdtbn.mongodb.net/test")
db = client['HEIS']
signup = db['signup']
signin = db['signin']
def emailOtpAuth(email,OTP):
    try:
        x=signup.find_one({'email':email})
        if(x==None):
            return 'user not found'
        if(x['OTP']==OTP):
            user={
                'email':x['email'],
                'password':x['password'],
                'liked':[]
            }
            signin.insert_one(user)
            signup.delete_one({'email':email})
            return 'done'
        else:
            return 'wrong otp'
    except:
        return "error"
# print(emailOtpAuth('koladiyahit45@gmail.com',5678))