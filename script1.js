let row = document.querySelector(".row")
row.addEventListener("click", display);

function display(e) {
    let result = document.querySelector("#result")
    if (e.target.value === undefined) {
        result.value = "";
    }
    else {
        result.value += e.target.value;
    }
}

let clear = document.getElementById("clear")
let result = document.querySelector("#result")
let finalresult = document.querySelector("#res1")
clear.addEventListener("click", cleardata)
function cleardata() {
    result.value = "";
    finalresult.value = "0";

}

let equal = document.getElementById("equal")
equal.addEventListener("click", equalto)
function equalto() {
    let result = document.querySelector("#result")
    let finalresult = document.querySelector("#res1")
    finalresult.value = eval(result.value)
}



function keypress(e) {
    console.log(e);
    let result = document.querySelector("#result");
    if ((e.key < 10 && e.key >= 0) || e.key === "*" || e.key === "-" || e.key === "+" || e.key === "/") {
        result.value += e.key
        console.log(e.key)
    }
    else if (e.key === "c" || e.key === "C") {
        cleardata()
    }
    else if (e.key === "Enter") {
        equalto()
    }
}
document.body.addEventListener("keypress", keypress)

