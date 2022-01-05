import jsSHA from 'jssha';

export const generateSignature = async (oAuthCredentials) => {

    let baseString = oAuthBaseString(oAuthCredentials.HTTPMethod, oAuthCredentials.url, oAuthCredentials.oAuthConsumer, oAuthCredentials.oAuthToken, oAuthCredentials.timestamp, oAuthCredentials.nonce);
    let signingKey = oAuthSigningKey(oAuthCredentials.oAuthConsumerSecret, oAuthCredentials.oAuthTokenSecret);
    let signature = oAuthSignature(baseString, signingKey);

    return signature;

}

function oAuthBaseString(method, url, key, token, timestamp, nonce) {
    return method
        + '&' + percentEncode(url)
        + '&' + percentEncode(genSortedParamStr(key, token, timestamp, nonce));
};

const oAuthSigningKey = (consumer_secret, token_secret) => {
    return consumer_secret + '&' + token_secret;
};

const oAuthSignature = (base_string, signing_key) => {
    var signature = hmac_sha1(base_string, signing_key);
    return percentEncode(signature)
};

const percentEncode = (str) => {
    return encodeURIComponent(str).replace(/[!*()']/g, (character) => {
        return '%' + character.charCodeAt(0).toString(16);
    });
};

const hmac_sha1 = (string, secret) => {
    let shaObj = new jsSHA("SHA-1", "TEXT");
    shaObj.setHMACKey(secret, "TEXT");
    shaObj.update(string);
    let hmac = shaObj.getHMAC("B64");
    return hmac;
};

const genSortedParamStr = (key, token, timestamp, nonce) => {
    let paramObj = {
        oauth_consumer_key: key,
        oauth_nonce: nonce,
        oauth_signature_method: 'HMAC-SHA1',
        oauth_timestamp: timestamp,
        oauth_token: token,
        oauth_version: '1.0'
    }
    let paramObjKeys = Object.keys(paramObj);
    let len = paramObjKeys.length;
    paramObjKeys.sort();
    let paramStr = paramObjKeys[0] + '=' + paramObj[paramObjKeys[0]];
    for (var i = 1; i < len; i++) {
        paramStr += '&' + paramObjKeys[i] + '=' + percentEncode(decodeURIComponent(paramObj[paramObjKeys[i]]));
    }
    return paramStr;
};

// Copied the code from this article -  https://imagineer.in/blog/authorizing-twitter-api-calls-in-javascript/