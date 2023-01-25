import displayBet from "./doBet/displayBet.js"

export default function () {
    $("#result").html("")
    let str = `
    </br>
    想查詢的下注號碼期號&nbsp;
        <input type="text" id="phase"><br/>
        <button id="doSelect">查詢 !</button>
    `;
    $("#content").html(str)

    $("#doSelect").click(() => {
        let data = {
            "phase": $("#phase").val(),
            "nickname": window.localStorage.getItem("nickname")
        }
        displayBet(data)
    })
}