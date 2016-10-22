"use strict";

var dudziak;
var def;

function kulfon() {
    dudziak = document.getElementById("demo");
    def = dudziak.innerHTML;
}

function myFunction(elem) {
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

function jeslikrotkie(emcio) {
    var pos = 150;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos === 300) {
            clearInterval(id);
            emcio.innerHTML += "<br>xD";
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
    emcio.innerHTML = def;
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