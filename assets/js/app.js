// Temperature converter

// Variables needed to manipulate temperature converter
const tempConvInput = document.querySelector("#converter-temp");
const fromTemp = document.querySelector(".conv-from-temp");
const toTemp = document.querySelector(".conv-to-temp");
const resultTemp = document.querySelector(".res-temp");
const convTempBtn = document.querySelector(".btn-temp-conv");
const changeTempBtn = document.querySelector(".temp-change");
const resetTempBtn = document.querySelector(".reset-temp");
const tempImg = document.querySelector(".temp-img");

// Temperature converter functions

function swapTempValues() {
	tempConvInput.value = "";
	resultTemp.style.color = "var(--font-color)";
	resultTemp.textContent = "Result:";
	if (fromTemp.textContent === "°C") {
		fromTemp.textContent = "°F";
		toTemp.textContent = "°C";
	} else {
		fromTemp.textContent = "°C";
		toTemp.textContent = "°F";
	}
}

function convertTemp() {
	if (tempConvInput.value !== "") {
		resultTemp.style.color = "var(--font-color)";
		if (fromTemp.textContent === "°C") {
			celToFahr();
           
		} else {
			fahrToCel();
		}
	} else {
		resultTemp.textContent = "Please type number first!";
		resultTemp.style.color = "var(--warning-color)";
	}
}

function celToFahr() {
	const fahr = tempConvInput.value * 1.8 + 32;
	resultTemp.textContent = `${tempConvInput.value} °C is ${fahr.toFixed(2)}°F`;
    if(fahr>77){
        tempImg.src = "./assets/img/summer-hot.jpg"
    }else if (fahr > 59){
        tempImg.src = "./assets/img/spring-mid-hot.jpg"
    } else if (fahr > 46){
        tempImg.src = "./assets/img/autumn-mid-cold.jpg"
    } else {
        tempImg.src = "./assets/img/winter-cold.jpg"
    }

}
function fahrToCel() {
	const cel = (tempConvInput.value - 32) / 1.8;
	resultTemp.textContent = `${tempConvInput.value} °F is ${cel.toFixed(2)}°C`;
    console.log(cel)
    if(cel>25){
        tempImg.src = "./assets/img/summer-hot.jpg"
    }else if (cel > 15){
        tempImg.src = "./assets/img/spring-mid-hot.jpg"
    } else if (cel > 8){
        tempImg.src = "./assets/img/autumn-mid-cold.jpg"
    } else {
        tempImg.src = "./assets/img/winter-cold.jpg"
    }

}

function restetValues() {
	fromTemp.textContent = "°C";
	toTemp.textContent = "°F";
	resultTemp.textContent = "Result:";
	resultTemp.style.color = "var(--font-color)";
	tempConvInput.value = "";
}

// Event Listeners
convTempBtn.addEventListener("click", convertTemp);
changeTempBtn.addEventListener("click", swapTempValues);
resetTempBtn.addEventListener("click", restetValues);






// function addPictureForTemp() {
//     if (fromTemp.textContent.includes("°C") || toTemp.textContent.includes("°C")) {
//         if(parseInt(resultTemp.textContent)){
//             console.log('dziala')
//         }
// 	// // Handle number changes
// 	// tempConvInput.addEventListener("input", function () {
// 	// 	// As a number
// 	// 	let num = tempConvInput.valueAsNumber;
// 	// 	if (num > 25) {
// 	// 		console.log(num);
// 	// 		tempImg.src = "./assets/img/summer-hot.jpg";
// 	// 	}
// 	// });
// }
// }
// addPictureForTemp() 