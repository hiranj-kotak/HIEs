
with open("naac.txt", "r") as external_file:
    data = external_file.read()
    external_file.close()


print(data)