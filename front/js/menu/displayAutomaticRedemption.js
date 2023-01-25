import doAutomaticRedemption from "../doAutomaticRedemption.js";

export default function () {

    let str = `
    </br>
    想查詢的對獎期號&nbsp;
        <input type="text" id="phase"><br/>
        <button id="doAutomaticRedemption">查詢 !</button>
    `;

    $("#content").html(str);
    $("#result").html("");

    $("#doAutomaticRedemption").click(doAutomaticRedemption);
}