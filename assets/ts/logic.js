var Logic = (function () {
    function Logic() {
        var year = UTIL.getCurrentYear();
        document.querySelector('span.currentYear').textContent = String(year);
    }
    Logic.generate = function () {
        var input = document.querySelector('input.num-input');
        var length = Number(input.value);
        var password = UTIL.generatePassword(length);
        document.querySelector('span.text-field').textContent = password;
    };
    Logic.getPassword = function () {
        UTIL.copySelection('p.password');
        Logic.displayModal();
    };
    Logic.displayModal = function () {
        var modal = document.querySelector('div.hide-modal');
        modal.classList.remove('hide-modal');
        modal.classList.add('modal', 'text-center');
        setTimeout(function () {
            modal.classList.add('hide-modal');
            modal.classList.remove('modal');
        }, 1000);
    };
    return Logic;
}());
new Logic();
