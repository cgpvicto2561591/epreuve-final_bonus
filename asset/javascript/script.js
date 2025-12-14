// ====================================================
// =  Déclaration des variables globales              =
// ====================================================
const lotALL = document.querySelectorAll(".lot");// select tout la class lot 
const lot1 = lotALL[0];
const lot2 = lotALL[1];
const lot3 = lotALL[2];
const ListBook = document.getElementById('ListBook');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const Allbook = document.querySelectorAll('.book');
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
// const clickbox1 = e.target.closest('.box1');
// const clickbox2 = e.target.closest('.box2');
// const clickbox3 = e.target.closest('.box3');
// const clickbox4 = e.target.closest('.box4');
// const clickbox5 = e.target.closest('.box5');
// const clickbox6 = e.target.closest('.box6');

// ====================================================
// =  function                                        =
// ====================================================

// ========================
// =  function  lot       =
// ========================

function lotSelected1(){
lot1.classList.add('selectedlot');
lot2.classList.remove('selectedlot');
lot3.classList.remove('selectedlot');
};
function lotSelected2(){
lot1.classList.remove('selectedlot');
lot2.classList.add('selectedlot');
lot3.classList.remove('selectedlot');
};
function lotSelected3(){
lot1.classList.remove('selectedlot');
lot2.classList.remove('selectedlot');
lot3.classList.add('selectedlot');
};
function lotUnselect(){
    lot1.classList.remove('selectedlot');
    lot2.classList.remove('selectedlot');
    lot3.classList.remove('selectedlot');
}
// ========================
// =  function  box       =
// ========================
function boxSelected1(){
box1.classList.add('selectedbox');
box2.classList.remove('selectedbox');
box3.classList.remove('selectedbox');
box4.classList.remove('selectedbox');
box5.classList.remove('selectedbox');
box6.classList.remove('selectedbox');
};
function boxSelected2(){
box1.classList.remove('selectedbox');
box2.classList.add('selectedbox');
box3.classList.remove('selectedbox');
box4.classList.remove('selectedbox');
box5.classList.remove('selectedbox');
box6.classList.remove('selectedbox');
};
function boxSelected3(){
box1.classList.remove('selectedbox');
box2.classList.remove('selectedbox');
box3.classList.add('selectedbox');
box4.classList.remove('selectedbox');
box5.classList.remove('selectedbox');
box6.classList.remove('selectedbox');
};
function boxSelected4(){
box1.classList.remove('selectedbox');
box2.classList.remove('selectedbox');
box3.classList.remove('selectedbox');
box4.classList.add('selectedbox');
box5.classList.remove('selectedbox');
box6.classList.remove('selectedbox');
};
function boxSelected5(){
box1.classList.remove('selectedbox');
box2.classList.remove('selectedbox');
box3.classList.remove('selectedbox');
box4.classList.remove('selectedbox');
box5.classList.add('selectedbox');
box6.classList.remove('selectedbox');
};
function boxSelected6(){
box1.classList.remove('selectedbox');
box2.classList.remove('selectedbox');
box3.classList.remove('selectedbox');
box4.classList.remove('selectedbox');
box5.classList.remove('selectedbox');
box6.classList.add('selectedbox');
};
function boxUnselect(){
    box1.classList.remove('selectedbox');
box2.classList.remove('selectedbox');
box3.classList.remove('selectedbox');
box4.classList.remove('selectedbox');
box5.classList.remove('selectedbox');
box6.classList.remove('selectedbox');
}
// ========================
// =  function  box       =
// ========================
function both1(){
    
    if(boolverif1)
    {
         boxSelected1();
    lotSelected3();  //selement 5book
    functionbook5();
    Switchbool()
    boolverif1 = false;
    }
    else
    {
         functionbookunselect();
                lotUnselect();
                boxUnselect();
                boolverif1 = true;
    }
   
}
function both2(){
    if(boolverif2)
    {
         boxSelected2(); //10 book
        lotSelected2();
        functionbook10();
        Switchbool()
        boolverif2 = false;
    }
    else
    {
         functionbookunselect();
                lotUnselect();
                boxUnselect();
                boolverif2 = true;
    }
   
}
function both3(){
     if(boolverif3)
    {
         boxSelected3();  // 14 book maxed
        lotSelected1();
        functionbook14();
        Switchbool()
        boolverif3 = false;
    }
    else
    {
         functionbookunselect();
                lotUnselect();
                boxUnselect();
                boolverif3 = true;
    }
   
}
function both4(){
     if(boolverif4)
    {
          lotSelected1();  // 14 book maxed
        boxSelected4();
        functionbook14();
        Switchbool()
        boolverif4 = false;
    }
    else
    {
         functionbookunselect();
                lotUnselect();
                boxUnselect();
                boolverif4 = true;
    }
  
}
function both5(){
     if(boolverif5)
    {
        lotSelected1();  // 14 book maxed
        boxSelected5();
        functionbook14();
        Switchbool()
        boolverif5 = false;
    }
    else
    {
         functionbookunselect();
                lotUnselect();
                boxUnselect();
                boolverif5 = true;
    }
    
}
function both6(){
     if(boolverif6)
    {
         lotSelected1();  // 14 book maxed
        boxSelected6();
        functionbook14();
        Switchbool()
        boolverif6 = false;
    }
    else
    {
         functionbookunselect();
                lotUnselect();
                boxUnselect();
                boolverif6 = true;
    }
   
}
// ========================
// =  function book       =
// ========================
function functionbook5(){
book1.classList.remove('hidden');
book2.classList.remove('hidden');
book3.classList.remove('hidden');
book4.classList.remove('hidden');
book5.classList.remove('hidden');
book6.classList.add('hidden');
book7.classList.add('hidden');
book8.classList.add('hidden');
book9.classList.add('hidden');
book10.classList.add('hidden');
book11.classList.add('hidden');
book12.classList.add('hidden');
book13.classList.add('hidden');
book14.classList.add('hidden');
}

