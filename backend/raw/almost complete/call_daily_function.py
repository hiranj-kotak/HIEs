from naac_exl import naac
from nirf100 import nirf
# from update_naac_and_nirf_database import nirf_database,naac_database
import  json
import time

def daily_update():
    def func():
        naac_data=naac()
        with open("../naac.json", "w") as external_file:
            json.dump(naac_data, external_file)
            external_file.close()
        # naac_database(naac_data)

        nirf_data=nirf()
        with open("../nirf.json", "w") as external_file:
            json.dump(nirf_data,external_file)
            external_file.close()
        # nirf_database(nirf_data)

    # func()
    # schedule.every().day.at("02:00").do(func)
    # schedule.every().minutes.do(func)

    # while True:
    #     func()
    #     # print("run")
    #     time.sleep(86400)

daily_update()