document.addEventListener("DOMContentLoaded", function() {
    const days = document.getElementById("day");
    const months = document.getElementById("month");
    const years = document.getElementById("year");

    for (let i = 1; i <= 31; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        days.appendChild(option);
    }

    for (let i = 1; i <= 12; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        months.appendChild(option);
    }

    for (let i = 1900; i <= new Date().getFullYear(); i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        years.appendChild(option);
    }

    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        const lastName = document.getElementById("lastName").value;
        const firstName = document.getElementById("firstName").value;
        const phone = document.getElementById("phone").value;

        if (!lastName || !firstName || !phone || phone.length !== 10 || isNaN(phone)) {
            alert("Kiểm tra người dùng chưa nhập vào họ, tên, số điện thoại (phải là 1 số và độ dài là 10)");
            event.preventDefault();
        }
        else{
            alert('Tin nhắn của bạn đã được gửi!');
        }
    });
});
