let buttons = [...document.querySelectorAll('.calc_buttons-btn')];
let displayPastNumber = document.querySelector('.calc_display_past-operant');
let displayOperator = document.querySelector('.calc_display_operator');
let displayCurrentNumber = document.querySelector('.calc_display_current-operant');


let currentOperant = '';
let currentOperator = '';
let pastOperant = '';


buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if(btn.classList.contains('calc_btn-number')){
      console.log('number');
      let clickedNumber = btn.textContent;
      console.log(clickedNumber);
      if (clickedNumber === '.' && currentOperant === '') return;
      if (clickedNumber === '.' && currentOperant.includes(".")) return;

      currentOperant += clickedNumber;
      console.log(currentOperant)
    }

    if(btn.classList.contains('calc_btn-operator')){
      console.log('operator')
    }

    if(btn.classList.contains('calc_btn-fnc')){
      console.log('functionality')
    }

    if(btn.classList.contains('calc-btn-sum')){
    console.log('calculate')
    }
  })

}) 

//1 Get all Dom buttons
//2 Get All 3 displays from DOM
//3 Make variables for all data in use