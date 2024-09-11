const changeDisplay = document.getElementById("input-display");
const resultValue = document.getElementById("result");

function inputFunc(inputBtn) {
    changeDisplay.textContent += inputBtn;
    resultValue.value += inputBtn;
    if (inputBtn == ".") {
        document.getElementById("decimal").disabled = true;
    }

}

function result() {
    let operateValue = resultValue.value;
    let operation = Math.round(math.evaluate(operateValue) * 100) / 100;

    if (operation == Infinity) {
        alert("Error, can't divide by 0");
        changeDisplay.textContent = "Error";
        document.getElementById("decimal").disabled = false;
    }
    else {
        changeDisplay.textContent = operation;
        resultValue.value = operation;
        document.getElementById("decimal").disabled = false;
    }

}

function displayReset() {
    changeDisplay.textContent = "";
    resultValue.value = "";
}

function displayDelete() {
    changeDisplay.textContent = changeDisplay.textContent.slice(0, -1);
    resultValue.value = resultValue.value.slice(0, -1);
}