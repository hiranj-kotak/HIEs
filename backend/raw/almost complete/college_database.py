import pymongo
client = pymongo.MongoClient("mongodb+srv://HitKoladiya:hii@cluster0.lwkdtbn.mongodb.net/test")
db = client['HEIS']
college = db['real_college_data']


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
    print(data["instituteName"])
    datas = college.find_one({"instituteName": data["instituteName"]}, {"_id": 0})
    print(datas)
    return datas



hit={
  "_id": {
    "$oid": "636522c574ddc8836c7b7ed1"
  },
  "instituteName": "nirma university",
  "NAAC": "A+",
  "CGPA": "3.33",
  "NIRF": {
    "overall": "151 to 200",
    "engineering": "125",
    "management": "45",
    "university": "101 to 150",
    "pharmacy": "28",
    "architecture": "21"
  }
}
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
# college_data_entry(hit)