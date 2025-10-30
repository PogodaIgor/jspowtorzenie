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
let paragraf = document.getElementById("tekst");
let tekstParagrafu = paragraf.innerHTML;

function pokaz() {
  clik = clik + 1;
  if (clik % 2 != 0) {
    paragraf.innerHTML = "";
    document.getElementById("pokaz").innerHTML = "Pokaz";
  } else {
    paragraf.innerHTML = tekstParagrafu;
    document.getElementById("pokaz").innerHTML = "Ukryj";
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
  document.getElementById("pies").style.border = "3px solid black";
}
function nramka() {
  document.getElementById("pies").style.border = "none";
}
function red() {
  document.getElementById("div1").style.backgroundColor = "red";
}
function blue() {
  document.getElementById("div1").style.backgroundColor = "blue";
}
function yellow() {
  document.getElementById("div1").style.backgroundColor = "yellow";
}
function purple() {
  document.getElementById("div1").style.backgroundColor = "purple";
}
function green() {
  document.getElementById("div1").style.backgroundColor = "green";
}
