import requests
from bs4 import BeautifulSoup as b
def table(url):
    r = requests.get(url)

    soup = b(r.content, "html.parser")

    data = []
    table = soup.find('table')
    for  row  in table.find_all("tr"):
        for t  in  row.find_all_next("td")[1]:
            # print(t.text)
            data.append(t.text)
            break
    del data[0]
    # print(data)
    data1 = []
    for i in range(len(data)):
        if i%3 ==0:
            data1.append(data[i])

    return data1

# overall_link = "https://www.nirfindia.org/2022/OverallRanking.html"
# overall = table(overall_link)
# print(f"overall {overall}")
# university_link = "https://www.nirfindia.org/2022/UniversityRanking.html"
# university = table(university_link)
# print(f"university {university}")
# college_link = "https://www.nirfindia.org/2022/CollegeRanking.html"
# college = table(college_link)
# print(f"college {college}")
# research_link = "https://www.nirfindia.org/2022/ResearchRanking.html"
# research_institutes = table(research_link)
# engineering_link = "https://www.nirfindia.org/2022/EngineeringRanking.html"
# engineering_rank = table(engineering_link)

links = {
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
    "architecture": "https://www.nirfindia.org/2022/ArchitectureRanking.html",
}

data =[]
for  key in links:
    data1 = table(links[key])
    data.append(data1)
    print(len(data1))

with open("data.txt", "w") as external_file:
    print(data, file=external_file)
    external_file.close()
        
print(data)