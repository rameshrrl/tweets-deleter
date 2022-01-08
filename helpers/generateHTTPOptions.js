export const generateHTTPOptions = (HTTPMethod, authorization) => {
    
    const options =  {
        method: HTTPMethod,
        headers: {'Authorization': authorization }
    }

    return options;
}