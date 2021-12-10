'use strict'

function cesar(str, action, shift) {

    let alphabets = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
    if (action == "encode") {
        let resultStr = [];
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < alphabets.length; j++) {
                if (str[i] === alphabets[j]) {
                    if (j < 33 - shift) resultStr.push(alphabets[j + shift]);
                    else resultStr.push(alphabets[j - 33 + shift]);
                }
            }
            if (str[i] === " ") resultStr.push(" ");
        }
        return resultStr.join("");
    }
    if (action == "decode") {
        let resultStr = [];
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < alphabets.length; j++) {
                if (str[i] === alphabets[j]) {
                    if (j < shift) resultStr.push(alphabets[33 - 1]);
                    else resultStr.push(alphabets[j - shift]);
                }
            }
            if (str[i] === " ") resultStr.push(" ");
        }
        return resultStr.join("");
    }
};


console.log(cesar("саша ела сушку", "encode", 3));
console.log(cesar("фгыг зог фцынц", "decode", 3)); //саша ела сушку

