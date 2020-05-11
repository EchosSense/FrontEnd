// ==UserScript==
// @name         Bot Yandex v3
// @namespace    http://tampermonkey.net/
// @version      1.0 [Final]
// @description  Заработало без регистрации на Yandex и одновременно на ya.ru, yandex.ru
// @author       You
// @match        https://ya.ru/*
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

// Вставили текст "Гобой" в форму поиска
document.getElementsByName('text')[0].value = "Гобой";

// Проверили наличие кнопки поиска и нажали на неё
let X1= document.getElementsByClassName('button suggest2-form__button button_theme_websearch button_size_xl i-bem')[0];
let X2= document.getElementsByClassName('button mini-suggest__button button_theme_websearch button_size_ws-head i-bem')[0];
let FLAG = false;

if (X1!= undefined) {X1.click(); FLAG=true;}
else if (X2!= undefined) {X2.click(); FLAG=true;}
else {console.log("ЧТО-ТО ПОШЛО НЕ ТАК")}

// Проверили поиск нужной ссылки и нажали на неё
let MY_SITE = 'https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/musical_instruments/oboe'
let ALL_SITE = document.querySelectorAll("a");

for (let SITE of ALL_SITE)
{
     if (SITE==MY_SITE) {console.log("ШАГ 3"); SITE.click(); break;}
     else {console.log("Сайт не найден")}
};
