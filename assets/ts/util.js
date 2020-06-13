var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var UTIL = /** @class */ (function () {
    function UTIL() {
    }
    //Fisher Yates shuffle
    UTIL.shuffle = function (list) {
        var counter = list.length;
        var temp;
        var index;
        // While there remain elements to shuffle…
        while (counter) {
            index = Math.floor(Math.random() * counter--);
            // And swap it with the current element.
            temp = list[counter];
            list[counter] = list[index];
            list[index] = temp;
        }
        return list;
    };
    UTIL.generatePassword = function (length) {
        if (length === void 0) { length = 8; }
        var LOWER_CHARS = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
        var UPPER_CHARS = LOWER_CHARS.join('').toUpperCase().split('');
        var NUMBERS = __spread(Array(10).keys()).map(function (k) { return k.toString(); });
        var SPECIAL_CHARS = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '~', '`', '|', '}', '{', '[', ']', ':', ';', '?', '>', '<', ',', '.', '/', '-', '='];
        var ORDER_MAP = new Map([
            [0, LOWER_CHARS],
            [1, UPPER_CHARS],
            [2, NUMBERS],
            [3, SPECIAL_CHARS]
        ]);
        var MIN_NUMBER_OF_CHARS = length > 8 ? 3 : 2;
        var password = new Array();
        __spread(ORDER_MAP.keys()).forEach(function (key) {
            var upperLimit = Math.floor(Math.random() * MIN_NUMBER_OF_CHARS) + 1;
            for (var i = 0; i < upperLimit; i++) {
                var list = ORDER_MAP.get(key);
                var randomChar = list[Math.floor(Math.random() * list.length)];
                password.push(randomChar);
            }
        });
        while (password.length < length) {
            var randomStart = Math.floor(Math.random() * 4);
            var randomList = ORDER_MAP.get(randomStart);
            var randomChar = randomList[Math.floor(Math.random() * randomList.length)];
            password.push(randomChar);
        }
        return UTIL.shuffle(password).join('');
    };
    UTIL.getCurrentYear = function () {
        return new Date().getFullYear();
    };
    return UTIL;
}());
