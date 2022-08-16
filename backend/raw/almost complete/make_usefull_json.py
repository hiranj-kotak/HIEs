def make_json(request_json):
    test_NIRF=request_json["NIRF"]
    NIRF={}
    for i in test_NIRF:
        # k=i["name"]
        NIRF[i["name"]]=i["rank"]
    # print(NIRF)
    request_json["NIRF"]=NIRF
    return request_json

# make_json(d)
# print(make_json(d))
#
# d={
#     "ins":"hii",
#     "naac":"a",
#     "NIRF":[
#         {
#             "name":"a1",
#             "rank":"11"
#         },
# {
#             "name":"b1",
#             "rank":"22"
#         },
# {
#             "name":"c1",
#             "rank":"33"
#         }
#     ]
# }