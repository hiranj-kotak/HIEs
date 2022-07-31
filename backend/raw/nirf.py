import requests
from bs4 import BeautifulSoup as b


def table(url):
    r = requests.get(url)
    soup = b(r.content, "html.parser")
    data = []
    table = soup.find('table')
    for row in table.find_all("tr"):
        for t in row.find_all_next("td")[1]:
            # print(t.text)
            data.append(t.text)
            break
    del data[0]
    # print(data)
    data1 = []
    for i in range(len(data)):
        if i % 3 == 0:
            data1.append(data[i])
    list = []
    for i in range(1, len(data1) + 1):
        list.append(i)
    datas = []
    for i in range(len(data1)):
        d1 = {
            "__id": "1",
            "instituteName": "CHARUSAT",
            "NIRFrank": "1"
        }
        d1["__id"] = list[i]
        d1["instituteName"] = data1[i]
        d1["NIRFrank"] = list[i]
        datas.append(d1)

    return datas


def nirf():
    d1 = {
            "overall":"https://www.nirfindia.org/2022/OverallRanking.html",
            "university": "https://www.nirfindia.org/2022/UniversityRanking.html",
            "college": "https://www.nirfindia.org/2022/CollegeRanking.html",
            "research_institutes":"https://www.nirfindia.org/2022/ResearchRanking.html",
            "engineering":"https://www.nirfindia.org/2022/EngineeringRanking.html",
            "managemnent":"https://www.nirfindia.org/2022/ManagementRanking.html",
            "pharmacy": "https://www.nirfindia.org/2022/PharmacyRanking.html",
            "medical": "https://www.nirfindia.org/2022/MedicalRanking.html",
            "dental": "https://www.nirfindia.org/2022/DentalRanking.html",
            "law": "https://www.nirfindia.org/2022/LawRanking.html",
            "architecture": "https://www.nirfindia.org/2022/ArchitectureRanking.html"
        }
    for x,y in d1.items():
        # print(y)
        d1[x] = table(y)
    return d1