import Request from "../../request.js"
import displayBet from "./displayBet.js"
import doAutoChooseNumber from "../../doAutoChooseNumber.js";

export default function (data) {
    $("doAutoChooseNumber").click(doAutoChooseNumber);
    Request().post('./public/index.php?action=doBet', Qs.stringify(data))
        .then(res => {
            if (res['data']['message'] == "新增成功") {
                alert("下注成功 !")
                let checkData = {
                    "nickname": window.localStorage.getItem("nickname"),
                    "phase": data['phase']
                }
                
                displayBet(data=checkData)
            } else {
                if (res['data']['message'] == "Repeat Number") {
                    alert("重複下注! 請換一組號碼 !")
                } else {
                    alert("下注失敗! 請再試一次 !")
                    console.log(res)
                }
            }
        })
        .catch(err => {
            console.log(err)
        })
}