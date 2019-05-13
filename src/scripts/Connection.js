import axios from 'axios';

class Connection {
    get(endpoint) {
        axios.get(process.env.REACT_APP_API_ENDPOINT + endpoint).then(result => {
            return result.data;
        }).catch(error => {
            return null;
        });
    }

    post(endpoint, data) {
        axios.post(process.env.REACT_APP_API_ENDPOINT + endpoint, data).then(result => {
            return result.data;
        }).catch(error => {
            return null;
        });
    }
}

export default new Connection();
