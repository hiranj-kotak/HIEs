import pymongo
client = pymongo.MongoClient("mongodb+srv://HitKoladiya:hii@cluster0.lwkdtbn.mongodb.net/test")
db = client['HEIS']
signin = db['signin']

def likedColleges(email,id):
    try:
        signin.update_one({'email':email},{'$push':{'liked':id}})
        return 'done'
    except Exception as e:
        print(e)
        return 'error'

def unlikedColleges(email,id):
    try:
        signin.update_one({'email':email},{'$pull':{'liked':id}})
        return 'done'
    except Exception as e:
        print(e)
        return 'error'

# likedColleges('koladiyahit44@gmail.com','id=1')
# unlikedColleges('koladiyahit44@gmail.com','id=1')