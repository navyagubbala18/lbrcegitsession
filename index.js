let count = 0;

function updateDisplay() {
    document.getElementById("count").textContent = count;
}

function increase() {
    if (count < 10) {
        count++;
        updateDisplay();
    }
}

function decrease() {
    if (count > 0) {
        count--;
        updateDisplay();
    }
}

function resetCounter() {
    count = 0;
    updateDisplay();
}
