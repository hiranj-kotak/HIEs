import pymongo
client = pymongo.MongoClient("mongodb+srv://HitKoladiya:hii@cluster0.lwkdtbn.mongodb.net/test")
db = client['HEIS']
college = db['college_data']


def college_data_entry(data):
    data["instituteName"]=data["instituteName"].lower()
    college.insert_one(data)
    data["_id"]=None
    # print(data)
    # datas = college.find_one({"instituteName": data["instituteName"]}, {"_id": 0})
    # print(datas)
    # return datas
def Search_data(data):
    data["instituteName"] = data["instituteName"].lower()
    datas = college.find_one({"instituteName": data["instituteName"]}, {"_id": 0})
    # print(datas)
    return datas

# d={
#     "instituteName":"nirma university"
# }
# Search_data(d)
# ids=str(datas["_id"])
# print(ids)
# return datas



# d={
# "instituteName": "NIRMA UNIVERSITY",
# }
# print(college_data_entry(d))

# ata =collection_nqm.find_one({'name':data['name']},{'_id':0})