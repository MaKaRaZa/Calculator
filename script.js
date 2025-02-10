document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (!isNaN(key) || "/*-+.%".includes(key)) {
        insert(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearAll();
    } else if (key === "=") {
        calculate();
    }
});

function insert(num) {
    let current = document.getElementById("current-equation");
    if (current.innerText === "Ошибка") {
        current.innerText = "";
    }
    if (current.innerText.length < 12) {
        if (current.innerText === "0") {
            current.innerText = num;
        } else {
            current.innerText += num;
        }
    }
}
function clearAll() {
    document.getElementById("current-equation").innerText = "0";
    document.getElementById("previous-equation").innerText = "";
}
function deleteLast() {
    let current = document.getElementById("current-equation");
    if (current.innerText === "Ошибка") {
        current.innerText = "0";
        return;
    }
    current.innerText = current.innerText.slice(0, -1);
    if (current.innerText === "") {
        current.innerText = "0";
    }
}
function calculate() {
    let current = document.getElementById("current-equation");
    let previous = document.getElementById("previous-equation");
    try {
        let result = eval(current.innerText.replace('÷', '/').replace('×', '*'));
        previous.innerText = current.innerText;
        current.innerText = result;
    } catch {
        current.innerText = "Ошибка";
    }
}