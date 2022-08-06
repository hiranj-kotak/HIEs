from naac_exl import naac
from nirf100 import nirf
from update_naac_and_nirf_database import nirf_database,naac_database
import time

def daily_update():
    def func():
        naac_data=naac()
        with open("../naac.txt", "w") as external_file:
            print(naac_data, file=external_file)
            external_file.close()
        naac_database(naac_data)

        nirf_data=nirf()
        with open("../nirf.txt", "w") as external_file:
            print(nirf_data, file=external_file)
            external_file.close()
        nirf_database(nirf_data)


    # schedule.every().day.at("02:00").do(func)
    # schedule.every().minutes.do(func)

    while True:
        func()
        print("run")
        time.sleep(86400)

daily_update();