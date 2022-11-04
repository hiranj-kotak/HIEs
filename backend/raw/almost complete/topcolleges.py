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
        if i == 10:
            break
    # print(ans)
    return ans

# Topcolleges()
