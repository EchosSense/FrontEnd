// ==UserScript==
// @name         Bot Yandex Full v2
// @namespace    http://tampermonkey.net/
// @version      2.0.0 [Final]
// @description  Заработало без регистрации на Yandex и одновременно на ya.ru, yandex.ru
// @author       You
// @match        https://ya.ru/*
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

// ===================================================================================================
// ================================ Задаём Глобальные Переменные =====================================

let my_site = 'xn----7sbab5aqcbiddtdj1e1g.xn--p1ai';                                                     // Задаём Нашу Страницу
                                                                                                         // Задаём Коллекцию ключевых слов
let collection_words = ["Гобой", "Как звучит флейта", "Что такое валторна", "Как выглядит тромбон", "Музыкальные диктанты онлайн", "Виолончель", "Дед Мороз"];
let random_word = collection_words[getRandom(0,collection_words.length)];                                // Выбираем случайное слово из коллекции
let i=0;                                                                                                 // Задаём глобальные переменные для Функций

// ================================ Проверяем наличие Сайта ===========================================
if (location.href == "https://ya.ru/") { F1(); }                                                         // Производим действия на сайте https://ya.ru
else if (location.host == "yandex.ru") { F2(); }                                                         // Производим действия на сайте https://yandex.ru
else if (location.host == 'xn----7sbab5aqcbiddtdj1e1g.xn--p1ai') { F3(); }                               // Производим действия на сайте https://музыкалка-онлайн.рф/
else { alert("ЧТО-ТО ПОШЛО НЕ ТАК"); }                                                                   // Переходим на сайт https://ya.ru

// ================================ Время работы бота 1 мин = 60 000 мс ===============================
setTimeout(()=>{location.href = "https://www.google.com/"}, 60000);                                      // После завершения работы бота переходим на сайт https://www.google.com/


// ===================================================================================================
// ======================================== Функции ==================================================
// ============================ Функция 1: Действия на сайте https://ya.ru ===========================
function F1()
{                                                                                                        // Вводим ключевое слово и переходим к поиску
    let X1_text = document.getElementsByName('text')[0];
    var X1_ya = document.getElementsByClassName('button suggest2-form__button button_theme_websearch button_size_xl i-bem')[0];
    let X1_timerId = setInterval(()=>{time_word(X1_text,X1_timerId,X1_ya)},getRandom(200,500));
}

// ===================================================================================================
// ================================= Функция 2: Действия на сайте https://yandex.ru ==================
function F2()
{
    let X2_yandex = document.getElementsByClassName('button mini-suggest__button button_theme_websearch button_size_ws-head i-bem')[0];
    let flag = false;                                                                                   // Флаг наличия найденой ссылки на странице (в коллекции)

    if (X2_yandex != undefined)                                                                          // Нажимаем кнопку "Поиска" (Кнопка "Поиска" ещё не нажата)
    {
        let X2_text = document.getElementsByName('text')[0];
        let X2_timerId = setInterval(()=>{time_word(X2_text,X2_timerId,X2_yandex)},getRandom(200,500));

        //        document.getElementsByName('text')[0].value = random_word;                             // Мгновенный ввод текста в поле поиска
        //        setTimeout(()=>X2_yandex.click(), getRandom(1000,2000));
    }

    else                                                                                                // Переходим по ссылке (Кнопка уже была нажата)
    {
        let ALL_SITE = document.querySelectorAll("a");
        for (let SITE of ALL_SITE)                                                                      // Поиск ссылки в коллекции и переход по ней
        {
            if(SITE.href.indexOf(my_site)!=-1)
            {
                SITE.setAttribute('target', '_self');
                flag = true;
                setTimeout(()=>{SITE.click()}, getRandom(3000,4000));
            }
        }

        let number_page = document.getElementsByClassName('pager__item pager__item_current_yes pager__item_kind_page')[0].innerText;

        if ((number_page==10)&&(flag==false))                                                           // Переходим на Google (Сайт не нашли на 10 страницах)
        {   setTimeout(()=>{location.href = "https://google.com"}, getRandom(1000,2000));  }


        else if (flag==false)                                                                           // Переходим "Дальше" (Сайт не нашли на одной странице)
        {
            let b_next=document.getElementsByClassName('link link_theme_none link_target_serp pager__item pager__item_kind_next i-bem')[0];
            b_next.setAttribute('target', '_self');
            setTimeout(()=>b_next.click(), getRandom(1000,2000));
        }
    }
}

// ===================================================================================================
// ====================== Функция 3: Действия на сайте https://музыкалка-онлайн.рф/ ==================
function F3()
{
    let random_link = getRandom(0,document.links.length);                                            // Случайная ссылка на странице
    let flag = document.links[random_link].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai');

    if (flag!=-1)                                                                                    // Ссылка не принадлежит сайту https://музыкалка-онлайн.рф/
    {
        if (getRandom(0,100)>10) { setTimeout(()=>{document.links[random_link].click();}, getRandom(3000,4000)); }          //  Шанс 80% => Переходим по случайной ссылке
        else  { location.href = "https://ya.ru"; }                                                                          //  Шанс 20% => Переходим на сайт https://ya.ru
    }

    else { location.href = 'https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/'; }                         // Ссылка принадлежит сайту https://музыкалка-онлайн.рф/ => Переход по ссылке

}
// ===================================================================================================
// ============= Функция: Возращает случайное число от "min" до "max" число ==========================

function getRandom(min,max) { return Math.floor(Math.random()*(max-min)+min); }

// ===================================================================================================
// ========================== Функция: Ввод букв в поле формы поиска =================================

function time_word(input_form,timerId,button_click)
{
    input_form.value += random_word[i];
    i++;
    if (i==(random_word.length))
    {
        clearInterval(timerId);
        i = 0;
        button_click.click();
    }
}
// =================================== Функции =======================================================
// ===================================================================================================

