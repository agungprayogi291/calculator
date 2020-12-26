const displayNumber = document.querySelector('.display-number');
const displayOperator = document.querySelector('.display-operator');
var buttonElement = document.querySelectorAll('span');
const dataStore = {
    outputNumber : '0',
    firsNumber : '0 ',
    secondNumber : false,
    operator : null   
}

//function update display kalkulator
const updateDisplay = _=>{
    //display awal 0
    displayNumber.innerHTML = dataStore.outputNumber;
    displayOperator.innerHTML = dataStore.operator;
}

//fungsi input number
const inputDigit = digit =>{
    //cek pakah seconNumvbver belum siap
    if(dataStore.secondNumber !== true){
        let data = null;
        //apkah ouputNumber bernilai string 0
        //maka timpa saja 
        if(dataStore.outputNumber == '0' ){
             data = dataStore.outputNumber = digit;
             
        }//kalu tidak concate aja
        else{
          data = dataStore.outputNumber +=digit;
           
        }
        //simpan ke dataStore pada property firsNumber
        dataStore.firsNumber = data;
       
    }
    //jika siap
    else{

        if(dataStore.outputNumber == "0"){
            dataStore.outputNumber =digit;
        }else{
            
            dataStore.outputNumber += digit;
        }
    }
   
}

//fungsi operator
const operator = operan =>{
        dataStore.operator = operan; 
        dataStore.outputNumber = '0';
        dataStore.secondNumber = true;  
            
}

function clearAll(){
    dataStore.outputNumber = '0';
    dataStore.firsNumber = null;
    dataStore.secondNumber= false;
    dataStore.operator = '';
}
function singleClear(data){
    // cek data objek
    // timpa string kosong
    if(data.operator !== null){
        dataStore.operator = null;
    }else if(dataStore.outputNumber !== null ){
        dataStore.outputNumber = "0";
    } else if(dataStore.secondNumber !== false){
        dataStore.secondNumber = false; 
    }
}

function afterSingleClear(){ 
  if(dataStore.outputNumber == "0"){
    dataStore.outputNumber = dataStore.firsNumber;
 
  }
}


function handlerAritmatic(){
    let result = dataStore.firsNumber;
    if(dataStore.operator == "+"){
        result = parseInt(result) + parseInt(dataStore.outputNumber);
    }else if(dataStore.operator =="-"){
        result = parseInt(result) - parseInt(dataStore.outputNumber);
    }else if(dataStore.operator == "x") {
        result = parseInt(result) * parseInt(dataStore.outputNumber)
    }else if(dataStore.operator == "/"){
        result = parseInt(result) / parseInt(dataStore.outputNumber)
    }
     dataStore.outputNumber = result.toString();
     dataStore.firsNumber = dataStore.outputNumber;
     dataStore.operator = '';
}

//handler negative
function handlerNegativeNumber(){
    // kali output dengan bilangan negative
    dataStore.outputNumber = dataStore.outputNumber * (-1) ;
    // simpan property firsnumber
    dataStore.firsNumber = dataStore.outputNumber;
}


// // function handler persent
// function handlerPercent(digit){
//   // kali output dengan bilangan negative
//   dataStore.outputNumber = digit / 100 ; 
//   // simpan property firsnumber

//   dataStore.firsNumber = dataStore.outputNumber;
  
// }

//fungsi running data 
function runCalculator(){
    buttonElement.forEach(btn=>{
        btn.addEventListener('click',function(event){
            let target = event.target;
            if(target.classList.contains("angka")){
                inputDigit(target.innerText);
                updateDisplay();
                console.log(dataStore) 
            }
            if(target.classList.contains("operator")){
                 operator(target.innerText);
                 updateDisplay();   
                 console.log(dataStore) 
            } 
            if(target.classList.contains("out")){
                handlerAritmatic()
                updateDisplay()
                 console.log(dataStore) 
            }
             if(target.classList.contains("clearAll")){
                clearAll();
                updateDisplay();
                console.log(dataStore) 
            }
            if(target.classList.contains("clear")){
                singleClear(dataStore)
                afterSingleClear();
                updateDisplay();
                console.log(dataStore) 
            }
             if(target.classList.contains("negative")){
                handlerNegativeNumber()
                updateDisplay();
                console.log(dataStore) 
            }// }else if(target.classList.contains("persen")){
            //     handlerPercent(dataStore.outputNumber);
            //     updateDisplay()
            // }
        })  
    })
    updateDisplay();
    console.log(dataStore) 
}

runCalculator();