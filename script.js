const buttons = document.getElementsByClassName("button");
const display = document.getElementById("display");

const allowed_chars = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "+",
    "x",
    "X",
    "*",
    "/",
    ".",
    "!",
    "c",
    "C",
    "=",
    "CE",
    "^",
    "()",
    "(",
    ")",
];
let opening_brace = true;
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const multipliers = ["x", "X", "*"];

function button_press(char) {
    if (!allowed_chars.includes(char)) {
        return;
    }

    if (multipliers.includes(char)) {
        char = "x";
    }

    if (numbers.includes(char)) {
        display.innerText += char;
    } else if (char === "c" || char === "C") {
        display.innerText = display.innerText.substring(
            0,
            display.innerText.length - 1,
        );
    } else if (char === "CE") {
        display.innerText = "";
    } else if (char === "=") {
        let dis = display.innerHTML.toString();
        console.log(dis);
        let equation = dis
            .split("x")
            .join("*")
            .split("&nbsp;")
            .join(" ")
            .split(" ");
        let order = [];

        let deletions = [];
        // check for braces
        let start = 0;
        let end = 0;
        for (let i = 0; i < equation.length; i++) {
            let symbol = equation[i]

            if (symbol === '')
            {
                deletions.push(i);
                continue
            }

            if (symbol === '(')
            {
                start = i;
            }
            else if (symbol === ')')
            {
                end = i;

                order.push([...equation.slice(start + 1, end)]);
            }
        }

        for (let i = 0; i < deletions.length; i++)
        {
            let deleter = deletions[i];
            equation.splice(deleter, 1);
        }

        console.log(order)

        // check for multiplication and division
        for (let i = 0; i < equation.length; i++) {}

        // check for addition and subtraction
        for (let i = 0; i < equation.length; i++) {}

        console.log(equation);
    } else if (char === "()") {
        display.innerHTML +=
            "&nbsp" + (opening_brace === true ? "(" + "&nbsp" : ")");
        opening_brace = !opening_brace;
    } else {
        display.innerHTML += "&nbsp" + char + "&nbsp";
    }
}

class calc {
    constructor(x, y) {
        this.x = x ?? 0;
        this.y = y ?? 0;
    }

    multi() {
        return this.x * this.y;
    }

    divide() {
        return this.x / this.y;
    }

    add() {
        return this.x + this.y;
    }

    sub() {
        return this.x - this.y;
    }
}

for (let b of buttons) {
    b.addEventListener("click", () => {
        button_press(b.textContent);
    });
}

window.addEventListener("keypress", (e) => {
    button_press(e.key);
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
        button_press("c");
    }
});