function functionbook10(){
    book1.classList.remove('hidden');
book2.classList.remove('hidden');
book3.classList.remove('hidden');
book4.classList.remove('hidden');
book5.classList.remove('hidden');
book6.classList.remove('hidden');
book7.classList.remove('hidden');
book8.classList.remove('hidden');
book9.classList.remove('hidden');
book10.classList.remove('hidden');
book11.classList.add('hidden');
book12.classList.add('hidden');
book13.classList.add('hidden');
book14.classList.add('hidden');
}
function functionbook14(){
    book1.classList.remove('hidden');
book2.classList.remove('hidden');
book3.classList.remove('hidden');
book4.classList.remove('hidden');
book5.classList.remove('hidden');
book6.classList.remove('hidden');
book7.classList.remove('hidden');
book8.classList.remove('hidden');
book9.classList.remove('hidden');
book10.classList.remove('hidden');
book11.classList.remove('hidden');
book12.classList.remove('hidden');
book13.classList.remove('hidden');
book14.classList.remove('hidden');
}
function functionbookunselect(){
book1.classList.add('hidden');
book2.classList.add('hidden');
book3.classList.add('hidden');
book4.classList.add('hidden');
book5.classList.add('hidden');
book6.classList.add('hidden');
book7.classList.add('hidden');
book8.classList.add('hidden');
book9.classList.add('hidden');
book10.classList.add('hidden');
book11.classList.add('hidden');
book12.classList.add('hidden');
book13.classList.add('hidden');
book14.classList.add('hidden');
}


// ========================
// =  function autre      =
// ========================
// function unselect(e){
//     const clicklot = e.target.closest('.lot');
//     if(clicklot)
//     {
//         if(clicklot.classList.contains('hidden'))
//         {
//             const index = allLots.indexOf(clickedLot);
//             if(index === 0)
//             {//14 book
//                 functionbookunselect()
//                 lotUnselect()
//                 boxUnselect()
//             }
//             else if(index === 1)
//             {//10book
//                 functionbookunselect()
//                 lotUnselect()
//                 boxUnselect()
//             }
//             else if(index === 2)
//             {//5book
//                 functionbookunselect()
//                 lotUnselect()
//                 boxUnselect()
//             }
//         }
//     }
    
   
// }
function Switchbool(){
 boolverif1 = true;
 boolverif2 = true;
 boolverif3 = true;
 boolverif4 = true;
 boolverif5 = true;
 boolverif6 = true;
}

// ====================================================
// =  Action                                          =
// ====================================================


lot1.addEventListener("click", both3);

box3.addEventListener('click', both3);

lot2.addEventListener("click", both2);

box2.addEventListener('click', both2);


lot3.addEventListener("click", both1);
box1.addEventListener("click", both1);
// 
box4.addEventListener("click", both4);

box5.addEventListener("click", both5);

box6.addEventListener("click", both6);

//dernier element clicker


// ====================================================
// =  Start up                                        =
// ====================================================

