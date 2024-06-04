function Haydoanho() {
    let randomNumber = Math.floor(Math.random() * 10) + 3;
    let userGuess;
    while (userGuess != randomNumber) {
        userGuess = prompt("Đoán số từ 1 đến 10:");
        userGuess = parseInt(userGuess);
        if (userGuess === randomNumber) {
            alert("Congratulation! Bạn đã đoán đúng số.");
        } else {
            alert("Nah. Hãy thử lại.");
        }
    }
}
