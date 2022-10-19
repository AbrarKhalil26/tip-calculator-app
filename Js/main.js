let billInput = document.querySelector(".input-bill");
let peopleInput = document.querySelector(".input-people");
let tips = document.querySelectorAll(".tips");
let custom = document.querySelector(".custom");
let tipPerPerson = document.getElementById("result-tipAmount");
let totalPerPerson = document.getElementById("result-total");
let reset = document.querySelector(".reset");
let error = document.querySelector(".error");

billInput.addEventListener("input",billInputFun);
peopleInput.addEventListener("input",peopleInputFun);
tips.forEach(function(val) {
    val.addEventListener("click",tipsFun);
});
custom.addEventListener("input", customFun);
reset.addEventListener("click", resetFun);




billInput.value = "0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

// decerelation 2 varaible
let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;




function billInputFun(){
    billValue = parseFloat(billInput.value);
    calcTip();
};

function peopleInputFun(){
    peopleValue = parseFloat(peopleInput.value);
    
    if(peopleValue < 1){
        error.style.display = 'flex';
        peopleInput.style.border = '4px solid red';
    }
    else {
        error.style.display = 'none';
        peopleInput.style.border = 'none';
    }
    
    calcTip();
};


function customFun(){
    tipValue = parseFloat(custom.value / 100);
    tips.forEach(function (val){
        val.classList.remove("active-tip");
    });
    calcTip();
};


function tipsFun(event){
    tips.forEach( function(val){
        val.classList.remove("active-tip")
        if (event.target.innerHTML == val.innerHTML){
            val.classList.add("active-tip");
            tipValue = parseFloat(val.innerHTML)/100;
        }
    });
    calcTip();
};


function calcTip(){
    if (peopleValue >= 1){
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue * tipAmount) / peopleValue;
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
        console.log(tipPerPerson.innerHTML);
        console.log(totalPerPerson.innerHTML)
    }
}


function resetFun(){
    // صفرت القيمه من الاول
    billInput.value = "0.0";
    billInputFun();
    peopleInput.value = "1";
    peopleInputFun();
    custom.value = "";
    
}