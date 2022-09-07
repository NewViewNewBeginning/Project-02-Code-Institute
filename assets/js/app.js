// Update and display current year in footer

document
	.querySelector(".date")
	.appendChild(document.createTextNode(new Date().getFullYear()));

// Modal window ---how to use---

const modalOpen = document.querySelector(".modal-open");
const modalClose = document.querySelector(".modal-close");
const modal = document.querySelector(".modal-wrapper");

modalOpen.addEventListener("click", () => {
	modal.classList.add("show");
});
modalClose.addEventListener("click", () => {
	modal.classList.remove("show");
});

// Add event listener to each button with correct function

let btns = document.querySelectorAll("button");
for (let bt of btns) {
	bt.addEventListener("click", function (e) {
		if (this.innerText === "RESET") {
			console.log(this, e);
			reset(e);
			// } else if (this.innerText === "CHANGE SIDES") {
			// 	changeSide(e);
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
			curParent.querySelector("input").value = "";
		} else if (e.target.classList.contains("length-convert")) {
			lengthConverter(e);
			curParent.querySelector("input").value = "";
		} else {
			speedConverter(e);
			curParent.querySelector("input").value = "";
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
		} °C is ${fahr.toFixed(2)} °F`;
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
	if (curParent.querySelector(".convert-from").textContent === "Meter") {
		const feet = curParent.querySelector("input").value / 0.3048;
		curParent.querySelector("img").src = "./assets/img/meter-length.jpg";
		curParent.querySelector("p").textContent = `${
			curParent.querySelector("input").value
		} meters is ${feet.toFixed(2)} feets`;
	} else {
		const meter = curParent.querySelector("input").value / 0.3048;
		curParent.querySelector("img").src = "./assets/img/foot-length.jpg";
		curParent.querySelector("p").textContent = `${
			curParent.querySelector("input").value
		} feets is ${meter.toFixed(2)} meters`;
	}
}

// Speed conversion

function speedConverter(e) {
	let curParent = e.target.parentElement.parentElement;
	if (curParent.querySelector(".convert-from").textContent === "KM/h") {
		const miles = curParent.querySelector("input").value * 1.609344;
		curParent.querySelector("img").src = "./assets/img/km-speed.jpg";
		curParent.querySelector("p").textContent = `${
			curParent.querySelector("input").value
		} KM/h is ${miles.toFixed(2)} M/h`;
	} else {
		const km = curParent.querySelector("input").value * 0.621371;
		curParent.querySelector("img").src = "./assets/img/mile-speed.jpg";
		curParent.querySelector("p").textContent = `${
			curParent.querySelector("input").value
		} M/h ${km.toFixed(2)} KM/h`;
	}
}

// CHANGING UNIT SIDES FOR CONVERSION
//Object storing coverter units
let converterLabels = {
	"temp-conv": {
		left: "°C",
		right: "°F",
	},
	"length-conv": {
		left: "Meter",
		right: "Feet",
	},
	"speed-conv": {
		left: "KM/h",
		right: "M/h",
	},
};
let changeBtns = document.querySelectorAll(".change");
for (let changeBtn of changeBtns) {
	changeBtn.addEventListener("click", changeSide);
}

function changeSide(e) {
	//Current converter container with ID
	let parentId = e.target.parentElement.parentElement.id;
	//Temporary/default left side coverter unit C,meter,KM/h...
	let tempLeft = converterLabels[parentId].left;
	converterLabels[parentId].left = converterLabels[parentId].right;
	converterLabels[parentId].right = tempLeft;
	let curParent = e.target.parentElement.parentElement;
	let conLeft = curParent.querySelector(".convert-from");
	let conRight = curParent.querySelector(".convert-to");
	conLeft.textContent = converterLabels[parentId].left;
	conRight.textContent = converterLabels[parentId].right;
	
	// reset values and bring default syle
	curParent.querySelector(".input").value = "";
	curParent.querySelector("p").textContent = "Result:";
	curParent.querySelector("p").style.color = "var(--font-color)";

	// if (e.target.classList.contains("temp-change")) {
	// 	if (conLeft.textContent === "°C") {
	// 		conLeft.textContent = "°F";
	// 		conRight.textContent = "°C";
	// 	} else {
	// 		conLeft.textContent = "°C";
	// 		conRight.textContent = "°F";
	// 	}
	// } else if (e.target.classList.contains("length-change")) {
	// 	if (conLeft.textContent === "Meter") {
	// 		conLeft.textContent = "Feet";
	// 		conRight.textContent = "Meter";
	// 	} else {
	// 		conLeft.textContent = "Meter";
	// 		conRight.textContent = "Feet";
	// 	}
	// } else {
	// 	if (conLeft.textContent === "KM/h") {
	// 		conLeft.textContent = "M/h";
	// 		conRight.textContent = "KM/h";
	// 	} else {
	// 		conLeft.textContent = "KM/h";
	// 		conRight.textContent = "M/h";
	// 	}
	// }
}

// RESETING ALL VALUES OF CURRENT CONVERTER TO DEFAULT

function reset(e) {
	let curParent = e.target.parentElement.parentElement;
	curParent.querySelector(".input").value = "";
	curParent.querySelector("p").textContent = "Result:";
	curParent.querySelector("p").style.color = "var(--font-color)";
	// Change values of conversion to default
	let conLeft = curParent.querySelector(".convert-from");
	let conRight = curParent.querySelector(".convert-to");
	if (e.target.classList.contains("reset-temp")) {
		conLeft.textContent = "°C";
		conRight.textContent = "°F";
		curParent.querySelector("img").src = "./assets/img/temperature-default.png";
	} else if (e.target.classList.contains("reset-length")) {
		conLeft.textContent = "Meter";
		conRight.textContent = "Feet";
		curParent.querySelector("img").src = "./assets/img/lenght-default.webp";
	} else {
		conLeft.textContent = "KM/h";
		conRight.textContent = "M/h";
		curParent.querySelector("img").src = "./assets/img/speed-default.jpg";
	}
}
