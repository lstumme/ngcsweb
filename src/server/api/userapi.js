import axios from 'axios';


export const signin = ({ login, password }) => {
    const params = { login, password };
    axios.post('/login', params)
        .then(result => {

        })
        .catch(err => {

        });
};