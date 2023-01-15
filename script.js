let kolejnosc=1, DrawNum=0, pinkNumb = 0, yellowNum = 0
let kolor =" "
let win1 = []
let win2 = []
let woooon =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [7,5,3],
    [1,4,7],
    [2,5,8],
    [3,6,9],
]
function nrr1(){
    console.log("yooo");
    if(kolejnosc%2===0){
        kolor = "yellow"
        kolejnosc+= 1;
        win2.push(1);
    }else {
        kolor = "pink";
        kolejnosc+= 1;
        win1.push(1);
    }    
    document.getElementById('nr1').style.backgroundColor = kolor;
    console.log(kolejnosc);
    document.getElementById("nr1").disabled = true;

    DrawNum++;
    
}
function nrr2(){
    console.log("yooo");
    if(kolejnosc%2===0){
        kolor = "yellow"
        kolejnosc+= 1;
        win2.push(2);
    }else {
        kolor = "pink";
        kolejnosc+= 1;
        win1.push(2);
    }    
    document.getElementById('nr2').style.backgroundColor = kolor;
    console.log(kolejnosc);
    document.getElementById("nr2").disabled = true;
    
    DrawNum++;
}
function nrr3(){
    console.log("yooo");
    if(kolejnosc%2===0){
        kolor = "yellow"
        kolejnosc+= 1;
        win2.push(3);
    }else {
        kolor = "pink";
        kolejnosc+= 1;
        win1.push(3);
    }    
    document.getElementById('nr3').style.backgroundColor = kolor;
    console.log(kolejnosc);
    document.getElementById("nr3").disabled = true;

    DrawNum++;
}
function nrr4(){
    console.log("yooo");
    if(kolejnosc%2===0){
        kolor = "yellow"
        kolejnosc+= 1;
        win2.push(4);
    }else {
        kolor = "pink";
        kolejnosc+= 1;
        win1.push(4);
    }    
    document.getElementById('nr4').style.backgroundColor = kolor;
    console.log(kolejnosc);
    document.getElementById("nr4").disabled = true;

    DrawNum++;
}
function nrr5(){
    console.log("yooo");
    if(kolejnosc%2===0){
        kolor = "yellow"
        kolejnosc+= 1;
        win2.push(5);
    }else {
        kolor = "pink";
        kolejnosc+= 1;
        win1.push(5);
    }    
    document.getElementById('nr5').style.backgroundColor = kolor;
    console.log(kolejnosc);
    document.getElementById("nr5").disabled = true;
    DrawNum++;
}
function nrr6(){
    console.log("yooo");
    if(kolejnosc%2===0){
        kolor = "yellow"
        kolejnosc+= 1;
        win2.push(6);
    }else {
        kolor = "pink";
        kolejnosc+= 1;
        win1.push(6);
    }    
    document.getElementById('nr6').style.backgroundColor = kolor;
    console.log(kolejnosc);
    document.getElementById("nr6").disabled = true;
    DrawNum++;
}
function nrr7(){
    console.log("yooo");
    if(kolejnosc%2===0){
        kolor = "yellow"
        kolejnosc+= 1;
        win2.push(7);
    }else {
        kolor = "pink";
        kolejnosc+= 1;
        win1.push(7);
    }    
    document.getElementById('nr7').style.backgroundColor = kolor;
    console.log(kolejnosc);
    document.getElementById("nr7").disabled = true;
    DrawNum++;
}
function nrr8(){
    console.log("yooo");
    if(kolejnosc%2===0){
        kolor = "yellow"
        kolejnosc+= 1;
        win2.push(8);
    }else {
        kolor = "pink";
        kolejnosc+= 1;
        win1.push(8);
    }    
    document.getElementById('nr8').style.backgroundColor = kolor;
    console.log(kolejnosc);
    document.getElementById("nr8").disabled = true;
    DrawNum++;
}
function nrr9(){
    console.log("yooo");
    if(kolejnosc%2===0){
        kolor = "yellow"
        kolejnosc+= 1;
        win2.push(9);
    }else {
        kolor = "pink";
        kolejnosc+= 1;
        win1.push(9);
    }    
    document.getElementById('nr9').style.backgroundColor = kolor;
    console.log(kolejnosc);
    document.getElementById("nr9").disabled = true;
    DrawNum++;
}

let buttons = [...document.getElementsByClassName("button")];



function fw101(){

    if (DrawNum===9) {
        document.getElementById("winText").innerHTML = "REMIS";
    }

    let checker = (arr, target) => target.every(v => arr.includes(v));



    for (let i=0;i<=7; i++){
        if(checker(win1, woooon[i])===true) {
            document.getElementById("winText").innerHTML = "MEGA WIN " + kolor.toUpperCase();
            buttons.forEach((v)=> {v.disabled = true;})
            pinkNumb++;
            document.getElementById("pink").innerHTML = "Wynik różowych = " + pinkNumb
        }
        console.log("testPink"+i);
    }
    for (let l=0;l<=7; l++){
        if(checker(win2, woooon[l])===true) {
            document.getElementById("winText").innerHTML = "MEGA WIN " + kolor.toUpperCase();
            buttons.forEach((v)=> {v.disabled = true;})
            yellowNum++
            document.getElementById("yellow").innerHTML = "Wynik żółtych = " + yellowNum
        }
        console.log("testYellow"+l);
    }



}
function refreshPage(){
    buttons.forEach((v)=> {v.disabled = false})
    buttons.forEach((v)=> {v.style.backgroundColor = "white"})
    win1 = []
    win2 = []
    DrawNum = 0
    document.getElementById("winText").innerHTML = " "
    kolejnosc = 1
    // window.location.reload();
}
document.getElementById("restart").addEventListener("click", refreshPage);



