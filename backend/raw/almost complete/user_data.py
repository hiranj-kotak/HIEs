import pymongo
client = pymongo.MongoClient("mongodb+srv://HitKoladiya:hii@cluster0.lwkdtbn.mongodb.net/test")
db = client['HEIS']
userdata = db['user_data']
def users(data):
    userdata.insert_one(data)
    data=userdata.find_one({'email':data['email']},{'_id':0})
    # print(data)
    return data