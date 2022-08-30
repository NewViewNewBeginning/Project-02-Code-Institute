// Update and display current year in footer

document
	.querySelector(".date")
	.appendChild(document.createTextNode(new Date().getFullYear()));

//

let btns = document.querySelectorAll("button");
for (bt of btns) {
	bt.addEventListener("click", function checkBtn(e) {
		if (e.target.innerText === "RESET") {
			reset(e);
		} else if (e.target.innerText === "CHANGE SIDES") {
			swapSide(e);
		} else {
			convert(e);
		}
	});
}

// CONVERTING CHOOSED VALUES

function convert(e) {
	let curParent = e.target.parentElement.parentElement;
	if (curParent.querySelector("input").value !== "") {
		curParent.querySelector("p").style.color = "var(--font-color)";
		if (e.target.classList.contains("temp-convert")) {
			tempConverter(e);
		} else if (e.target.classList.contains("length-convert")) {
			lengthConverter(e);
		} else {
			speedConverter(e);
		}
	} else {
		curParent.querySelector("p").textContent = "Please type number first!";
		curParent.querySelector("p").style.color = "var(--warning-color)";
	}
}
// Temperature converter

function tempConverter(e) {
	let curParent = e.target.parentElement.parentElement;
	if (curParent.querySelector(".convert-from").textContent === "°C") {
		const fahr = curParent.querySelector("input").value * 1.8 + 32;
		curParent.querySelector("p").textContent = `${
			curParent.querySelector("input").value
		} °C is ${fahr.toFixed(2)}°F`;
		if (fahr > 77) {
			curParent.querySelector("img").src = "./assets/img/summer-hot.jpg";
		} else if (fahr > 59) {
			curParent.querySelector("img").src = "./assets/img/spring-mid-hot.jpg";
		} else if (fahr > 46) {
			curParent.querySelector("img").src = "./assets/img/autun-mid-cold.jpg";
		} else {
			curParent.querySelector("img").src = "./assets/img/winter-cold.jpg";
		}
	} else {
		const cel = (curParent.querySelector("input").value - 32) / 1.8;
		curParent.querySelector("p").textContent = `${
			curParent.querySelector("input").value
		} °F is ${cel.toFixed(2)}°C`;
		if (cel > 25) {
			curParent.querySelector("img").src = "./assets/img/summer-hot.jpg";
		} else if (cel > 15) {
			curParent.querySelector("img").src = "./assets/img/spring-mid-hot.jpg";
		} else if (cel > 8) {
			curParent.querySelector("img").src = "./assets/img/autun-mid-cold.jpg";
		} else {
			curParent.querySelector("img").src = "./assets/img/winter-cold.jpg";
		}
	}
}


// Meter Foot conversion

function lengthConverter(e) {
    let curParent = e.target.parentElement.parentElement;
	if (curParent.querySelector(".convert-from").textContent === "Meter"){
        const feet = curParent.querySelector("input").value / 0.3048
        curParent.querySelector("p").textContent = `${
			curParent.querySelector("input").value
		} meters is ${feet.toFixed(2)} feets`;
    }else{
        const meter = curParent.querySelector("input").value / 0.3048
        curParent.querySelector("p").textContent = `${
			curParent.querySelector("input").value
		} feets is ${meter.toFixed(2)} meters`;
    }
}

// Speed conversion

function speedConverter(e) {
    let curParent = e.target.parentElement.parentElement;
	if (curParent.querySelector(".convert-from").textContent === "KM/h"){
        const miles = curParent.querySelector("input").value * 1.609344
        curParent.querySelector("p").textContent = `${
			curParent.querySelector("input").value
		} KM/h is ${miles.toFixed(2)} M/h`;
    }else{
        const km = curParent.querySelector("input").value * 0.621371
        curParent.querySelector("p").textContent = `${
			curParent.querySelector("input").value
		} M/h ${km.toFixed(2)} KM/h`;
    }
}

// CHANGING UNIT SIDES FOR CONVERSION

function swapSide(e) {
	let curParent = e.target.parentElement.parentElement;
	let inputClear = curParent.querySelector(".input").value = "";
	curParent.querySelector("p").textContent = "Result:";
	curParent.querySelector("p").style.color = "var(--font-color)";
	// Change values of conversion to default
	let conLeft = curParent.querySelector(".convert-from");
	let conRight = curParent.querySelector(".convert-to");
	if (e.target.classList.contains("temp-change")) {
		if (conLeft.textContent === "°C") {
			conLeft.textContent = "°F";
			conRight.textContent = "°C";
		} else {
			conLeft.textContent = "°C";
			conRight.textContent = "°F";
		}
	} else if (e.target.classList.contains("length-change")) {
		if (conLeft.textContent === "Meter") {
			conLeft.textContent = "Feet";
			conRight.textContent = "Meter";
		} else {
			conLeft.textContent = "Meter";
			conRight.textContent = "Feet";
		}
	} else {
		if (conLeft.textContent === "KM/h") {
			conLeft.textContent = "M/h";
			conRight.textContent = "KM/h";
		} else {
			conLeft.textContent = "KM/h";
			conRight.textContent = "M/h";
		}
	}
}

// RESETING ALL VALUES OF CURRENT CONVERTER TO DEFAULT

function reset(e) {
	let curParent = e.target.parentElement.parentElement;
	let inputClear = (curParent.querySelector(".input").value = "");
	curParent.querySelector("p").textContent = "Result:";
	curParent.querySelector("p").style.color = "var(--font-color)";
	// Change values of conversion to default
	let conLeft = curParent.querySelector(".convert-from");
	let conRight = curParent.querySelector(".convert-to");
	if (e.target.classList.contains("reset-temp")) {
		conLeft.textContent = "°C";
		conRight.textContent = "°F";
	} else if (e.target.classList.contains("reset-length")) {
		conLeft.textContent = "Meter";
		conRight.textContent = "Feet";
	} else {
		conLeft.textContent = "KM/h";
		conRight.textContent = "M/h";
	}
}
