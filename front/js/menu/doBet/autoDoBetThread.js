import Request from "../../request.js"
import displayBet from "./displayBet.js";

export default function autoDoBetThread() {
    let numArr = getNumArray();

    let data = {
        "number1": numArr[0],
        "number2": numArr[1],
        "number3": numArr[2],
        "number4": numArr[3],
        "number5": numArr[4],
        "id": window.localStorage.getItem("id"),
        "nickname": window.localStorage.getItem("nickname"),
        "phase": $("#phase").val()
    }

    const badCount = parseInt(window.localStorage.getItem("badCount"));
    const betCount = parseInt(window.localStorage.getItem("betCount"));
    const autoChooseCount = parseInt(window.localStorage.getItem("autoChooseCount"));

    if ((badCount < 50) && (betCount < autoChooseCount)) {
        Request().post('./public/index.php?action=doBet', Qs.stringify(data))
            .then(res => {
                if (res['data']['message'] == "新增成功") {
                    window.localStorage.setItem("betCount", betCount + 1);
                    $("#finishedCount").html(`
                        已完成下 ${window.localStorage.getItem("betCount")} 注 !
                    `);
                    autoDoBetThread();
                } else {
                    if (res['data']['message'] == "Repeat Number") {
                        autoDoBetThread();
                    } else {
                        window.localStorage.setItem("badCount", badCount + 1);
                        autoDoBetThread();
                    }
                }
            })
            .catch(err => {
                console.log(err)
            })

    } else {
        if (badCount < 50) {
            alert(`新增完成 ${autoChooseCount}筆下注 !`);
            displayBet(data);
            $("#DoBet").removeAttr("disabled");
            $("#back").removeAttr("disabled");
        }
        if (betCount < autoChooseCount) {
            alert(`網路錯誤! 新增了${betCount}筆下注 !`);
            displayBet(data);
            $("#DoBet").removeAttr("disabled");
            $("#back").removeAttr("disabled");
        }
    }
}

function getNumArray() {
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

    return numArr;
}

function getRandomInt() {
    return Math.floor(Math.random() * 22) + 1;
}