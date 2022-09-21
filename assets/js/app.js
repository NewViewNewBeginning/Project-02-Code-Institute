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

// Add event listener to CONVERT buttons

let convertBtns = document.querySelectorAll(".convert");
for (let btn of convertBtns) {
	btn.addEventListener("click", convert);
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
	let cel;
	let fahr;
	if (curParent.querySelector(".convert-from").textContent === "°C") {
		fahr = curParent.querySelector("input").value * 1.8 + 32;
		curParent.querySelector("p").textContent = `${
			curParent.querySelector("input").value
		} °C is ${fahr.toFixed(2)} °F`;
	} else {
		cel = (curParent.querySelector("input").value - 32) / 1.8;
		curParent.querySelector("p").textContent = `${
			curParent.querySelector("input").value
		} °F is ${cel.toFixed(2)}°C`;
	}
	if (cel > 25 || fahr > 77) {
		curParent.querySelector("img").src = "./assets/img/summer-hot.jpg";
		curParent.querySelector("img").alt =
			"Sun on a clear sky in sunny yellow color";
	} else if (cel > 15 || fahr > 59) {
		curParent.querySelector("img").src = "./assets/img/spring-mid-hot.jpg";
		curParent.querySelector("img").alt =
			"Green fields with flowers and sun behind clouds";
	} else if (cel > 8 || fahr > 46) {
		curParent.querySelector("img").src = "./assets/img/autun-mid-cold.jpg";
		curParent.querySelector("img").alt =
			"Benches in the park with leaves which fell from trees  ";
	} else {
		curParent.querySelector("img").src = "./assets/img/winter-cold.jpg";
		curParent.querySelector("img").alt = "Bush covered in ice";
	}
}

// Meter Foot conversion

function lengthConverter(e) {
	let curParent = e.target.parentElement.parentElement;
	if (curParent.querySelector(".convert-from").textContent === "Meter") {
		const feet = curParent.querySelector("input").value / 0.3048;
		curParent.querySelector("img").src = "./assets/img/meter-length.jpg";
		curParent.querySelector("img").alt =
			"Elastic measure tape / tailor measuring tape ";
		curParent.querySelector("p").textContent = `${
			curParent.querySelector("input").value
		} meters is ${feet.toFixed(2)} feets`;
	} else {
		const meter = curParent.querySelector("input").value * 0.3048;
		curParent.querySelector("img").src = "./assets/img/foot-length.jpg";
		curParent.querySelector("img").alt = "Bare women feet on the sand beach";
		curParent.querySelector("p").textContent = `${
			curParent.querySelector("input").value
		} feets is ${meter.toFixed(2)} meters`;
	}
}

// Speed conversion

function speedConverter(e) {
	let curParent = e.target.parentElement.parentElement;
	if (curParent.querySelector(".convert-from").textContent === "KM/h") {
		const miles = curParent.querySelector("input").value * 0.621371;
		curParent.querySelector("img").src = "./assets/img/km-speed.jpg";
		curParent.querySelector("img").alt =
			"Old style car speedometer showing kilometers in hour";
		curParent.querySelector("p").textContent = `${
			curParent.querySelector("input").value
		} KM/h is ${miles.toFixed(2)} M/h`;
	} else {
		const km = curParent.querySelector("input").value * 1.609344;
		curParent.querySelector("img").src = "./assets/img/mile-speed.jpg";
		curParent.querySelector("img").alt =
			"Speed limit sign with 35 miles per hour";
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
		defaultLeft: "°C",
		defaultRight: "°F",
		defaultImg: "./assets/img/temperature-default.png",
	},
	"length-conv": {
		left: "Meter",
		right: "Feet",
		defaultLeft: "Meter",
		defaultRight: "Feet",
		defaultImg: "./assets/img/lenght-default.webp",
	},
	"speed-conv": {
		left: "KM/h",
		right: "M/h",
		defaultLeft: "KM/h",
		defaultRight: "M/h",
		defaultImg: "./assets/img/speed-default.jpg",
	},
};

// Add event listener to CHANGE SIDE buttons

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
}

// Add event listener to RESET  buttons

let resetBtns = document.querySelectorAll(".reset");
for (let resetBtn of resetBtns) {
	resetBtn.addEventListener("click", reset);
}

// RESETING ALL VALUES IN CURRENT CONVERTER TO DEFAULT

function reset(e) {
	let curParent = e.target.parentElement.parentElement;
	curParent.querySelector(".input").value = "";
	curParent.querySelector("p").textContent = "Result:";
	curParent.querySelector("p").style.color = "var(--font-color)";
	// Change values of conversion to default
	let parentId = e.target.parentElement.parentElement.id;
	let conLeft = curParent.querySelector(".convert-from");
	let conRight = curParent.querySelector(".convert-to");
	curParent.querySelector("img").src = converterLabels[parentId].defaultImg;

	if (conLeft.textContent !== converterLabels[parentId].defaultLeft) {
		conLeft.textContent = converterLabels[parentId].defaultLeft;
		conRight.textContent = converterLabels[parentId].defaultRight;
	}
}
