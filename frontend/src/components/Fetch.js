import axios from "axios";

const fetchData = (url) => {
    const options = { method: "GET", url: url };
    let data;
    axios
        .request(options)
        .then(function (response) {
            data = response.data;
            console.log(data);
            return data;
        })
        .catch(function (error) {
            console.error(error);
        });
};

export default fetchData;
