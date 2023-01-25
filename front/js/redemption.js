export default function (num, prize) {
    let str = " ";

    prize.forEach(element => {
        if (element == num) {
            str = "color:red;font-weight:bold;"
        }
    });

    return str
}