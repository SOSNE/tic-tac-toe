let kolejnosc=1;
let kolor =" ";
let win1 = [];
let win2 = [];
let woooon1 =[1,2,3];
let woooon2 =[4,5,6];
let woooon3 =[7,8,9];
let woooon4 =[1,5,9];
let woooon5 =[7,5,3];
let woooon6 =[1,4,7];
let woooon7 =[2,5,8];
let woooon8 =[3,6,9];
let o=1;
function nrr1(){
    console.log("yooo");
    if(kolejnosc%2==0){
        kolor = "yellow"
        kolejnosc+= 1;
        win2.push(o++);
    }else {
        kolor = "pink";
        kolejnosc+= 1;
        win1.push(o++);
    }    
    document.getElementById('nr1').style.backgroundColor = kolor;
    console.log(kolejnosc);
    document.getElementById("nr1").disabled = true;

    
}
function nrr2(){
    console.log("yooo");
    if(kolejnosc%2==0){
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
    
}
function nrr3(){
    console.log("yooo");
    if(kolejnosc%2==0){
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

}
function nrr4(){
    console.log("yooo");
    if(kolejnosc%2==0){
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
}
function nrr5(){
    console.log("yooo");
    if(kolejnosc%2==0){
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
}
function nrr6(){
    console.log("yooo");
    if(kolejnosc%2==0){
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
}
function nrr7(){
    console.log("yooo");
    if(kolejnosc%2==0){
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
}
function nrr8(){
    console.log("yooo");
    if(kolejnosc%2==0){
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
}
function nrr9(){
    console.log("yooo");
    if(kolejnosc%2==0){
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
}

let buttons = [...document.getElementsByClassName("button")];

function fw101(){

    let checker = (arr, target) => target.every(v => arr.includes(v));
    console.log(checker(win1, woooon1));
    console.log(checker(win1, woooon2));
    console.log(checker(win1, woooon3));
    console.log(checker(win1, woooon4));
    console.log(checker(win1, woooon5));
    console.log(checker(win1, woooon6));
    console.log(checker(win1, woooon7));
    console.log(checker(win1, woooon8));

    console.log(checker(win2, woooon1));
    console.log(checker(win2, woooon2));
    console.log(checker(win2, woooon3));
    console.log(checker(win2, woooon4));
    console.log(checker(win2, woooon5));
    console.log(checker(win2, woooon6));
    console.log(checker(win2, woooon7));
    console.log(checker(win2, woooon8));

    if(checker(win1, woooon1)===true) { document.getElementById("wygrana").innerHTML = "MEGA WIN " + kolor; buttons.forEach((v)=> {v.disabled = true;})}
    if(checker(win1, woooon2)===true) { document.getElementById("wygrana").innerHTML = "MEGA WIN " + kolor; buttons.forEach((v)=> {v.disabled = true;})}
    if(checker(win1, woooon3)===true) { document.getElementById("wygrana").innerHTML = "MEGA WIN " + kolor; buttons.forEach((v)=> {v.disabled = true;})}
    if(checker(win1, woooon4)===true) { document.getElementById("wygrana").innerHTML = "MEGA WIN " + kolor; buttons.forEach((v)=> {v.disabled = true;})}
    if(checker(win1, woooon5)===true) { document.getElementById("wygrana").innerHTML = "MEGA WIN " + kolor; buttons.forEach((v)=> {v.disabled = true;})}
    if(checker(win1, woooon6)===true) { document.getElementById("wygrana").innerHTML = "MEGA WIN " + kolor; buttons.forEach((v)=> {v.disabled = true;})}
    if(checker(win1, woooon7)===true) { document.getElementById("wygrana").innerHTML = "MEGA WIN " + kolor; buttons.forEach((v)=> {v.disabled = true;})}
    if(checker(win1, woooon8)===true) { document.getElementById("wygrana").innerHTML = "MEGA WIN " + kolor; buttons.forEach((v)=> {v.disabled = true;})}

    if(checker(win2, woooon1)==true) { document.getElementById("wygrana").innerHTML = "MEGA WIN " + kolor; buttons.forEach((v)=> {v.disabled = true;})}
    if(checker(win2, woooon2)==true) { document.getElementById("wygrana").innerHTML = "MEGA WIN " + kolor; buttons.forEach((v)=> {v.disabled = true;})}
    if(checker(win2, woooon3)==true) { document.getElementById("wygrana").innerHTML = "MEGA WIN " + kolor; buttons.forEach((v)=> {v.disabled = true;})}
    if(checker(win2, woooon4)==true) { document.getElementById("wygrana").innerHTML = "MEGA WIN " + kolor; buttons.forEach((v)=> {v.disabled = true;})}
    if(checker(win2, woooon5)==true) { document.getElementById("wygrana").innerHTML = "MEGA WIN " + kolor; buttons.forEach((v)=> {v.disabled = true;})}
    if(checker(win2, woooon6)==true) { document.getElementById("wygrana").innerHTML = "MEGA WIN " + kolor; buttons.forEach((v)=> {v.disabled = true;})}
    if(checker(win2, woooon7)==true) { document.getElementById("wygrana").innerHTML = "MEGA WIN " + kolor; buttons.forEach((v)=> {v.disabled = true;})}
    if(checker(win2, woooon8)==true) { document.getElementById("wygrana").innerHTML = "MEGA WIN " + kolor; buttons.forEach((v)=> {v.disabled = true;})}
}
function refreshPage(){
    window.location.reload();
}
document.getElementById("restart").addEventListener("click", refreshPage);