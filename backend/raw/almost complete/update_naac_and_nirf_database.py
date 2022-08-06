import pymongo
# from nirf100 import nirf
from naac_exl import naac
client = pymongo.MongoClient("mongodb+srv://HitKoladiya:hii@cluster0.lwkdtbn.mongodb.net/test")
db = client['HEIS']


def nirf_database(data):

    ''' below operation is for delete all collection and then create new collection.
        update function is there but in update function we need loop so more time consuming.'''

    collection_overall = db['nirf_api_overall']
    collection_overall.drop()
    collection_university = db['nirf_api_university']
    collection_university.drop()
    collection_college = db['nirf_api_college']
    collection_college.drop()
    collection_research = db['nirf_api_research']
    collection_research.drop()
    collection_engineering = db['nirf_api_engineering']
    collection_engineering.drop()
    collection_management = db['nirf_api_managment']
    collection_management.drop()
    collection_pharmacy = db['nirf_api_pharmacy']
    collection_pharmacy.drop()
    collection_medical = db['nirf_api_medical']
    collection_medical.drop()
    collection_dental = db['nirf_api_dental']
    collection_dental.drop()
    collection_law = db['nirf_api_law']
    collection_law.drop()
    collection_architecture = db['nirf_api_architecture']
    collection_architecture.drop()


    collection_overall.insert_many(data['overall'])
    collection_university.insert_many(data['university'])
    collection_college.insert_many(data['college'])
    collection_research.insert_many(data['research_institutes'])
    collection_engineering.insert_many(data['engineering'])
    collection_management.insert_many(data['management'])
    collection_pharmacy.insert_many(data['pharmacy'])
    collection_medical.insert_many(data['medical'])
    collection_dental.insert_many(data['dental'])
    collection_law.insert_many(data['law'])
    collection_architecture.insert_many(data['architecture'])


# nirf_database(nirf())

def naac_database(data):
    # print(data)
    collection_naac = db['naac']
    collection_naac.drop()
    collection_naac.insert_many(data)
# naac()