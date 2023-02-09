import Request from "../request.js"

export default function () {
    $("#result").html(" ")
    let data = {
        "nickname": window.localStorage.getItem("nickname")
    }

    Request().post('./public/index.php?action=checkDebt', Qs.stringify(data))
        .then(res => {
            let count = parseInt(res["data"]["result"][0]["count(*)"])
            let str = `
            </br>
            </br>
            <h2 >
                未結帳金額 : ${count * 20} W
            </h2>
            `;
            $("#content").html(str)
        })
        .catch(err => {
            console.log(err)
        })





}