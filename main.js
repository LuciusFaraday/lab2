var InputElement = document.getElementById("textField")['textField'];
var historyList = [
    document.getElementById("first_item"),
    document.getElementById("second_item"),
    document.getElementById("third_item")
];
function onAddCharacter(id) {
    var character = id.innerText;
    InputElement.value += character;
}
function onCalculate() {
    var y;
    try {
        eval("y = " + InputElement.value);
        for (var index = historyList.length - 1; index >= 1; index--) {
            historyList[index].innerHTML = historyList[index - 1].innerHTML;
        }
        historyList[0].innerHTML = InputElement.value + "\t=\t" + y;
    }
    catch (_a) {
        alert("WRONG EXPRESSION");
    }
}
function onClear() {
    InputElement.value = "";
}
