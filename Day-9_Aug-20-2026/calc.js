function doCalculations(){
    const param1 = document.getElementById('param1').value;
    const param2 = document.getElementById('param2').value;
    const calcAction = document.getElementById('calcOptions').value;
    let output = 0;
    switch(calcAction){
        case "add":
            output = add(param1 , param2);
            break;
        case "subtract":
            output = subtract(param1 , param2);
            break;
        case "multiply":
            output = multiply(param1 , param2);
            break;
        case "divide":
            output = divide(param1 , param2);
            break;
        case "modulus":
            output = modulus(param1 , param2);
            break;
    }
    document.getElementById('output').innerHTML = "The " + calcAction + " of " + param1 + " and " + param2 + " is " + output;
}
function add(a=0, b=0){
    const result = Number(Number(a) + Number(b));
    return result;
}
function subtract(a, b){
    const result = Number(Number(a) - Number(b));
    return result;
}
function multiply(a, b){
    const result = Number(Number(a) * Number(b));
    return result;
}
function divide(a, b){
    if(b != 0){
        const result = Number(Number(a) / Number(b));
        return result;
    }
    return "infinity";
}
function modulus(a, b){
    const result = Number(Number(a) % Number(b));
    return result;
}