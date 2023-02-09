import displayDoBet from "./menu/displayDoBet.js";
import displaySelectBet from "./menu/displaySelectBet.js";
import displaySelectPrize from "./menu/displaySelectPrize.js";
import displayAutomaticRedemption from "./menu/displayAutomaticRedemption.js";
import displayDebt from "./menu/displayDebt.js";
import displayRule from "./menu/displayRule.js";

export default function (nickname) {
    const startPage = `
    <div>
    <div>
        <h3>☆&nbsp;&nbsp;歡迎回來&nbsp;&nbsp;${nickname}&nbsp;&nbsp;☆&nbsp;&nbsp;<button id="logout">登出</button>
        </h3>
        
    </div>

    <div style="display: flex;width: 100%;height: 270px">
        <div style="width: 60%;">
        <button id="displayDoBet">下注</button>
            <button id="displaySelectBet">查詢已下注號碼</button>
            <button id="displaySelectPrize">查詢中獎號碼</button>
            <button id="displayAutomaticRedemption">自動兌獎</button>
            <button id="displayDebt"> 查看未結帳金額 </button>
            <button id="displayRule"> 玩法規則 </button>
            <div style="height:200%">
                <div id="content"></div>
            </div>
        </div>
        <div style="width=40%">
            <div id="result">
            </div>
        </div>
    </div>
</div>
    `;

    $("#root").html(startPage);
    // 顯示初始畫面

    $("#displayDoBet").click(() => displayDoBet(nickname));
    // 顯示下注畫面

    $("#displaySelectBet").click(displaySelectBet);
    // 顯示查詢已下注號碼畫面

    $("#displaySelectPrize").click(displaySelectPrize);
    // 顯示查詢中獎號碼畫面

    $("#displayAutomaticRedemption").click(displayAutomaticRedemption);
    // 顯示自動兌獎畫面

    $("#displayDebt").click(displayDebt);
    // 顯示未結帳金額畫面

    $("#displayRule").click(displayRule);
    // 顯示玩法規則畫面


    $("#logout").click(() => {
        window.localStorage.removeItem("jwtToken");
        window.localStorage.removeItem("nickname");
        window.localStorage.removeItem("id");
        location.reload();
    })
}
