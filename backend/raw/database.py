import pymongo
from nirf100 import  nirf
from naac_exl import naac
# from nirf100 import  nirf
# from naac_exl import naac
client = pymongo.MongoClient('mongodb://localhost:27017/')
db = client['HEIS']
collection=db['college_data']
collection1 = db['nirf_api']
collection3 = db['naac_api']
collection2 = db['login_details']

college_data_row = {
  "instituteName": "Imamul Hai Khan Law College",
  "type": "overall",
  "NIRF": "15",
  "NBA": "ds",
  "NAAC_grade": "C"
}


login_data_row = {
    "email":"kotakhiranj",
    "password":"hellohit"
}

# collection3.insert_one(login_data_row)
def insert(data):
    collection.insert_one(data)

def nirf_api(nirf_api):
    collection1.insert_many(nirf_api)

def naac_api(naac):
    collection3.insert_many(naac)

def find(name):
    data = collection.find_one({"instituteName": name})
    return data

if __name__ == "__main__":
    data100 = []
    data100.append(nirf())
    nirf_api(data100)
    # print(data100)
    data200=naac()
    # print(len(data200))
    naac_api(data200)
    # print(data200)
    # a= collection3.find()
    # for i in a:
    #     print(i)