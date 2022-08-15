import json
import spacy
nlp = spacy.load('en_core_web_sm')


def open_naac_json_fie():
    with open("naac1.json", "r") as external_file:
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

    if rank['NAAC_grade'] == input_data["NAAC_grade"]:
        return True
    else:
        return False

def validate_nirf_rank(input_data):
    data = open_nirf_json_fie()
    ans  = create_token_nirf(input_data["instituteName"])
    tY = input_data["type"]
    list = data[tY]
    try:
        rank = int(input_data["NIRF"]) -1
        if rank <=100:
            final_data = list[rank]
            if final_data["instituteName"] == ans:
                # print(final_data)
                return True
            else:
                return False
    except:
        for i in list:
            if i["instituteName"] == ans:
                if i["NIRF"] == input_data["NIRF"]:
                    return True
                else:
                    return False
        return False

input_Data = {
  "instituteName": "savi  trib aiphulepuneunive,rsity",
  "type": "overall",
  "NIRF": "25",
  "NBA": "ds",
  "NAAC_grade": "A++",
    "CGPA":"3.56"
}

# print(validate_nirf_rank(input_Data))
# print(validate_naac_grade(input_Data))