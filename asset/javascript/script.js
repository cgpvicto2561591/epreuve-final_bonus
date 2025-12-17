// ====================================================
// =  Déclaration des variables globales              =
// ====================================================
const lotALL = document.querySelectorAll(".lot");
const lot1 = lotALL[0];
const lot2 = lotALL[1];
const lot3 = lotALL[2];
const ListBook = document.getElementById("ListBook");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box8 = document.querySelector(".box8");
const Allbook = document.querySelectorAll(".book");
const book1 = Allbook[0];
const book2 = Allbook[1];
const book3 = Allbook[2];
const book4 = Allbook[3];
const book5 = Allbook[4];
const book6 = Allbook[5];
const book7 = Allbook[6];
const book8 = Allbook[7];
const book9 = Allbook[8];
const book10 = Allbook[9];
const book11 = Allbook[10];
const book12 = Allbook[11];
const book13 = Allbook[12];
const book14 = Allbook[13];

let boolverif1 = true;
let boolverif2 = true;
let boolverif3 = true;
let boolverif4 = true;
let boolverif5 = true;
let boolverif6 = true;
let boolverif8 = true;
// ====================================================
// =  function                                        =
// ====================================================

// ========================
// =  function  lot       =
// ========================

function lotSelected1() {
  lot1.classList.add("selectedlot");
  lot2.classList.remove("selectedlot");
  lot3.classList.remove("selectedlot");
}
function lotSelected2() {
  lot1.classList.remove("selectedlot");
  lot2.classList.add("selectedlot");
  lot3.classList.remove("selectedlot");
}
function lotSelected3() {
  lot1.classList.remove("selectedlot");
  lot2.classList.remove("selectedlot");
  lot3.classList.add("selectedlot");
}
function lotUnselect() {
  lot1.classList.remove("selectedlot");
  lot2.classList.remove("selectedlot");
  lot3.classList.remove("selectedlot");
}
// ========================
// =  function  box       =
// ========================
function boxSelected1() {
  box1.classList.add("selectedbox");
  box2.classList.remove("selectedbox");
  box3.classList.remove("selectedbox");
  box4.classList.remove("selectedbox");
  box5.classList.remove("selectedbox");
  box6.classList.remove("selectedbox");
}
function boxSelected2() {
  box1.classList.remove("selectedbox");
  box2.classList.add("selectedbox");
  box3.classList.remove("selectedbox");
  box4.classList.remove("selectedbox");
  box5.classList.remove("selectedbox");
  box6.classList.remove("selectedbox");
}
function boxSelected3() {
  box1.classList.remove("selectedbox");
  box2.classList.remove("selectedbox");
  box3.classList.add("selectedbox");
  box4.classList.remove("selectedbox");
  box5.classList.remove("selectedbox");
  box6.classList.remove("selectedbox");
}
function boxSelected4() {
  box1.classList.remove("selectedbox");
  box2.classList.remove("selectedbox");
  box3.classList.remove("selectedbox");
  box4.classList.add("selectedbox");
  box5.classList.remove("selectedbox");
  box6.classList.remove("selectedbox");
}
function boxSelected5() {
  box1.classList.remove("selectedbox");
  box2.classList.remove("selectedbox");
  box3.classList.remove("selectedbox");
  box4.classList.remove("selectedbox");
  box5.classList.add("selectedbox");
  box6.classList.remove("selectedbox");
}
function boxSelected6() {
  box1.classList.remove("selectedbox");
  box2.classList.remove("selectedbox");
  box3.classList.remove("selectedbox");
  box4.classList.remove("selectedbox");
  box5.classList.remove("selectedbox");
  box6.classList.add("selectedbox");
}
function boxUnselect() {
  box1.classList.remove("selectedbox");
  box2.classList.remove("selectedbox");
  box3.classList.remove("selectedbox");
  box4.classList.remove("selectedbox");
  box5.classList.remove("selectedbox");
  box6.classList.remove("selectedbox");
}
// ========================
// =function click box/lot=
// ========================
function both1() {
  box8.classList.remove("box8Valid");
  box8.value = 0;
  if (boolverif1) {
    boxSelected1();
    lotSelected3(); //selement 5book
    functionbook5();
    box8.value = 1.35;
    box8.classList.add("box8Valid");
    Switchbool();
    boolverif1 = false;
  } else {
    functionbookunselect();
    lotUnselect();
    boxUnselect();
    boolverif1 = true;
  }
}
function both2() {
  box8.value = 0;
  box8.classList.remove("box8Valid");
  if (boolverif2) {
    boxSelected2(); //10 book
    lotSelected2();
    functionbook10();
    box8.value = 13.54;
    box8.classList.add("box8Valid");
    Switchbool();
    boolverif2 = false;
  } else {
    functionbookunselect();
    lotUnselect();
    boxUnselect();
    boolverif2 = true;
  }
}
function both3() {
  box8.value = 0;
  box8.classList.remove("box8Valid");
  if (boolverif3) {
    boxSelected3(); // 14 book maxed
    lotSelected1();
    functionbook14();
    box8.value = 24.37;
    box8.classList.add("box8Valid");
    Switchbool();
    boolverif3 = false;
  } else {
    functionbookunselect();
    lotUnselect();
    boxUnselect();
    boolverif3 = true;
  }
}
function both4() {
  box8.value = 0;
  box8.classList.remove("box8Valid");
  if (boolverif4) {
    lotSelected1(); // 14 book maxed
    boxSelected4();
    box8.value = 30;
    box8.classList.add("box8Valid");
    functionbook14();
    Switchbool();
    boolverif4 = false;
  } else {
    functionbookunselect();
    lotUnselect();
    boxUnselect();
    boolverif4 = true;
  }
}
function both5() {
  box8.value = 0;
  box8.classList.remove("box8Valid");
  if (boolverif5) {
    lotSelected1(); // 14 book maxed
    boxSelected5();
    box8.value = 35;
    box8.classList.add("box8Valid");
    functionbook14();
    Switchbool();
    boolverif5 = false;
  } else {
    functionbookunselect();
    lotUnselect();
    boxUnselect();
    boolverif5 = true;
  }
}
function both6() {
  box8.value = 0;
  box8.classList.remove("box8Valid");
  if (boolverif6) {
    lotSelected1(); // 14 book maxed
    boxSelected6();
    box8.value = 40;
    box8.classList.add("box8Valid");
    functionbook14();
    Switchbool();
    boolverif6 = false;
  } else {
    functionbookunselect();
    lotUnselect();
    boxUnselect();
    boolverif6 = true;
  }
}

