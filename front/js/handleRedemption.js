import numberOfPrizesWon from "./numberOfPrizesWon.js";
import redemption from "./redemption.js";

export default function (userNumber, prize, phase) {

    let str = `
    <h3> 中獎號碼 </h3>&nbsp;&nbsp;
    <table border="2" style="background-color:rgb(256, 256, 256)">
        <tr>
            <td style="background-color:rgb(66, 202, 166)"> 期號 </td>
            <td> 號碼1 </td>
            <td> 號碼2 </td>
            <td> 號碼3 </td>
            <td> 號碼4 </td>
            <td> 號碼5 </td>
        </tr>
    
        <tr>
            <td style="background-color:rgb(66, 202, 166)"> ${phase}</td>
            <td> ${prize[0]}</td>
            <td> ${prize[1]}</td>
            <td> ${prize[2]}</td>
            <td> ${prize[3]}</td>
            <td> ${prize[4]}</td>
        </tr>
    </table></br></br></br>
            
            <h3 style="color:white">
                中獎總金額 : &nbsp; <div id="totalWinMoney"></div>
                中3號數量 : &nbsp; <div id="total_3_Count"></div>
                中4號數量 : &nbsp; <div id="total_4_Count"></div>
                中5號數量 : &nbsp; <div id="total_5_Count"></div>
            </h3>
            <h3 style="color:white"> 中獎下注號碼 </h3>
            <table border="2" style ="background-color:rgb(256, 256, 256)">
                <tr>
                <td style ="background-color:rgb(110, 223, 24)"> id </td>
                    <td style ="background-color:rgb(66, 202, 166)"> 期號 </td>
                    <td> 號碼1 </td> 
                    <td> 號碼2 </td>
                    <td> 號碼3 </td>
                    <td> 號碼4 </td>
                    <td> 號碼5 </td>
                    <td> 中獎號碼個數 </td>  
                </tr>
            `;
    let totalWinMoney = 0;
    let countOfPrizesWon;
    let count = {
        "3": 0,
        "4": 0,
        "5": 0
    };

    userNumber.forEach(element => {
        countOfPrizesWon = numberOfPrizesWon(element, prize);

        if (countOfPrizesWon >= 3) {
            switch (countOfPrizesWon) {
                case 3:
                    totalWinMoney += 50;
                    count["3"] += 1;
                    break;
                case 4:
                    totalWinMoney += 1000;
                    count["4"] += 1;
                    break;
                case 5:
                    totalWinMoney += 70000;
                    count["5"] += 1;
                    break;
                default:
                    break;
            }


            str += `
                <tr>
                    <td style ="background-color:rgb(110, 223, 24)"> ${element['id']}</td>
                    <td style ="background-color:rgb(66, 202, 166)"> ${element['phase']}</td>
                    <td style="${redemption(element['number1'], prize)}"> ${element['number1']}</td> 
                    <td style="${redemption(element['number2'], prize)}"> ${element['number2']}</td>
                    <td style="${redemption(element['number3'], prize)}"> ${element['number3']}</td>
                    <td style="${redemption(element['number4'], prize)}"> ${element['number4']}</td>
                    <td style="${redemption(element['number5'], prize)}"> ${element['number5']}</td>
                    <td style="text-align:center;"> ${numberOfPrizesWon(element, prize)} </td>
                </tr>
                `;
        }

    });
    
    str += `</table>`;
    $("#result").html(str);
    $("#totalWinMoney").html(` ${totalWinMoney} W`);
    $("#total_3_Count").html(` ${count["3"]} 個`);
    $("#total_4_Count").html(` ${count["4"]} 個`);
    $("#total_5_Count").html(` ${count["5"]} 個`);
}