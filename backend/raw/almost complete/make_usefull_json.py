def encode_json(request_json):
    test_NIRF=request_json["NIRF"]
    NIRF={}
    for i in test_NIRF:
        NIRF[i["name"]]=i["rank"]
    request_json["NIRF"]=NIRF
    print("encode data is:"+request_json)
    return request_json

def decode_json(request_json):
    NIRF=[]
    test=request_json["NIRF"]
    for i in test:
        a={
            "name":i,
            "rank":test[i]
        }
        NIRF.append(a)
    request_json["NIRF"]=NIRF
    print("decode data is:" + request_json)
    return request_json



# d1=encode_json({
#     "CGPA": "3.33",
#     "NAAC": "A+",
#     "NBA": "",
#     "NIRF": [
#         {
#             "name": "overall",
#             "rank": "151 to 200"
#         },
#         {
#             "name": "engineering",
#             "rank": "125"
#         },
#         {
#             "name": "management",
#             "rank": "45"
#         },
#         {
#             "name": "university",
#             "rank": "101 to 150"
#         }
#     ],
#     "instituteName": "nirma university"
# })
# print(encode_json(d))

# print(decode_json(d1))
# decode_json(d1)



# d1={
#     'id': 'longrandomstring123',
#     'instituteName': 'NIrma UNiversity',
#     'NAAC': 'A+',
#     'CGPA': '3.33',
#     'NBA': 'Not decided what to do',
#     'NIRF':
#         {
#         'overall': '151 to 200',
#          'engineering': '125',
#          'management': '45',
#          'university': '101 to 150',
#          'pharmacy': '28',
#          'architecture': '21'}
#     }

# d={
#     "id": "longrandomstring123",
#     "instituteName": "NIrma UNiversity",
#     "NAAC": "A+",
#     "CGPA": "3.33",
#     "NBA": "Not decided what to do",
#     "NIRF":[
#          {
#              "name":"overall",
#              "rank":"151 to 200"
#          },
#          {
#              "name":"engineering",
#              "rank":"125"
#          },
#         {
#              "name":"management",
#              "rank":"45"
#          },
#          {
#              "name":"university",
#              "rank":"101 to 150"
#          },
#          {
#              "name":"pharmacy",
#              "rank":"28"
#          },
#          {
#              "name":"architecture",
#              "rank":"21"
#          }
#      ]
# }
