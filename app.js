let operationBtns = [...document.querySelectorAll('.calc_btn-operator')];
let numberBtns  = [...document.querySelectorAll('.calc_btn-number')];
let displayPreviousOperant = document.querySelector('.calc_display_past-operant');
let displayOperation = document.querySelector('.calc_display_operator');
let displayCurrentOperant = document.querySelector('.calc_display_current-operant');
let sumBtn = document.querySelector('.calc-btn-sum');
let deleteBtn  = document.querySelector('.btn_del');
let clearBtn = document.querySelector('.btn_clear-entry');
let clearAllBtn = document.querySelector('.btn_clear-all')


let currentOperant = '';
let previousOperant = '';
let operation = '';
let justComputed = false;

let updateDisplay = function() {
  displayCurrentOperant.innerText =  currentOperant;  
  displayPreviousOperant.innerText = previousOperant;
  displayOperation.innerText = operation; 
}


let appendNumber = function(number) {
  if(!number) return;
  if( number === "." && currentOperant.includes(".")) {
    return;
  }
  if(justComputed) {
    currentOperant = "";
    justComputed = false;
  }

  currentOperant += number;
  return currentOperant
}

let chooseOperation = function(op) {
  if(!op) return;
  
  if(!previousOperant && currentOperant) {
    previousOperant = currentOperant;
    currentOperant = '';
  }

  if(previousOperant && currentOperant) {
    let result = compute();
    previousOperant = result.toString();
    currentOperant = "";
  }

  operation = op;
  currentOperant = '';
}

let compute = function(){
  let num1 = parseFloat(currentOperant);
  let num2 = parseFloat(previousOperant);
  console.log(num1);
  console.log(num2);

  if (isNaN(num1) || isNaN(num2)) return;

  let result = '';

  switch (operation) {
    case "+":
      console.log("add");
      result = num2 + num1;
      break;
    case "-":
      console.log('minus');
      result = num2 - num1;
      break;
    case "×":
      console.log('multiply');
      result = num2 * num1;
      break;
    case "÷":
      console.log('divide');
      if(num1 === 0){
        result = 'Division by zero is undefined';
        return result;
      };
      result = num2 / num1;
      break;
  }

  return result;
}


let deleteNum = function() {
  currentOperant = currentOperant.slice(0, -1);
  updateDisplay();
}

let clearNum = function() {
  currentOperant = '';
  updateDisplay();
}

let clearAll = function (){
  currentOperant = '';
  previousOperant = '';
  operation = '';
  updateDisplay();
}

numberBtns.forEach((btn)=> { 
   btn.addEventListener('click', (e)=> {
    let clickedNumber =  e.target.innerText;
    appendNumber(clickedNumber);
    console.log(currentOperant);
    updateDisplay();
   })
})

operationBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let clickedOp = e.target.innerText;
    chooseOperation(clickedOp);
    updateDisplay();
  })
})


sumBtn.addEventListener('click', () => {

  if(previousOperant && currentOperant && operation) {
    let result = compute();
    currentOperant = result.toString()
    operation = '';
    previousOperant = '';
    justComputed = true;
    updateDisplay();
  }
})

deleteBtn.addEventListener('click', () => {
  deleteNum();
})

clearBtn.addEventListener('click', () => {
  clearNum();
})


clearAllBtn.addEventListener('click', () => {
  clearAll();
})