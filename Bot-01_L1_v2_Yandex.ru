// ==UserScript==
// @name         Bot_Yandex_2_Чужой
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

let button__text=document.getElementsByClassName("button__text")[0];

if (button__text != undefined){
    document.getElementById('text').value='Гобой';
    button__text.click()
}

let links = document.links;
for(let i=0;i<links.length;i++){
    if (links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") !=-1){
      links[i].click();
      break;}
}
