// ==UserScript==
// @name         Bot Yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ya.ru/*
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

document.getElementsByName('text')[0].value = "Гобой";
document.getElementsByClassName('button suggest2-form__button button_theme_websearch button_size_xl i-bem')[0].click();

let MY_SITE = 'https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/musical_instruments/oboe'
let ALL_SITE = document.querySelectorAll("a");

for (let SITE of ALL_SITE)
{
     if (SITE==MY_SITE) {console.log("ШАГ 3"); SITE.click(); break;}
     else {console.log("Сайт не найден")}
};
