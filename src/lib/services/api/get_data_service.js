import request from "../../shared/api_client";
import Cookies from 'js-cookie'

function getData(url, headers) {
    return request({
        url: url,
        method: 'GET',
        headers:{
            Authorization: Cookies.get('token')
        }
    });
}


const DataClient = {
    getData
};
export default DataClient;