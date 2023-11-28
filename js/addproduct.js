const inputName = document.getElementById("id-product_name");
const inputDescription = document.getElementById("id-product_description");
const inputPrice = document.getElementById("id-product_price");
const inputStock = document.getElementById("id-product_stock");
const buttonValidate = document.getElementById("id-validate");

const regexName = /^([a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+)$/;
const regexDescription = /^[.*\S.*]/;
const regexPrice = /^([1-9]\d+|[1-9])+(\.\d{0,2})?/;
const regexStock = /^(?!0$)([1-9]\d{0,2})$/;


function validateName() {
    if (!regexName.test(inputName.value)) {
        inputName.nextElementSibling.style.display = 'block';
    } else {
        inputName.nextElementSibling.style.display = 'none';
    }
}

function validateDescription() {
    if (!regexDescription.test(inputDescription.value)) {
        inputDescription.nextElementSibling.style.display = 'block';
    } else {
        inputDescription.nextElementSibling.style.display = 'none';
    }
}

function validatePrice() {
    if (!regexPrice.test(inputPrice.value)) {
        inputPrice.nextElementSibling.style.display = 'block';
    } else {
        inputPrice.nextElementSibling.style.display = 'none';
    }
}

function validateStock() {
    if (!regexStock.test(inputStock.value)) {
        inputStock.nextElementSibling.style.display = 'block';
    } else {
        inputStock.nextElementSibling.style.display = 'none';
    }
}



function validate() {
    validateName();
    validateDescription();
    validatePrice();
    validateStock();
}

buttonValidate.onclick = validate;