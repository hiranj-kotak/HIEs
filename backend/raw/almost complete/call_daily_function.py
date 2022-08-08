from backend.raw.naac_data_sort import naac_sort
from naac_exl import naac
from nirf100 import nirf
from update_naac_and_nirf_database import nirf_database,naac_database
from naac_data_sort import naac_sort
import  json
import time

def daily_update():
    # def func():
        # naac_data=naac()
        # with open("../naac.json", "w") as external_file:
        #     json.dump(naac_data, external_file)
        #     external_file.close()
        # naac_database(naac_data)
        #
        # nirf_data=nirf()
        # with open("../nirf.json", "w") as external_file:
        #     json.dump(nirf_data,external_file)
        #     external_file.close()
        # nirf_database(nirf_data)

        naac_sor=naac_sort()
        with open("../naac_sort.json", "w") as external_file:
            json.dump(naac_sor, external_file)
            external_file.close()
        # naac_database(naac_data)

    # func()
    # schedule.every().day.at("02:00").do(func)
    # schedule.every().minutes.do(func)

    # while True:
    #     func()
    #     # print("run")
    #     time.sleep(86400)

daily_update()