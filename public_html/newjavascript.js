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

function pysznia(inpucik,tekscik){
    if (inpucik.keyCode === 13 && tekscik.value !== "") {
        var polepszony = encodeURIComponent(tekscik.value);
        polepszony = polepszony.replace(/%20/g," ");
        polepszony = polepszony.replace(/%3F/g,"?");
        var zbiorek = window.document.getElementById("zbiorek");
        polepszony = polepszony[0].toUpperCase() + polepszony.substring(1);
        zbiorek.innerHTML = '<div class="elemento" onclick="clicked(this)">'+
                '<div class="rowio">'+
                '<div class="komorkaS">'+polepszony+'</div>'+
                '</div>'+
                '<div class="rowio">'+
                '<div class="komorka">a</div>'+
                '<div class="komorka">b</div>'+
                '<div class="komorka">c</div>'+
                '</div>'+
                '</div>' + zbiorek.innerHTML;     
        tekscik.value = "";
    }
}

function jeslikrotkie(emcio) {
    var pos = 150;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos === 300) {
            clearInterval(id);
            var secRow = emcio.getElementsByTagName("div")[2];
            secRow.getElementsByTagName("div")[0].innerHTML = "xDDD";
            emcio.dlugie = 1;
            emcio.trwa = 0;
        } else {
            pos += 10;
            if (pos > 300) pos = 300;
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
            if (pos < 150) pos = 150;
            emcio.style.height = pos / 100.0 + 'cm';
        }
    }
}