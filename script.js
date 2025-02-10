function insert(num) {
    let display = document.getElementById("display");
    if (display.innerText === "0") {
        display.innerText = num;
    } else {
        display.innerText += num;
    }
}
function clearDisplay() {
    document.getElementById("display").innerText = "0";
}
function calculate() {
    let display = document.getElementById("display");
    try {
        display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*'));
    } catch {
        display.innerText = "Ошибка";
    }
}