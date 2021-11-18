import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/v1';

export const changePassword = async (token, password) => {
    return await axios
        .put(baseUrl + '/password/reset', {token: token, password: password})
        .then(response => {
            return response;
        })
        .catch(error => {
            throw error;
        });
};

export const confirmEmail = async token => {
    return await axios
        .get(baseUrl + '/registration/confirm?token=' + token)
        .then(response => {
            return response;
        })
        .catch(error => {
            throw error;
        });
};
