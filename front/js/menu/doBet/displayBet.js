import Request from "../../request.js";

export default function (data) {
    $("#number1").val("")
    $("#number2").val("")
    $("#number3").val("")
    $("#number4").val("")
    $("#number5").val("")

    Request().post('./public/index.php?action=selectBet', Qs.stringify(data))
        .then(res => {
            let list = res['data']['result'];

            let str = `
            <h3> 下注號碼 </h3>
            <table border="2" style ="background-color:rgb(256, 256, 256)">
                <tr>
                    <td style ="background-color:rgb(110, 223, 24)"> id </td>
                    <td style ="background-color:rgb(66, 202, 166)"> 期號 </td>
                    <td> 號碼1 </td> 
                    <td> 號碼2 </td>
                    <td> 號碼3 </td>
                    <td> 號碼4 </td>
                    <td> 號碼5 </td>  
                </tr>
            `;
            list.forEach(element => {
                str += `
                <tr>
                    <td style ="background-color:rgb(110, 223, 24)"> ${element['id']}</td>
                    <td style ="background-color:rgb(66, 202, 166)"> ${element['phase']}</td>
                    <td> ${element['number1']}</td> 
                    <td> ${element['number2']}</td>
                    <td> ${element['number3']}</td>
                    <td> ${element['number4']}</td>
                    <td> ${element['number5']}</td>
                </tr>
                `;
            });

            str += `</table>`;
            $("#result").html(str);
        })
        .catch(err => {
            console.log(err)
        })
}