function both8() {
  if (boolverif8) {
    lotSelected1();
    // boxSelected6();
    functionbook14();
    Switchbool();
  } else {
    functionbookunselect();
    lotUnselect();
    boxUnselect();
  }
}
// ========================
// =  function book       =
// ========================
function functionbook5() {
  book1.classList.remove("hidden");
  book2.classList.remove("hidden");
  book3.classList.remove("hidden");
  book4.classList.remove("hidden");
  book5.classList.remove("hidden");
  book6.classList.add("hidden");
  book7.classList.add("hidden");
  book8.classList.add("hidden");
  book9.classList.add("hidden");
  book10.classList.add("hidden");
  book11.classList.add("hidden");
  book12.classList.add("hidden");
  book13.classList.add("hidden");
  book14.classList.add("hidden");
}

function functionbook10() {
  book1.classList.remove("hidden");
  book2.classList.remove("hidden");
  book3.classList.remove("hidden");
  book4.classList.remove("hidden");
  book5.classList.remove("hidden");
  book6.classList.remove("hidden");
  book7.classList.remove("hidden");
  book8.classList.remove("hidden");
  book9.classList.remove("hidden");
  book10.classList.remove("hidden");
  book11.classList.add("hidden");
  book12.classList.add("hidden");
  book13.classList.add("hidden");
  book14.classList.add("hidden");
}
function functionbook14() {
  book1.classList.remove("hidden");
  book2.classList.remove("hidden");
  book3.classList.remove("hidden");
  book4.classList.remove("hidden");
  book5.classList.remove("hidden");
  book6.classList.remove("hidden");
  book7.classList.remove("hidden");
  book8.classList.remove("hidden");
  book9.classList.remove("hidden");
  book10.classList.remove("hidden");
  book11.classList.remove("hidden");
  book12.classList.remove("hidden");
  book13.classList.remove("hidden");
  book14.classList.remove("hidden");
}
function functionbookunselect() {
  book1.classList.add("hidden");
  book2.classList.add("hidden");
  book3.classList.add("hidden");
  book4.classList.add("hidden");
  book5.classList.add("hidden");
  book6.classList.add("hidden");
  book7.classList.add("hidden");
  book8.classList.add("hidden");
  book9.classList.add("hidden");
  book10.classList.add("hidden");
  book11.classList.add("hidden");
  book12.classList.add("hidden");
  book13.classList.add("hidden");
  book14.classList.add("hidden");
}

// ========================
// =  function autre      =
// ========================
function CheckPrice() {
  ValuePrice = document.getElementById("moneyblingbling").value;
  console.log(ValuePrice);
  if (ValuePrice >= 1.35 && ValuePrice < 13.54) {
    //5 book
    box8.classList.add("box8Valid");
    boxUnselect();
    lotSelected3();
    functionbook5();
    boolverif8 = true;
  } else if (ValuePrice >= 13.54 && ValuePrice < 24.37) {
    //10book
    box8.classList.add("box8Valid");
    boxUnselect();
    lotSelected2();
    functionbook10();
    boolverif8 = true;
  } else if (ValuePrice >= 24.37) {
    //14book
    boxUnselect();
    both8();
    box8.classList.add("box8Valid");
    boolverif8 = true;
  } else {
    // le prix est inferieur a 1.35
    box8.classList.remove("box8Valid");
    lotUnselect();
    boxUnselect();
    functionbookunselect();
    boolverif8 = false;
  }
}
//quand je unselect mon box8 est-ce que la valeur repect checkPrice
//  pour mes lots si non la value sera 0;
function validiter() {
  if (box8.value < 1.35) {
    box8.value = 0;
  }
}

//retourne tout les bools a true pour éviter des problems pour que 1seul bool sois false apres.
function Switchbool() {
  boolverif1 = true;
  boolverif2 = true;
  boolverif3 = true;
  boolverif4 = true;
  boolverif5 = true;
  boolverif6 = true;
  boolverif8 = true;
}

// ====================================================
// =  Action                                          =
// ====================================================

lot1.addEventListener("click", both3);

box3.addEventListener("click", both3);

lot2.addEventListener("click", both2);

box2.addEventListener("click", both2);

lot3.addEventListener("click", both1);
box1.addEventListener("click", both1);
//
box4.addEventListener("click", both4);

box5.addEventListener("click", both5);

box6.addEventListener("click", both6);

//value checker
box8.addEventListener("keyup", CheckPrice);
box8.addEventListener("blur", validiter);
// ====================================================
// =                                                  =
// ====================================================
