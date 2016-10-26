"use strict";

function clicked(elem) {
    if (!(elem.dlugie === 0 || elem.dlugie === 1)) {
        elem.dlugie = 0;
    }
    if (!(elem.trwa === 0 || elem.trwa === 1)) {
        elem.trwa = 0;
    }
    if (elem.trwa === 0) {
        elem.trwa = 1;
        if (elem.dlugie === 1) {
            jeslidlugie(elem);
        } else {
            jeslikrotkie(elem);
        }
    }
}

function pysznia(inpucik, tekscik) {
    if (inpucik.keyCode === 13 && tekscik.value !== "") {
        zwin();
        tekscik.value = tekscik.value[0].toUpperCase() + tekscik.value.substring(1);
        wstaw(tekscik.value);
        tekscik.value = "";
    }
}

function wstaw(tekst) {
    var zbiorek = window.document.getElementById("zbiorek");
    var jeden = document.createElement("div");
    jeden.className = "elemento";
    var dwa = document.createElement("div");
    dwa.className = "rowio";
    var trzy = document.createElement("div");
    trzy.className = "komorkaS";
    trzy.textContent = tekst;
    var cztery = document.createElement("div");
    cztery.className = "rowio";
    var piec = document.createElement("div");
    piec.className = "komorka";
    piec.innerHTML = "a";
    var szesc = document.createElement("div");
    szesc.className = "komorka";
    szesc.innerHTML = "b";
    var siedem = document.createElement("div");
    siedem.className = "komorka";
    siedem.innerHTML = "a";
    jeden.appendChild(dwa);
    jeden.appendChild(cztery);
    dwa.appendChild(trzy);
    cztery.appendChild(piec);
    cztery.appendChild(szesc);
    cztery.appendChild(siedem);
    zbiorek.insertBefore(jeden, zbiorek.firstChild);
    var nowy = zbiorek.firstChild;
    nowy.dlugi = 0;
    nowy.onclick = function(){clicked(nowy)}; 
}

function zwin() {
    var wszystkie = window.document.getElementsByClassName("elemento");
    var i = 0;
    for (i = 0; i < wszystkie.length; i++) {
        if (wszystkie[i].dlugie === 1) {
            jeslidlugie(wszystkie[i]);
        }
    }
}

function jeslikrotkie(emcio) {
    zwin();
    var pos = 150;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos === 300) {
            clearInterval(id);
            var secRow = emcio.getElementsByClassName("rowio")[1];
            secRow.getElementsByTagName("div")[0].innerHTML = "xDDD";
            emcio.dlugie = 1;
            emcio.trwa = 0;
        } else {
            pos += 10;
            if (pos > 300)
                pos = 300;
            emcio.style.height = pos / 100.0 + 'cm';
        }
    }
}

function jeslidlugie(emcio) {
    var pos = 300;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos === 150) {
            clearInterval(id);
            emcio.dlugie = 0;
            emcio.trwa = 0;
        } else {
            pos -= 10;
            if (pos < 150)
                pos = 150;
            emcio.style.height = pos / 100.0 + 'cm';
        }
    }
}