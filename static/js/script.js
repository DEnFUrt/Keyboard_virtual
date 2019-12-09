let targetInput = inputs[0];
let arrInputValue = localStorage.getItem('arrInputValue') ?
    JSON.parse(localStorage.getItem('arrInputValue')) : [];
let lang = setLang();

console.table(localStorage);

for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];

    input.value = arrInputValue[i] ? arrInputValue[i] : '';

    input.addEventListener('focus', function () {
        targetInput = input;
    })
}

/* for (i = 0; i < inputs.length; i++) {
    arrInputValue[i] ? inputs[i].value = arrInputValue[i] : '';
} */

function setLang() {
    return localStorage.getItem('lang') ? localStorage.getItem('lang') : 'ru';
}

function keyBind(control, key) {
    let keyAction = arrKeyControls.find(keyAction => keyAction.keyControl === key);
    if (keyAction) {
        control.classList.add('key-control');
        keyAction.result(control);
    } else {
        control.addEventListener('click', function () {
            targetInput.value += key;
            targetInput.focus();
        });
    }
}

function renderKeyboard(container, keys) {
    container.innerHTML = '';

    lang = setLang();

    for (let i = 0; i < keys.length; i++) {
        const row = keys[i];

        const rowElement = document.createElement('div');
        rowElement.className = 'row';

        for (let k = 0; k < row.length; k++) {
            const keyBtn = document.createElement('button');
            keyBtn.className = 'key';
            keyBtn.innerText = row[k];

            keyBind(keyBtn, row[k]);

            rowElement.appendChild(keyBtn);
        }

        container.appendChild(rowElement);
    }
}

//renderKeyboard(keyboard, keysRus);
lang === 'ru' ? renderKeyboard(keyboard, keysRus) :
    renderKeyboard(keyboard, keysEng);