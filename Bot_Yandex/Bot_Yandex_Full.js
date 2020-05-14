// ==UserScript==
// @name         Bot Yandex Full
// @namespace    http://tampermonkey.net/
// @version      2.0.0 [Final]
// @description  Заработало без регистрации на Yandex и одновременно на ya.ru, yandex.ru
// @author       You
// @match        https://ya.ru/*
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==


// 0. Задаём Нашу Страницу
let my_site = 'xn----7sbab5aqcbiddtdj1e1g.xn--p1ai';

// 1. Задаём Коллекцию ключевых слов
let collection_words = ["Гобой", "Как звучит флейта", "Что такое валторна", "Как выглядит тромбон", "Музыкальные диктанты онлайн", "Виолончель", "Дед Мороз", "Лумтик"];

// 2. Выбираем случайное слово из коллекции
let random_word = collection_words[getRandom(0,collection_words.length)];

// 3. Проверяем наличие Сайта
if (location.href == "https://ya.ru/") { F1(); }                                     // Производим действия на сайте https://ya.ru
else if (location.host == "yandex.ru") { F2(); }                                     // Производим действия на сайте https://yandex.ru
else if (location.host == 'xn----7sbab5aqcbiddtdj1e1g.xn--p1ai') { F3(); }           // Производим действия на сайте https://музыкалка-онлайн.рф/
else { alert("ЧТО-ТО ПОШЛО НЕ ТАК"); }                                               // Переходим на сайт https://ya.ru

// 4. Время работы бота 1 мин = 60 000 мс
setTimeout(()=>{location.href = "https://www.google.com/"}, 60000);                  // После завершения работы бота переходим на сайт https://www.google.com/

// ============================ Функция 1: Действия на сайте https://ya.ru ===========================
function F1()
{
    // Вставляем в форму поиска случайное ключевое слово
    document.getElementsByName('text')[0].value = random_word;

    // Нажимаем кнопку Поиск
    let b_ya = document.getElementsByClassName('button suggest2-form__button button_theme_websearch button_size_xl i-bem')[0];
    setTimeout(()=>b_ya.click(), getRandom(1000,2000));
}

// ================================= Функция 2: Действия на сайте https://yandex.ru =================================
function F2()
{
    let b_search = document.getElementsByClassName('button mini-suggest__button button_theme_websearch button_size_ws-head i-bem')[0];
    let flag = false;                                                               // Флаг наличия найденой ссылки на странице (в коллекции)

    if (b_search != undefined)      // ============================================ // Кнопка ещё не нажата
    {
        document.getElementsByName('text')[0].value = random_word;                  // Вставляем в форму поиска случайное ключевое слово
        setTimeout(()=>b_search.click(), getRandom(1000,2000));
    }
    else                           // ============================================= // Кнопка уже была нажата
    {
        let ALL_SITE = document.querySelectorAll("a");                              // Получили Коллекцию ссылок на странице https://yandex.ru
        for (let SITE of ALL_SITE)                                                  // Поиск нашей ссылки на сайт https://музыкалка-онлайн.рф/
        {
            if(SITE.href.indexOf(my_site)!=-1)                                      // Сравниваем Наш текст my_site с элементом коллекции
            {
                SITE.setAttribute('target', '_self');
                let flag = true;
                setTimeout(()=>SITE.click(), getRandom(1000,2000));
            }

        }
                                   // ============================================= // Нажимаем кнопку "Дальше"

        let number_page = document.getElementsByClassName('pager__item pager__item_current_yes pager__item_kind_page')[0].innerText;

        if ((number_page==10)&&(flag==false))  // ================================ // Сайт не нашли на 10 страницах
        {
            setTimeout(()=>{location.href = "https://google.com"}, getRandom(1000,2000));
        }
        else if (flag==false)                  // ================================ // Сайт не нашли на одной странице
        {
            let b_next=document.getElementsByClassName('link link_theme_none link_target_serp pager__item pager__item_kind_next i-bem')[0];
            b_next.setAttribute('target', '_self');
            setTimeout(()=>b_next.click(), getRandom(1000,2000));
        }
    }
}

// ====================== Функция 3: Действия на сайте https://музыкалка-онлайн.рф/ ======================
function F3()
{

    let random_link = getRandom(0,document.links.length);                                            // Взяли случайную ссылку с открытой страницы сайта https://музыкалка-онлайн.рф/
    let flag = document.links[random_link].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai');      // Наличие/отсутствие текста в строке ссылки

    if (flag!=-1)                                       //  Проверили принадлежность ссылки к сайту https://музыкалка-онлайн.рф/
    {
        if (getRandom(0,100)>20)                        //  Фактор случайности нахождения на сайте https://музыкалка-онлайн.рф/
        {
            setTimeout(()=>{document.links[random_link].click();}, getRandom(1000,2000));             //  Переходим по случайной ссылке
        }
        else
        {
            location.href = "https://ya.ru";            //  Возращаемся на сайт https://ya.ru
        }
    }
    else
    {
        location.href = 'https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/';
    }

}

// ============= Функция: Возращает случайное число от "min" до "max" число =================

function getRandom(min,max)
{
    return Math.floor(Math.random()*(max-min)+min);
}

// =================================== Функции ==============================================

