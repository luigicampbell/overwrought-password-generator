var Logic = /** @class */ (function () {
    function Logic() {
        var year = UTIL.getCurrentYear();
        document.querySelector('span.currentYear').textContent = String(year);
    }
    Logic.getPassword = function () {
        var input = document.querySelector('input.num-input');
        var length = Number(input.value);
        var password = UTIL.generatePassword(length);
        document.querySelector('.password').textContent = password;
    };
    return Logic;
}());
new Logic();
