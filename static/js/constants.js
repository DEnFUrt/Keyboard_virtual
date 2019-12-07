const keyboard = document.getElementById('keyboard');
const inputs = document.querySelectorAll('input[type="text"]');

const keysRus = [
    ['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
    ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
    ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'],
    ['⇧', 'en', '♯', ' ', '㋛', '⇦']
]

const keysEng = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ['⇧', 'ru', '♯', ' ', '㋛', '⇦']
]

const keysSimbol = [
    [],
    [],
    ['ru', ' ', '㋛', '⇦']
]

const keysEmoji = [
    [],
    [],
    ['ru', '♯', ' ', '⇦']
]

const keysRusUpper = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [],
    [],
    ['⇩', 'en', '♯', ' ', '㋛', '⇦']
]

const keysEngUpper = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [],
    [],
    ['⇩', 'ru', '♯', ' ', '㋛', '⇦']
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
            renderKeyboard(keyboard, keysEng);
            }),
    },

    {
        keyControl: 'ru',
        result: (control) => control.addEventListener('click', function() {
            renderKeyboard(keyboard, keysRus);
            })
    },

    {
        keyControl: '㋛',
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
            renderKeyboard(keyboard, keysRusUpper /* или keysEngUpper */); //доделать проверку на язык
            })
    },

    {
        keyControl: '⇩',
        result: (control) => control.addEventListener('click', function() {
            renderKeyboard(keyboard, keysRus /* или keysEng */); //доделать проверку на язык
            })
    },
]