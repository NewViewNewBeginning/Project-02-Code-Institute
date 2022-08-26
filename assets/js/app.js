// Temperature converter

// Variables needed to manipulate temperature converter
const tempConvInput = document.querySelector("#converter-temp");
const fromTemp = document.querySelector(".conv-from-temp");
const toTemp = document.querySelector(".conv-to-temp");
const resultTemp = document.querySelector(".res-temp");
const convTempBtn = document.querySelector(".btn-temp-conv");
const changeTempBtn = document.querySelector(".temp-change");
const resetTempBtn = document.querySelector(".reset-temp");

// Temperature converter functions

function swapTempValues() {
	tempConvInput.value = "";
	resultTemp.textContent = "";
	if (fromTemp.textContent === "°C") {
		fromTemp.textContent = "°F";
		toTemp.textContent = "°C";
	} else {
		fromTemp.textContent = "°C";
		toTemp.textContent = "°F";
	}
}

function convertTemp() {
	if (fromTemp.textContent === "°C") {
		celToFahr();
	} else {
		fahrToCel();
	}
}

function celToFahr() {
	const fahr = tempConvInput.value * 1.8 + 32;
	resultTemp.textContent = `${tempConvInput.value} °C to ${fahr.toFixed(2)}°F`;
}
function fahrToCel() {
	const cel = (tempConvInput.value - 32) / 1.8;
	resultTemp.textContent = `${tempConvInput.value} °F to ${cel.toFixed(2)}°C`;
}

function restetValues() {
	fromTemp.textContent = "°C";
	toTemp.textContent = "°F";
	tempConvInput.value = "";
}

// Event Listeners
convTempBtn.addEventListener("click", convertTemp);
changeTempBtn.addEventListener("click", swapTempValues);
resetTempBtn.addEventListener("click", restetValues);
