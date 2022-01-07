import jsSHA from 'jssha';

export const generateSignature = async (oAuthCredentials) => {

    const baseString = oAuthBaseString(oAuthCredentials.HTTPMethod, oAuthCredentials.url, oAuthCredentials.oAuthConsumer, oAuthCredentials.oAuthToken, oAuthCredentials.timestamp, oAuthCredentials.nonce, oAuthCredentials.reqParams);
    const signingKey = oAuthSigningKey(oAuthCredentials.oAuthConsumerSecret, oAuthCredentials.oAuthTokenSecret);
    const signature = oAuthSignature(baseString, signingKey);

    return signature;

}

const oAuthBaseString = (method, url, key, token, timestamp, nonce, reqParams) => {
    return method
        + '&' + percentEncode(url)
        + '&' + percentEncode(genSortedParamStr(key, token, timestamp, nonce, reqParams));
};

const oAuthSigningKey = (consumer_secret, token_secret) => {
    return consumer_secret + '&' + token_secret;
};

const oAuthSignature = (base_string, signing_key) => {
    const signature = generateHmacSHA1(base_string, signing_key);
    return percentEncode(signature)
};

const percentEncode = (str) => {
    return encodeURIComponent(str).replace(/[!*()']/g, (character) => {
        return '%' + character.charCodeAt(0).toString(16);
    });
};

const generateHmacSHA1 = (string, secret) => {
    let shaObj = new jsSHA("SHA-1", "TEXT");
    shaObj.setHMACKey(secret, "TEXT");
    shaObj.update(string);
    let hmac = shaObj.getHMAC("B64");
    return hmac;
};

const mergeObjs = (obj1, obj2) => {
    for (let attr in obj2) {
        obj1[attr] = obj2[attr];
    }
    return obj1;
};

const genSortedParamStr = (key, token, timestamp, nonce, reqParams) => {

    let paramObj = mergeObjs(
        {
            oauth_consumer_key: key,
            oauth_nonce: nonce,
            oauth_signature_method: 'HMAC-SHA1',
            oauth_timestamp: timestamp,
            oauth_token: token,
            oauth_version: '1.0'
        },
        reqParams
    );
    let paramObjKeys = Object.keys(paramObj);
    let len = paramObjKeys.length;
    paramObjKeys.sort();
    let paramStr = paramObjKeys[0] + '=' + paramObj[paramObjKeys[0]];
    for (let i = 1; i < len; i++) {
        paramStr += '&' + paramObjKeys[i] + '=' + percentEncode(decodeURIComponent(paramObj[paramObjKeys[i]]));
    }
    return paramStr;
};

// Took reference from this article -  https://imagineer.in/blog/authorizing-twitter-api-calls-in-javascript/