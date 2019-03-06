let screen = document.querySelector(".screen span");
let values = document.querySelectorAll(".value");
let point = document.getElementById("point");
let operation = document.querySelectorAll(".operator");
let equal = document.getElementById("result");
let clearButton = document.getElementById("clear");

let number1 = 0;
let operator = "";
let number2 = 0;
let second = false;

operation.forEach(button => {
    button.addEventListener("click", (e) => {
        if(second){
            number1 = result();
            number2 = 0;
        }
        screen.textContent = "";
        operator = e.target.textContent;
        second = true;
        
    })
})

clearButton.addEventListener("click", () => {
    clear();
});

equal.addEventListener("click", () => {
    screen.textContent = result();
})

values.forEach(button => {
    button.addEventListener("click", (e) => {
        screen.textContent += e.target.textContent;

        if(!second){
            number1 += e.target.textContent;
        } else {
            number2 += e.target.textContent;
        }
        if(screen.textContent.toString().split('').length>11){
            screen.textContent = "Too Big";
        }
    })
})

function clear(){
    number1 = 0;
    number2 = 0;
    operator = "";
    screen.textContent = "";
    second = false;
}

function result(){
    let endValue = 0;
    if(operator == "+"){
        endValue = sum(+number1, +number2);
    }
    else if(operator == "-"){
        endValue = sub(+number1, +number2);
    }
    else if(operator == "*"){
        endValue = mul(+number1, +number2);
    }
    else if(operator == "/"){
        endValue = div(+number1, +number2);
    }
    if(endValue.toString().split('').length>11){
        return "Too Big";
    }
    return endValue;
}

function sum(a,b){
    return a+b;
}
function sub(a,b){
    console.log(+a + " " + +b);
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}