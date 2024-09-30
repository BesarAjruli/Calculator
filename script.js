const buttonContrainer = document.querySelector("#buttonsContainer");
const results = document.querySelector("#resultText");
const digits = document.querySelectorAll("button")
const cleanText = document.querySelector("#clean")

let Num1;
let Num2;
let operator;
let operatorType;

digits.forEach((digit) => {
digit.addEventListener("click", () => {
    switch (digit.id){
        case "": 
            if(results.textContent === "0"){
            results.textContent = ""
            }
            cleanText.textContent = "C"
            if(results.textContent.length !== 10){
            results.textContent += digit.textContent
            }
            break;
        case "clean":
            results.textContent = "0";
            cleanText.textContent = "AC"
            break;
        case "signChange":
            if(results.textContent.includes("-")){
                results.textContent = results.textContent.replace("-", "")
            }
            else if(results.textContent !== "0" && !results.textContent.includes("-")){
            results.textContent = `-${results.textContent}`
            }
            break;
        case "percentage":
            break;
        case "divide":
            if(operator !== true){
                operatorType = "divide"
           startToOperate()
            }
            else{
                operate(operatorType)
            }
            break;
        case "multiply":
                if(operator !== true){
                    operatorType = "multiply"
               startToOperate()
                }
                else{
                    operate(operatorType)
                }
                break;
        case "plus":
                if(operator !== true){
                operatorType = "plus"
               startToOperate()
                }
                else{
                operate(operatorType)
                }
                break;
        case "minus":
                if(operator !== true){
                operatorType = "minus"
               startToOperate()
                }
                else{
                operate(operatorType)
                }
                break;
        case "equals":
               if(operator !== true){
                operatorType = "equal"
                operate(operatorType)
                }
                else{
                operate(operatorType)
                }
                break;
        case "point":
               if(!results.textContent.includes(".")){
                results.textContent = results.textContent += "."
               }
    }
    
})
})

function operate(type){
    Num2 = parseFloat(results.textContent)
    results.textContent = ""
    switch(type){
        case "divide":
            results.textContent = Num1 / Num2
            operator = false;
            break;
        case "multiply":
            results.textContent = Num1 * Num2
            operator = false;
            break;
        case "plus":
            results.textContent = Num1 + Num2
            operator = false;
            break;
        case "minus":
            results.textContent = Num1 - Num2
            operator = false;
            break;
        case "equal":
            results.textContent = Num2 + Num2
            operator = false;
            break;
    }
}

function startToOperate(){
    operator = true;      
    Num1 = parseFloat(results.textContent)
    results.textContent = ""
}