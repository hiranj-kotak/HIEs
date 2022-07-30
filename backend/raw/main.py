from flask import Flask, jsonify
from list_to_dic import table
import requests
from bs4 import BeautifulSoup as b

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api')
def api():
    url = "https://www.nirfindia.org/2022/OverallRanking.html"

    data=table(url)
    # print(data)
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)



