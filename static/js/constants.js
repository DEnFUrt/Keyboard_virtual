const keyboard = document.getElementById('keyboard');
const inputs = document.querySelectorAll('input[type="text"]');

const keysRus = [
    ['Esc', 'ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
    ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
    ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'],
    ['⇧', 'en', '♯', ' ', '☺', '⇦', '⏎']
]

const keysEng = [
    ['Esc', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ['⇧', 'ru', '♯', ' ', '☺', '⇦', '⏎']
]

const keysSimbol = [
    ['Esc', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ['~', '?', '!', '@', '#', '$', '%', '^'],
    ['&', '_', '(', ')', '*', '/', '-', '+', '='],
    ['[', ']', '{', '}', '\\', '|', ';', ':'],
    ['`', '\'', '"', '<', '>', ',', '.' ],
    ['ABC', ' ', '☺', '⇦', '⏎']
]

const keysEmoji = [
    ['Esc', '😀', '😃', '😷', '😉', '😌', '😍', '😘'],
    ['😋', '😎', '😞', '😕', '😣', '😢', '😭'],
    ['😡', '😳', '😱', '😐', '👍', '☠', ':)'],
    [':|', ';)', ':(', ',(', 'o_O', ':\\', ':)>'],
    ['ABC', '♯', ' ', '⇦', '⏎']
]

const keysRusUpper = [
    ['Esc', 'Ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ'],
    ['Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э'],
    ['Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю'],
    ['⇩', 'en', '♯', ' ', '☺', '⇦', '⏎']
]

const keysEngUpper = [
    ['Esc', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ['⇩', 'ru', '♯', ' ', '☺', '⇦', '⏎']
]

const arrKeyControls = [
    {
        keyControl: '⇦',
        result: (control) =>  control.addEventListener('click', function() {
            let value = targetInput.value.slice(0, -1);
            targetInput.value = value;
            targetInput.focus();
            }),
    },
    
    {
        keyControl: 'en',
        result: (control) => control.addEventListener('click', function() {
            lang = 'en';
            renderKeyboard(keyboard, keysEng);
            targetInput.focus();
            }),
    },

    {
        keyControl: 'ru',
        result: (control) => control.addEventListener('click', function() {
            lang = 'ru';
            renderKeyboard(keyboard, keysRus);
            targetInput.focus();
            })
    },

    {
        keyControl: '☺',
        result: (control) => control.addEventListener('click', function() {
            renderKeyboard(keyboard, keysEmoji);
            targetInput.focus();
            })
    },
    
    {
        keyControl: '♯',
        result: (control) => control.addEventListener('click', function() {
            renderKeyboard(keyboard, keysSimbol);
            targetInput.focus();
            })
    },

    {
        keyControl: '⇧',
        result: (control) => control.addEventListener('click', function() {
            lang === 'ru' ? renderKeyboard(keyboard, keysRusUpper) :
                renderKeyboard(keyboard, keysEngUpper); 
                targetInput.focus();
            })
    },

    {
        keyControl: '⇩',
        result: (control) => control.addEventListener('click', function() {
            lang === 'ru' ? renderKeyboard(keyboard, keysRus) :
                renderKeyboard(keyboard, keysEng); 
                targetInput.focus();
            })
    },

    {
        keyControl: 'ABC',
        result: (control) => control.addEventListener('click', function() {
            lang === 'ru' ? renderKeyboard(keyboard, keysRus) :
                renderKeyboard(keyboard, keysEng); 
                targetInput.focus();
            })
    },

    {
        keyControl: 'Esc',
        result: (control) => control.addEventListener('click', function() {
            targetInput.value = '';
            targetInput.focus();
            })
    },

    {
        keyControl: '⏎',
        result: (control) => control.addEventListener('click', function() {
            let textAlert = `Вы ввели следующие данные: ` + '\r';
            for(i = 0; i < inputs.length; i++) {
                textAlert += `Строка ${i + 1} - ${inputs[i].value }` + '\r'
            }
            alert(textAlert); 
            targetInput.focus();
            })
    },
]