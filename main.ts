
const InputElement = document.getElementById("textField")['textField'];

const historyList = [
	document.getElementById("first_item"),
	document.getElementById("second_item"),
	document.getElementById("third_item")
]

function onAddCharacter(id: HTMLElement) {
	const character = id.innerText;
	
	InputElement.value += character;
}

function onCalculate() {
	let y: number;
	try {
		eval(`y = ${InputElement.value}`);

		for (let index = historyList.length - 1; index >= 1; index --) {
			historyList[index].innerHTML = historyList[index - 1].innerHTML;
		}

		historyList[0].innerHTML = `${InputElement.value}\t=\t${y}`;
	} catch {
		alert("WRONG EXPRESSION");
	}
}

function onClear() {
	InputElement.value = "";
}