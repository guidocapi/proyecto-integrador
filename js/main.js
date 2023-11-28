const buttons = document.querySelectorAll('#id-card__button--seemore');
const addButton = document.querySelectorAll('.button--confirm');
const subtractButton = document.querySelectorAll('.button--danger');
const countElements = document.querySelectorAll('.card__count');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const paragraph = button.previousElementSibling;
        show(paragraph, button);
    });
});

function show(paragraph, button) {
    paragraph.classList.remove('card__text');
    button.innerText = "Ver menos";
    button.onclick = function () {
        hide(paragraph, button);
    };
}

function hide(paragraph, button) {
    paragraph.classList.add('card__text');
    button.innerText = "Ver más";
    button.onclick = function () {
        show(paragraph, button);
    };
}

addButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        let count = parseInt(countElements[index].innerText);
        count++;
        countElements[index].innerText = count;
    });
});

subtractButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        let count = parseInt(countElements[index].innerText);
        if (count > 0) {
            count--;
            countElements[index].innerText = count;
        }
    });
});