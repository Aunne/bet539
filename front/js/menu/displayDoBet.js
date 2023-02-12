import check from "./doBet/check.js";
import doAutoChooseNumber from "../doAutoChooseNumber.js";
import diplayAutoBet from "./displayAutoBet.js";

export default function (nickname) {
    $("#result").html("")
    let str = `
    <div>
    <br/>
        遊戲id
        <input type="text" id="gameID" value="${nickname}" disabled><br/><br/>
        期數&nbsp;&nbsp;&nbsp;
        <input type="text" id="phase" value="5" disabled><br/>
        <div id="betDisplay"></div>
    </div>
    `;

    let betDisplay = `
        tip : 個位數號碼只需要輸入個位數就好,不需要補0! <br/>
        正確範例輸入 : 1 7 8 12 19 <br/><br/>
        錯誤範例輸入 : 01 07 08 12 19 <br/><br/>
        <button id="doAutoChooseNumber">自動選號</button>
        <button id="diplayAutoBet">自動下注</button><br/><br/>
        號碼1&nbsp;
        <input type="text" id="number1"><br/>
        號碼2&nbsp;
        <input type="text" id="number2"><br/>
        號碼3&nbsp;
        <input type="text" id="number3"><br/>
        號碼4&nbsp;
        <input type="text" id="number4"><br/>
        號碼5&nbsp;
        <input type="text" id="number5"><br/>
        <button id="DoBet">投注 !</button> 
    `;


    $("#content").html(str);
    $("#betDisplay").html(betDisplay);

    $("#doAutoChooseNumber").click(doAutoChooseNumber);

    $("#diplayAutoBet").click(diplayAutoBet);

    $("#DoBet").click(() => {
        let data = {
            "number1": $("#number1").val(),
            "number2": $("#number2").val(),
            "number3": $("#number3").val(),
            "number4": $("#number4").val(),
            "number5": $("#number5").val(),
            "id": localStorage.getItem("id"),
            "nickname": window.localStorage.getItem("nickname"),
            "phase": $("#phase").val()
        }
        check(data)
    })

}