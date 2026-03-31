let text = document.querySelector(".Text");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btndel = document.getElementById("btn-");
let btnx = document.getElementById("btnx");
let text2 = document.querySelector(".Text2");
let showoperator = document.querySelector(".showoperator");

let firstnumber = "";
let secondnumber = "";
let operator = false;

btn1.onclick = function() {
    if (operator == false) {
    firstnumber+=1;
    text.textContent = firstnumber;
    } else {
        secondnumber+=1;
        text2.textContent = secondnumber;
    }
}
btn2.onclick = function() {
     if (operator == false) {
    firstnumber+=2;
    text.textContent = firstnumber;
    } else {
        secondnumber+=2;
        text2.textContent = secondnumber;
    }
}
btn3.onclick = function() {
    if (operator == false) {
    firstnumber+=3;
    text.textContent = firstnumber;
    } else {
        secondnumber+=3;
        text2.textContent = secondnumber;
    }
}
btn4.onclick = function() {
  if (operator == false) {
   firstnumber+=4;
   text.textContent = firstnumber;
    } else {
        secondnumber+=4;
        text2.textContent = secondnumber;
    }
}
btn5.onclick = function() {
    if (operator == false) {
    firstnumber+=5;
    text.textContent = firstnumber;
    } else {
        secondnumber+=5;
        text2.textContent = secondnumber;
    }
}
btn6.onclick = function() {
  if (operator == false) {
    firstnumber+=6;
    text.textContent = firstnumber;
    } else {
        secondnumber+=6;
        text2.textContent = secondnumber;
    }
}
btn7.onclick = function() {
     if (operator == false) {
    firstnumber+=7;
    text.textContent = firstnumber;
    } else {
        secondnumber+=7;
        text2.textContent = secondnumber;
    }
}
btn8.onclick = function() {
     if (operator == false) {
    firstnumber+=8;
    text.textContent = firstnumber;
    } else {
        secondnumber+=8;
        text2.textContent = secondnumber;
    }
}
btn9.onclick = function() {
     if (operator == false) {
    firstnumber+=9;
    text.textContent = firstnumber;
    } else {
        secondnumber+=9;
        text2.textContent = secondnumber;
    }
}

btn0.onclick = function() {
    if (operator == false) {
    firstnumber+=0;
    text.textContent = firstnumber;
    } else {
        secondnumber+=0;
        text2.textContent = secondnumber;
    }
}

btnx.onclick = function() {
    operator = true;
    showoperator.textContent = "x";

}

btndel.onclick = function() {
firstnumber = firstnumber.slice(0, -1);
  text.textContent = firstnumber; 
}



