import autoDoBetThread from "./doBet/autoDoBetThread.js";
import displayDoBet from "./displayDoBet.js";

export default function () {
    let str = `
    <div>
        <br/><br/><br/>
        <div> tip: 下注的數量過多，可能會造成卡頓，請耐心等待 ! </div><br/><br/>
        <div id="finishedCount"></div><br/><br/>
        請輸入想要下幾注<input type="text" id="autoChooseCount" value="1"><br/>
        <div id="operate">
            <button id="DoBet">投注 !</button> &nbsp;&nbsp; <button id="back">返回 </button>
        </div>
    </div>`;

    const nickname = $("#gameID").val()

    $("#betDisplay").html(str);

    $("#back").click(() => displayDoBet(nickname));

    $("#DoBet").click(() => {
        $("#DoBet").click(() => {
            $("#operate").html(`
            <button id="DoBet" disabled="disabled">投注 !</button> &nbsp;&nbsp; <button id="back" disabled="disabled">返回 </button>
            `);
        });

        const autoChooseCount = parseInt($("#autoChooseCount").val())

        if (autoChooseCount > 0) {
            window.localStorage.setItem("autoChooseCount", autoChooseCount)
            window.localStorage.setItem("badCount", 0);
            window.localStorage.setItem("betCount", 0);
            autoDoBetThread();
        } else {
            alert("輸入有誤!")
        }


    })

}