import json
import spacy
nlp = spacy.load('en_core_web_sm')


def open_naac_json_fie():
    with open("naac11.json", "r") as external_file:
        data = json.load(external_file)
        external_file.close()
    return data

def open_nirf_json_fie():
    with open("nirf.json", "r") as external_file:
        data = json.load(external_file)
        external_file.close()
    return data
def create_token_naac(a):
    doc = nlp(a)
    tokens = [token.text for token in doc]
    lenn = len(tokens)
    ans = ""
    if lenn >= 3:
        q = tokens[0].lower().strip(".',( ")
        w = tokens[1].lower().strip(".',( ")
        e = tokens[2].lower().strip(".',( ")
        ans = q + w + e
    elif lenn == 2:
        q = tokens[0].lower().strip(".',( ")
        w = tokens[1].lower().strip(".',( ")
        ans = q + w
    else:
        q = tokens[0].lower().strip(".',( ")
        ans = q
    return ans
def create_token_nirf(a):
    doc = nlp(a)
    tokens = [token.text for token in doc]
    # lenn = len(tokens)
    ans = ""
    for i in tokens:
        ans+=i.lower().strip(".',( ")
    return ans
def validate_naac_grade(input_data):
    ans = create_token_naac(input_data["instituteName"])
    data = open_naac_json_fie()
    hello = []
    for i in data:
        # print(i)
        if (i["CGPA"] == input_data["CGPA"]):
            hello.append(i)

    # print(hello)
    rank = {}
    if (len(hello) > 1):
        for un in hello:
            if (un['instituteName'] == ans):
                rank = un

    # print(rank)
    # print(input_data)
    # print(len(rank))
    if len(rank) == 0:
        # return False
        input_data['NAAC']=False
    else:
        if rank['NAAC_grade'] == input_data['NAAC']:
            # return True
            pass
        else:
            # return False
            input_data['NAAC'] = False
    return input_data

def validate_nirf_rank(input_data):

    nirf = input_data['NIRF']
    # print(nirf)
    data = open_nirf_json_fie()
    ans  = create_token_nirf(input_data["instituteName"])
    for type in nirf:
        # print(type)
        # print(nirf[type])

        list = data[type]
        print(nirf[type])
        # print(list)
        try:
            rank = int(nirf[type]) -1
            if rank <=100:
                final_data = list[rank]
                if final_data["instituteName"] == ans:
                    # print(final_data)
                    # nirf[type]=final_data['NIRF']
                    # return True
                    pass
                else:
                    nirf[type] = False
                    # return False
            print(nirf[type])
        except:
            t = nirf[type]
            for i in list:
                if i["instituteName"] == ans:
                    # print(i["instituteName"])
                    # print(ans)
                    # print(nirf[type])
                    if i["NIRF"] == t:
                        print("true")
                        q =True
                    else:
                        q = False
                else:
                    q = False
            nirf[type] = q
    input_data['NIRF']=nirf
    return input_data

# input_Datarint63content}")
# print(validate_nirf_rank(input_Data))
# print(validate_naac_grade(input_Data))