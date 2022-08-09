import json
import spacy
nlp = spacy.load('en_core_web_sm')


def open_naac_json_fie():
    with open("almost complete/naac1.json", "r") as external_file:
        data = json.load(external_file)
        external_file.close()
    return data

def create_token(a):
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

def validate_naac_grade(ins_name,cgpa,naac_grade):
    ans = create_token(ins_name)
    data = open_naac_json_fie()
    hello = []
    for i in data:
        # print(i)
        if (i["CGPA"] == cgpa):
            hello.append(i)

    # print(hello)
    rank = {}
    if (len(hello) > 1):
        for un in hello:
            if (un['instituteName'] == ans):
                rank = un

    if rank['NAAC_grade'] == naac_grade:
        return True


# input_Data = {
#   "instituteName": "INDIRA GANDHI NATIONAL OPEN UNIVERSITY",
#   "type": "university",
#   "NIRF": "132",
#   "NBA": "ds",
#   "NAAC_grade": "A++",
#     "CGPA":"3.56"
# }