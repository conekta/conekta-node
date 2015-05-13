module.exports = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(input) {
        var me = this;
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4, output;
        output = "";
        chr1 = void 0;
        chr2 = void 0;
        chr3 = void 0;
        enc1 = void 0;
        enc2 = void 0;
        enc3 = void 0;
        enc4 = void 0;
        i = 0;
        input = me._utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else {
                if (isNaN(chr3)) {
                    enc4 = 64;
                }
            }
            output = output + me._keyStr.charAt(enc1) + me._keyStr.charAt(enc2) + me._keyStr.charAt(enc3) + me._keyStr.charAt(enc4);
        }
        return output;
    },
    _utf8_encode: function(string) {
        var c, n, utftext;
        string = string.replace(/\r\n/g, "\n");
        utftext = "";
        n = 0;
        while (n < string.length) {
            c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            n++;
        }
        return utftext;
    }
}