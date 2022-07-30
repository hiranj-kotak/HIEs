from flask import Flask, jsonify,requests
from list_to_dic import table
from naac_exl import naac
from bs4 import BeautifulSoup as b

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api1')
def api1():
    url = "https://www.nirfindia.org/2022/OverallRanking.html"
    data1=table(url)
    # print(data1)
    return jsonify(data1)

@app.route('/api2')
def api2():
    data2=naac()
    # print(data2)
    return jsonify(data2)


if __name__ == "__main__":
    app.run(debug=True)

#http://127.0.0.1:5000

