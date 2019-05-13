import axios from 'axios';

class Connection {
    async get(endpoint) {
        let data = null;

        await axios.get(process.env.REACT_APP_API_ENDPOINT + endpoint).then(result => {
            data = result.data;
        });

        return data;
    }

    async post(endpoint, postData) {
        let data = null;

        await axios.post(process.env.REACT_APP_API_ENDPOINT + endpoint, postData).then(result => {
            data = result.data;
        });

        return data;
    }
}

export default new Connection();
