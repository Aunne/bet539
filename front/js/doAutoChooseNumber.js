export default function () {
    let numArr = [];

    for (let i = 0; i < 5; i++) {
        numArr[i] = getRandomInt()
        for (let j = 0; j < i; j++) {
            if (numArr[i] == numArr[j]) {
                i--
            }
        }
    }
    numArr.sort(function (a, b) { return a - b });

    $("#number1").val(numArr[0]);
    $("#number2").val(numArr[1]);
    $("#number3").val(numArr[2]);
    $("#number4").val(numArr[3]);
    $("#number5").val(numArr[4]);
}

function getRandomInt() {
    return Math.floor(Math.random() * 20) + 1;
}