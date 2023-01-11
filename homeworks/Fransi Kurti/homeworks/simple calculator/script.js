function add(){
    let num1 = Number(document.getElementById("input-number1").value);
    let num2 = Number(document.getElementById("input-number2").value);
    let result = num1 + num2;
    document.getElementById("result").value = result;
}

function reset(){
    document.getElementById("input-number1").value = "";
    document.getElementById("input-number2").value = "";
    document.getElementById("result").value = "";
}
