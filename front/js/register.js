import login from "./login.js";
import doRegist from "./doRegist.js";

export default function () {
    let str = `
        <center>
        <h3 style="color:blue">註冊帳戶</h3>
        登入帳號&nbsp;
        <input type="text" id="username"><br/><br/>
        遊戲ＩＤ&nbsp;
        <input type="text" id="nickname"><br/><br/>
        登入密碼&nbsp;
        <input type="text" id="password"><br/><br/>
        <button id="doRegist">確定 </button>&nbsp;&nbsp;<button id="back">返回</button>
        </center>
    `;

    $("#root").html(str)

    $("#doRegist").click(doRegist)

    $("#back").click(login)

}