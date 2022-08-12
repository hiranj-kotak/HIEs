def sign_up(data):
  try:
    user=auth.create_user_with_email_and_password(data['username'],data['password'])
    # data['value'] = "True"
    return user
  except:
    data['value'] = "username or password are not in correct way"
    return data

def sign_in(data):
  # print(data['username'])
  e=data['username']
  p=data['password']
  try:
    # auth.sign_in_with_email_and_password(data['username'],data['password'])
    hii=auth.sign_in_with_email_and_password(e,p)
    data['value']="True"
    return hii
  except:
    # print("invalid username of password")
    data['value'] = "invalid username of password"
    return data

# print(sign_up(d2))
# print(sign_in(d2))

#
# d1 = {
#   "username": "hiranj@gmail.com" ,
#   "password" : "hii"
# }
# d2={
# "username": "t@gmail.com" ,
#   "password" :""
#
# }