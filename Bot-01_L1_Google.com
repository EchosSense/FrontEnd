// ==UserScript==
// @name         BOT Google
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

let j=1;
alert("ОТСЛЕЖИВАНИЕ ШАГА #01: j = " + j++);

let btnK = document.getElementsByName('btnK')[1];

if (btnK!=undefined){
    document.getElementsByName('q')[0].value = "Гобой";
    btnK.click()
}

alert("ОТСЛЕЖИВАНИЕ ШАГА #02: j = " + j++);

let links = document.links;
for(let i=0; i<links.length; i++){
    if(links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){
        links[i].click();
        break;
    }
}

alert("ОТСЛЕЖИВАНИЕ ШАГА #03: j = " + j++);
