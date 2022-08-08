import pymongo
from flask import jsonify
# from nirf100 import nirf
# from naac_exl import naac
client = pymongo.MongoClient("mongodb+srv://HitKoladiya:hii@cluster0.lwkdtbn.mongodb.net/test")
db = client['HEIS']


def college_data_entry(data):
    college = db['college_data']
    college.insert_one(data)
    datas=college.find_one({"instituteName":data["instituteName"]},{"_id":1})

    # ids=str(datas["_id"])
    # print(ids)
    return datas



# d={
# "instituteName": "NIRMA UNIVERSITY",
# }
# print(college_data_entry(d))

# ata =collection_nqm.find_one({'name':data['name']},{'_id':0})