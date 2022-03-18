window.addEventListener("load", init);
var kep = [
  {
    cim: "1. kép címe",
    ar: 2345,
    eleresiUt: "kepek/kep1.jpg",
  },
  {
    cim: "2. kép címe",
    ar: 15432,
    eleresiUt: "kepek/kep2.jpg",
  },
  {
    cim: "3. kép címe",
    ar: 2333,
    eleresiUt: "kepek/kep3.jpg",
  },
  {
    cim: "4. kép címe",
    ar: 12566,
    eleresiUt: "kepek/kep4.jpg",
  },
];
function ID(elem) {
  return document.getElementById(elem);
}

function init() {
  ID("uzenet").innerHTML = "<h1>Képeim</h1>";
  kiir();
  galeria();
}

function kiir() {
  var txt = "";
  for (let index = 0; index < kep.length; index++) {
    txt += "<h2>" + kep[index].cim + "</h2>";
  }

  ID("galeria").innerHTML = txt;
}

function galeria() {
  var txt = "";
  for (let index = 0; index < kep.length; index++) {
    txt +=
      "<img src='" + kep[index].eleresiUt + "' alt='" + kep[index].cim + "' >";
  }
  console.log(txt);

  ID("galeria").innerHTML = txt;
}
