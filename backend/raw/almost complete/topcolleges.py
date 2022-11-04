import pymongo
client = pymongo.MongoClient("mongodb+srv://HitKoladiya:hii@cluster0.lwkdtbn.mongodb.net/test")
db = client['HEIS']
college = db['college_data']

def Topcolleges():
    ans=[]
    datas = college.find({},{"_id": 0}).sort("CGPA",-1)
    # print(datas)
    i=0
    for x in datas:
        ans.append(x)
        i+=1
        # print(x["NIRF"])
        if i == 10:
            break
    # print(ans)

    # return ans

# Topcolleges()


# {
#   "instituteName": "nirma university",
#   "NAAC": "A+",
#   "CGPA": "3.33",
#   "NBA": "",
#   "NIRF": {
#     "overall": "151 to 200",
#     "engineering": "125",
#     "management": "45",
#     "university": "101 to 150"
#   }
# }