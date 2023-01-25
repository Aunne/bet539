import handleRedemption from "./handleRedemption.js";
import Request from "./request.js";

export default function () {
    let data = {
        "phase": $("#phase").val(),
        "nickname": window.localStorage.getItem("nickname")
    }

    let prize;
    let userNumber;

    console.log(data);

    Request().post('./public/index.php?action=doSelectPrize', Qs.stringify(data))
        .then(res => {
            prize = res["data"]["result"][0]
            window.localStorage.setItem("phaseRedemption", prize["phase"])
            window.localStorage.setItem("number1", prize["number1"])
            window.localStorage.setItem("number2", prize["number2"])
            window.localStorage.setItem("number3", prize["number3"])
            window.localStorage.setItem("number4", prize["number4"])
            window.localStorage.setItem("number5", prize["number5"])
        })
        .catch(err => {
            console.log(err)
        })

    Request().post('./public/index.php?action=selectBet', Qs.stringify(data))
        .then(res => {
            prize = [
                window.localStorage.getItem("number1"),
                window.localStorage.getItem("number2"),
                window.localStorage.getItem("number3"),
                window.localStorage.getItem("number4"),
                window.localStorage.getItem("number5")
            ]
            userNumber = res["data"]["result"]
            handleRedemption(userNumber, prize, window.localStorage.getItem("phaseRedemption"))
        })
        .catch(err => {
            console.log(err)
        })
}