import Request from "./request.js";
import app from "./app.js";
import register from "./register.js";

export default function () {
    let loginPage = `
    <center>
    <div>
    <h3>
        請先登入 !
    </h3>
    <div>
        帳號 : <input type="text" id="username" placeholder="請輸入帳號"><br/><br/>
        密碼 : <input type="password" id="password" placeholder="請輸入密碼"><br/><br/>
        <button id="login">登入</button>&nbsp;&nbsp;<button id="regist">註冊</button>
    </div>
    </div>
    </center>
    `;

    $("#root").html(loginPage);

    $("#login").click(() => {
        let data;

        if ($("#username").val() == "" || $("#nickname").val() == "" || $("#password").val() == "") {
            alert("尚有未輸入的值!")
        } else {
            data = {
                "username": $("#username").val(),
                "nickname": $("#nickname").val(),
                "password": sha256($("#password").val())
            }
        }

        Request().post('./public/index.php?action=doLogin', Qs.stringify(data))
            .then(res => {
                if (window.localStorage) { //儲存到 local storage
                    window.localStorage.setItem("jwtToken", res['data']['token']);
                    window.localStorage.setItem("nickname", res['data']['nickname']);
                    window.localStorage.setItem("id", res['data']['id']);
                    //判斷是否登入成功
                    if (res['data']['message'] == 'Access granted') {
                        app(window.localStorage.getItem("nickname"))
                    } else {
                        alert('登入失敗!')
                    }
                }
            })
            .catch(err => {
                console.log(err)
            })
    })

    $("#regist").click(register)
}