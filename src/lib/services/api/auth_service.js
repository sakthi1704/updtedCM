import request from "../../shared/api_client";

function login(formData) {
    return request({
        url: '/admin_users/login',
        method: 'post',
        data: formData,
        handleHeaders: 1
    });
}

function logout() {
    return request({
        url: '',
        method: 'DELETE',
        handleHeaders: 0,
    });
}

const AuthClient = {
    login, logout
};

export default AuthClient;