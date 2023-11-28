const inputName = document.getElementById("id-name");
const inputEmail = document.getElementById("id-email");
const inputTel = document.getElementById("id-tel");
const inputConsultation = document.getElementById("id-consultation");
const buttonValidate = document.getElementById("id-validate");

const regexName = /^([a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+)$/;
const regexEmail = /^[a-z0-9._]+@[a-z0-9-]+.(com$|com.[a-z0-9]{2}$)/;
const regexTel = /^[0-9-()+\s]+$/;
const regexConsultation = /^[.*\S.*]/;

function validateName() {
    if (!regexName.test(inputName.value)) {
        inputName.nextElementSibling.style.display = 'block';
    } else {
        inputName.nextElementSibling.style.display = 'none';
    }
}

function validateEmail() {
    if (!regexEmail.test(inputEmail.value)) {
        inputEmail.nextElementSibling.style.display = 'block';
    } else {
        inputEmail.nextElementSibling.style.display = 'none';
    }
}

function validateTel() {
    if (!regexTel.test(inputTel.value)) {
        inputTel.nextElementSibling.style.display = 'block';
    } else {
        inputTel.nextElementSibling.style.display = 'none';
    }
}

function validateConsultation() {
    if (!regexConsultation.test(inputConsultation.value)) {
        inputConsultation.nextElementSibling.style.display = 'block';
    } else {
        inputConsultation.nextElementSibling.style.display = 'none';
    }
}

function validate() {
    validateEmail();
    validateName();
    validateTel();
    validateConsultation();
}

buttonValidate.onclick = validate;