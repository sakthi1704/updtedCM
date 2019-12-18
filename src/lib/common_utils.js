export const flattenObjectToArray = (object,key) =>{
    let values = [];
    for (let i =0; i < object.length; i++){
        if(object[i].hasOwnProperty(key)){
            values.push(object[i][key]);
        }
    }
    return values;
};

export const getParams = function (url) {
    let params = {};
    let parser = document.createElement('a');
    parser.href = url;
    let query = parser.search.substring(1);
    let lets = query.split('&');
    for (let i = 0; i < lets.length; i++) {
        let pair = lets[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};