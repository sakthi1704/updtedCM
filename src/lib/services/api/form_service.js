import request from "../../shared/api_client";

function create(formData,url) {
    return request({
        url: url,
        method: 'POST',
        data: formData,
    });
}


const FormClient = {
    create
};

export default FormClient;