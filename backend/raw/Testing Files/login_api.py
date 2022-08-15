from flask import Flask,request,render_template,redirect,url_for,session
import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017")
db = client['login_info']
collection = db['login_data']
login_data = {
    "username":"hiranj",
    "password":"hello"
}
# collection.insert_one(login_data)
app = Flask(__name__)


@app.route('/')
@app.route('/login', methods = ['GET','POST'])
def login():
    msg = ''
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form:
        username = request.form['username']
        password = request.form['password']
        account = collection.find_one({"username":username})
        if account:
            session['loggedin'] = True
            session['id'] == account['id']
            session['username'] = account['username']
            msg = "logged in "
            return render_template('index.html',msg = msg)
        else:
            msg = 'incorrect username/password'
            return render_template('frontend/src/components/Signin.js',msg = msg)



