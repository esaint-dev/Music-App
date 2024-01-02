const BoxEl = document.getElementById('logReg');
const Btn = document.getElementById('signUp');
const contEl = document.getElementById('ovrlay');
const close = document.getElementById('close')

Btn.addEventListener('click', function() {
    BoxEl.style.display = "block";
    contEl.style.display = "block"

});

close.onclick = function () {
    BoxEl.style.display = "none"
    contEl.style.display = "none"
}

