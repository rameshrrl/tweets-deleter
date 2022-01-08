export const generateURLWithRequestQuery = (url, reqParams) => {

    let queryString = '';

    for (let key in reqParams) {
        if (reqParams[key] !== undefined) {
            queryString = `${queryString}${key}=${reqParams[key]}&`            
        }
    }

    return `${url}?${queryString}`.slice(0,-1);

}