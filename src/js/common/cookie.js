export function setCookie(name, value, expire) {
    let Days = 30,
        exp = new Date();
    exp.setTime(exp.getTime() + (expire ? expire : Days) * 24 * 60 * 60 * 1000);
    //document.cookie = name + "=" + encodeURI(value) + ";expires=" + exp.toGMTString() + `${name === 'token' ? ';domain=.tairanmall.com' : ''}`+ ";path=/";
    document.cookie = name + "=" + encodeURI(value) + ";expires=" + exp.toGMTString() + ';domain=.tairanmall.com;path=/';
}

export function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))

        return decodeURI(arr[2]);
    else
        return null;
}


export function clearCookie(name) {
    let exp = new Date();
    exp.setTime(exp.getTime() + -1 * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + encodeURI('') + ";expires=" + exp.toGMTString() + ';domain=.tairanmall.com;path=/';
    document.cookie = name + "=" + encodeURI('') + ";expires=" + exp.toGMTString() + ';domain=wx.tairanmall.com;path=/';
}
