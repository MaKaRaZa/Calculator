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
    let lastChar = current.innerText.slice(-1);
    let operators = "/*-+.%";

    if (operators.includes(lastChar) && operators.includes(num)) {
        return;
    }
    if (num === "%") {
        let expression = current.innerText;
        let match = expression.match(/(\d+(?:\.\d+)?)$/);
    if (match) {
        let number = parseFloat(match[1]);
        let newExpression = expression.replace(/\d+(?:\.\d+)?$/, (number / 100).toString());
        current.innerText = newExpression;
        return;
    }
}
    if (current.innerText.length < 12) {
        if (current.innerText === "0" && !operators.includes(num)) {
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