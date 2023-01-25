import doBet from "./doBet.js";
import doAutoChooseNumber from "../../doAutoChooseNumber.js";

export default function (data) {
    let num = [parseInt(data["number1"]), parseInt(data["number2"]), parseInt(data["number3"]), parseInt(data["number4"]), parseInt(data["number5"])]
    num.sort(function (a, b) { return a - b });

    let result = new Set();
    let repeat = false;
    num.forEach(item => {
        if (!result.has(item) && (item <= 20) && (item > 0)) {
            result.add(item)
        } else {
            repeat = true
        }
    })

    if (repeat) {
        alert("輸入的值有誤!請重新輸入一次!")
        return;
    }

    data["number1"] = num[0]
    data["number2"] = num[1]
    data["number3"] = num[2]
    data["number4"] = num[3]
    data["number5"] = num[4]

    $("doAutoChooseNumber").click(doAutoChooseNumber);
    doBet(data)
}