import smtplib
def send_email(email,TEXT,SUBJECT):
    try:
        s = smtplib.SMTP('smtp.gmail.com', 587)

        # start TLS for security
        s.starttls()

        # Authentication
        s.login("22ehe009@charusat.edu.in", "Hit_Lo_123456")

        message = 'Subject: {}\n\n{}'.format(SUBJECT, TEXT)

        # sending the mail
        s.sendmail("22ehe009@charusat.edu.in", email, message)

        # terminating the session
        s.quit()
        return 'done'
    # except smtplib.SMTPException as e:
    #     return 'error',
    except:
        return 'error'

# print(send_email('koladiyahit44@gmail.com','hii,from HEIS','OTP by HEIS'))