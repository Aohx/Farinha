/*MENU*/
let menu_btn = document.querySelector("#menu-btn");
let main_menu = document.querySelector(".main-menu");

menu_btn.onclick = function () {
    main_menu.classList.toggle('active');
};

/*LINKS*/

var url = "https://youtu.be/_uv79uquCsM?si=ftiIIpClFHJnQ8rF";
var btn = document.querySelector("#btn");

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

btn.addEventListener('click', function () {

    openInNewTab(url);

});

var url2 = "https://youtu.be/AeeqWlG3HTg?si=eGeW1Fvu98SbH8gh";
var btn2 = document.querySelector("#btn2");

function openInNewTab(url2) {
    var win2 = window.open(url2, '_blank');
    win2.focus();
}

btn2.addEventListener('click', function () {

    openInNewTab(url2);

});

var url3 = "https://youtu.be/ngtpl7TMxl0?si=yoMwXk-3uW2nZpe0";
var btn3 = document.querySelector("#btn3");

function openInNewTab(url3) {
    var win3 = window.open(url3, '_blank');
    win3.focus();
}

btn3.addEventListener('click', function () {

    openInNewTab(url3);

});

var url4 = "https://youtu.be/oM2dnVIQWf4?si=J-PqGiC8s8o1FODq";
var btn4 = document.querySelector("#btn4");

function openInNewTab(url4) {
    var win4 = window.open(url4, '_blank');
    win4.focus();
}

btn4.addEventListener('click', function () {

    openInNewTab(url4);

});

var url5 = "https://youtu.be/4Tz4xEyx0R0?si=1CZiMDSqALLfEAGy";
var btn5 = document.querySelector("#btn5");

function openInNewTab(url5) {
    var win5 = window.open(url5, '_blank');
    win5.focus();
}

btn5.addEventListener('click', function () {

    openInNewTab(url5);

});