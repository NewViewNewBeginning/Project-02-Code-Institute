// Temperature converter

// Variables needed to manipulate temperature converter 
const tempConvInput = document.querySelector("#converter-temp");
const fromTemp = document.querySelector(".conv-from-temp");
const toTemp = document.querySelector(".conv-to-temp");
const resultTemp = document.querySelector(".res-temp");
const convTempBtn = document.querySelector('.btn-temp-conv')
const changeTempBtn = document.querySelector('.temp-change')
const resetTempBtn = document.querySelector('.reset-temp')

// Temperature converter functions

function swapTempValues(){
    if(fromTemp.textContent === '°C'){
        fromTemp.textContent = '°F'
        toTemp.textContent = '°C'
    }else{
        fromTemp.textContent = '°C'
        toTemp.textContent = '°F'
    }
}

function convertTemp(){
    if(fromTemp.textContent === '°C'){
        resultTemp.textContent = 
    }
}

function fahrToCel(){
    const fahr = tempConvInput.value * 1.8 + 32

}


function restetValues(){
    fromTemp.textContent = '°C'
    toTemp.textContent = '°F'
    tempConvInput.value = 'Type number...'
}

// Event Listeners
convTempBtn.addEventListener('click' convertTemp)
changeTempBtn.addEventListener('click',swapTempValues)
resetTempBtn.addEventListener('click', restetValues)


