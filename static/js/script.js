let targetInput = inputs[0];

for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];

    input.addEventListener('focus', function () {
        targetInput = input;
    })
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

renderKeyboard(keyboard, keysRus);