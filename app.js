let outputScreen = document.getElementById("outputScreen");

function display(value) {
    outputScreen.value += value;
}

function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

function Caluclate() {
    outputScreen.value = eval(outputScreen.value);
}

const btn2 = document.getElementById("btn-2")

btn2.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    document.body.style.backgroundColor = btn2
});