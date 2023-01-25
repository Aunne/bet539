import Request from "./request.js";

export default function () {

    let data;

    if ( $("#username").val() == "" || $("#nickname").val() == "" || $("#password").val() == "") {
        alert("尚有未輸入的值!")
    } else {
        data = {
            'username': $("#username").val(),
            'nickname': $("#nickname").val(),
            'password': sha256($("#password").val())
        }

        Request().post('./public/index.php?action=register', Qs.stringify(data))
            .then(res => {
                if (res["data"] == "此用戶已存在") {
                    alert("此帳戶已註冊過了!")
                } else {
                    if (res["data"]["message"] == "新增成功") {
                        alert("恭喜註冊成功!")
                        location.reload();
                    } else {
                        alert("帳戶註冊失敗!")
                    }
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
}