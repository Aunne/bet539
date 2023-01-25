import login from "./login.js";
import Request from "./Request.js";
import app from "./app.js";

$(document).ready(function () {
    if (window.localStorage) {
        Request().post("./public/index.php")
            .then(function (res) {
                //判斷是否登入成功
                if (res['data']['message'] == 'Access granted') {
                    app(window.localStorage.getItem("nickname"))
                } else {
                    login()
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    }
});
