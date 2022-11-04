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



# hit={
#   "instituteName": "Sarvajanik Education Society",
#   "NAAC": "A",
#   "CGPA": "3.2",
#   "NIRF": {
# "overall":"15",
#       "university":"8"
#   }
# }
#
#
#
# hiranj = {
#   "instituteName": "Birla Institute of Technology & Science - Pilani",
#   "NAAC": "A",
#   "CGPA": "3.45",
#   "NIRF" :{
#     "university": "18",
#     "engineering":"29",
#     "overall" : "32",
#     "pharmacy":"5",
#     "research" : "33",
#   }
# }
#
# college_data_entry(hiranj)