import  requests
from bs4 import BeautifulSoup




url = "http://naac.gov.in/images/docs/ACCREDITATION_STATUS/Institutions_Accredited_by_NAAC_Whose_Accreditation_Period_Is_Valid_uploaded_1_8_2022.xls"
r = requests.get(url)

with open("naac.xls",'wb') as f:
    for chunk in r.iter_content(chunk_size=8192):
        if chunk:
            f.write(chunk)
