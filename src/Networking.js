import axios from 'axios';

const baseUrl = 'http://192.168.0.10:8080/api/v1';

export const changePassword = async (token, password) => {
    return await axios
        .put(baseUrl + '/password/reset', {token: token, password: password})
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log(error);
            console.log(error.response.status);
            console.log(error.response.data);

            return {
                status: error.response.status,
                data: error.response.data,
            };
        });
};
