var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var _this = this;
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
    UTIL.copySelection = function (selector) { return __awaiter(_this, void 0, void 0, function () {
        var selection, textToCopy, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selection = document.querySelector(selector);
                    textToCopy = selection.innerText;
                    return [4 /*yield*/, navigator.clipboard.writeText(textToCopy)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return UTIL;
}());
