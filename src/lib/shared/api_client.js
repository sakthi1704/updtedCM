import axios from "axios";
import {BASE_URL} from "../../components/Constants/api_routes";
import Cookies from 'js-cookie'

export const request = function (options) {

    const authHeaders = Cookies.get();
    const client = axios.create({
        baseURL: BASE_URL,
        headers: authHeaders
    });

    const onSuccess = function (response) {
        if (options.handleHeaders === 1) {
            Cookies.set('token', response.data.token)
            Cookies.set('role', response.data.role)
            Cookies.set('uid', response.data.uid)
            
        }
        if (options.handleHeaders === 0) {
            Cookies.remove()
            window.location.href = '/admin_users/login';
        }
        return response.data;
    };

    const onError = function (error) {
        if (options.handleHeaders === 0) {
            Cookies.remove()
        }
        if (error.response) {
            if(error.response.status === 401 && options.handleHeaders !== 1){
                window.location.href = '/admin_users/login';
            }
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);

        } else {
            console.error('Error Message:', error.message);
        }

        return Promise.reject(error.response?error.response.data:{message:"something went wrong",success:false} || error.message || error.error);
    };

    return client(options)
        .then(onSuccess)
        .catch(onError);
};

export const authRequest = function (options){

    const client = axios.create({
        baseURL: BASE_URL,
        headers: options.headers
    });

    const onSuccess = function (response) {
        return response.data;
    };
    
    return client(options)
        .then(onSuccess)
        .catch();
};


export default request;


