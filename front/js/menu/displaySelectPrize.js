import doSelectPrize from "../doSelectPrize.js"

export default function () {
    
    let str = `
    </br>
    想查詢的中獎號碼期號&nbsp;
        <input type="text" id="phase"><br/>
        <button id="doSelectPrize">查詢 !</button>
    `;

    $("#content").html(str)
    $("#result").html(" ")

    $("#doSelectPrize").click(doSelectPrize)
}