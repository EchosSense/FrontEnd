// ==UserScript==
// @name         Bot Yandex Full
// @namespace    http://tampermonkey.net/
// @version      1.2 [Final]
// @description  Заработало без регистрации на Yandex и одновременно на ya.ru, yandex.ru
// @author       You
// @match        https://ya.ru/*
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*                       // Сайт: https://музыкалка-онлайн.рф/
// @grant        none
// ==/UserScript==

// 1. Задаём Коллекцию ключевых слов
let collection_words = ["Гобой", "Как звучит флейта", "Что такое валторна", "Как выглядит тромбон", "Музыкальные диктанты онлайн", "Виолончель"];

// 2. Выбираем случайное слово из коллекции
let random_word = collection_words[getRandom(0,collection_words.length)];

// 3. Проверяем наличие Сайта
if (location.href == "https://ya.ru/") { F1(); }                                     // Производим действия на сайте https://ya.ru
else if (location.host == "yandex.ru") { F2(); }                                     // Производим действия на сайте https://yandex.ru
else if (location.href == "https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/") { F3(); }  // Производим действия на сайте https://музыкалка-онлайн.рф/         
else { alert("ЧТО-ТО ПОШЛО НЕ ТАК"); }                                               // Переходим на сайт https://ya.ru

// 4. Время работы бота 3 мин = 180 000 мс
setTimeout(()=>{location.href = "https://www.google.com/"}, 180000);                 // После завершения работы бота переходим на сайт https://www.google.com/ 

// =================================== Функции ==============================================
function F1()     // Функция: Действия на сайте https://ya.ru
{   
    return Math.floor(Math.random()*(max-min)+min);
}

// =================================== Функции ==============================================
function F2()     // Функция: Действия на сайте https://yandex.ru
{   
    return Math.floor(Math.random()*(max-min)+min);
}

// =================================== Функции ==============================================
function F3()     // Функция: Действия на сайте https://музыкалка-онлайн.рф/
{   
    return Math.floor(Math.random()*(max-min)+min);
}

// Вставили текст "Гобой" в форму поиска
document.getElementsByName('text')[0].value = "Гобой";


let B1_Ya= document.getElementsByClassName('button suggest2-form__button button_theme_websearch button_size_xl i-bem')[0];
let B2_Yandex= document.getElementsByClassName('button mini-suggest__button button_theme_websearch button_size_ws-head i-bem')[0];

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


// =================================== Функции ==============================================

function getRandom(min,max)     // Функция: Возращает случайное число от "min" до "max" число
{    
    return Math.floor(Math.random()*(max-min)+min);
}

// =================================== Функции ==============================================
function writeWord(keyword)     // Функция: Возращает случайное число от "min" до "max" число
{
  let i = 0;
  let timerId = setInterval(()=>{
    document.getElementsByName('q')[0].value += keyword[i];
    i++;
    if (i==keyword.length) {
        clearInterval(timerId);
        btnK.click();
    }
  },300);
}

function getGooglePage(){
    let goNextPage = true;
    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){
            let link = links[i];
            goNextPage = false;
            setTimeout(()=>link.click(), getRandom(3000,10000));
            break;
        }
    }
    if (goNextPage) setTimeout(()=>{
        if (document.getElementsByClassName('YyVfkd')[0].innerText == 10) logo.click();
        else pnnext.click();
    }, getRandom(3000,10000));
}

// =================================== Функции ==============================================

