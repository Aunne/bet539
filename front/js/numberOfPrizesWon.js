export default function (userNumber, prize) {
    let sum = 0;

    for (let i = 1; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            (userNumber[`number${i}`] == prize[j]) ? sum += 1 : sum += 0
        }
    }
    
    return sum
}