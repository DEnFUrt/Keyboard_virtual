const keyboard = document.getElementById('keyboard');
const inputs = document.querySelectorAll('input[type="text"]');

const keysRus = [
    ['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
    ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
    ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'],
    ['⇧', 'en', '♯', ' ', '☺', '⇦', '⏎']
]

const keysEng = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ['⇧', 'ru', '♯', ' ', '☺', '⇦', '⏎']
]

const keysSimbol = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ['~', '?', '!', '@', '#', '$', '%', '^'],
    ['&', '_', '(', ')', '*', '/', '-', '+', '='],
    ['[', ']', '{', '}', '\\', '|', ';', ':'],
    ['`', '\'', '"', '<', '>', ',', '.' ],
    ['ABC', ' ', '☺', '⇦', '⏎']
]

const keysEmoji = [
    ['😀', '😃', '🙃', '😉', '😌', '😍', '😘'],
    ['😋', '😎', '😞', '😕', '😣', '😢', '😭'],
    ['😡', '😳', '😱', '😐', '😷', '☠', ':)'],
    [':|', ';)', ':(', ',(', 'o_O', ':\\', ':)>'],
    ['ABC', '♯', ' ', '⇦', '⏎']
]

const keysRusUpper = [
    ['Ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ'],
    ['Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э'],
    ['Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю'],
    ['⇩', 'en', '♯', ' ', '☺', '⇦', '⏎']
]

const keysEngUpper = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
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
            }),
    },
    
    {
        keyControl: 'en',
        result: (control) => control.addEventListener('click', function() {
            lang = 'en';
            renderKeyboard(keyboard, keysEng);
            }),
    },

    {
        keyControl: 'ru',
        result: (control) => control.addEventListener('click', function() {
            lang = 'ru';
            renderKeyboard(keyboard, keysRus);
            })
    },

    {
        keyControl: '☺',
        result: (control) => control.addEventListener('click', function() {
            renderKeyboard(keyboard, keysEmoji);
            })
    },
    
    {
        keyControl: '♯',
        result: (control) => control.addEventListener('click', function() {
            renderKeyboard(keyboard, keysSimbol);
            })
    },

    {
        keyControl: '⇧',
        result: (control) => control.addEventListener('click', function() {
            lang === 'ru' ? renderKeyboard(keyboard, keysRusUpper) :
                renderKeyboard(keyboard, keysEngUpper); 
            })
    },

    {
        keyControl: '⇩',
        result: (control) => control.addEventListener('click', function() {
            lang === 'ru' ? renderKeyboard(keyboard, keysRus) :
                renderKeyboard(keyboard, keysEng); 
            })
    },

    {
        keyControl: 'ABC',
        result: (control) => control.addEventListener('click', function() {
            lang === 'ru' ? renderKeyboard(keyboard, keysRus) :
                renderKeyboard(keyboard, keysEng); 
            })
    },

    {
        keyControl: '⏎',
        result: (control) => control.addEventListener('click', function() {
            alert('Нажата кнопка Ентер'); 
            })
    },
]