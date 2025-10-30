function czerwony() {
  document.getElementById("czerwony").innerHTML;
  document.getElementById("body").style.backgroundColor = "red";
}
function niebieski() {
  document.getElementById("niebieski").innerHTML;
  document.getElementById("body").style.backgroundColor = "blue";
}
function zielony() {
  document.getElementById("zielony").innerHTML;
  document.getElementById("body").style.backgroundColor = "green";
}
let clik = 0;

function pokaz() {
  document.getElementById("tekst").innerHTML;
  document.getElementById("pokaz").innerHTML;
  if (clik % 2 != 0) {
    document.getElementById("tekst").innerHTML = clik;
  } else {
    document.getElementById("tekst").style.display.none;
  }
}
let licznik = 0;

function licz() {
  licznik = licznik + 1;
  document.getElementById("licznik").innerHTML;
  document.getElementById("licz").innerHTML = licznik;
}
let czciona = 20;

function wieksza() {
  czciona = czciona + 2;
  document.getElementById("klasa").style.fontSize = czciona + "px";
}

function mniejsza() {
  czciona = czciona - 2;
  document.getElementById("klasa").style.fontSize = czciona + "px";
}
function ramka() {
  document.getElementById("pies").style.border;
}
function nramka() {
  document.getElementById("pies").style.borderBlocks;
}
