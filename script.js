function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const messageElement = document.getElementById('messageDisplay');

  let isValid = true;
  let errorMessage = '';

  if (name == "") {
      isValid = false;
      errorMessage = 'Xin hãy nhập tên của bạn.';
  } else if (email== "") {
      isValid = false;
      errorMessage = 'Xin hãy nhập địa chỉ email hợp lệ.';
  } else if (phone=="" && !phone || phone.length !== 10 || isNaN(phone)) {
      isValid = false;
      errorMessage = 'Xin hãy nhập số điện thoại hợp lệ.';
  } else if (message=="") {
      isValid = false;
      errorMessage = 'Xin hãy nhập tin nhắn của bạn.';
  }

  if (isValid) {
      emailjs.send("service_8imlb7l", "template_77oo5hb", {
          name: name,
          email: email,
          phone: phone,
          message: message
      })
      .then(function(response) {
          messageElement.textContent = 'Thông tin liên hệ đã được gửi!';
          messageElement.style.color = 'green';
          
          document.getElementById('contactForm').reset();
      }, function(error) {
          messageElement.textContent = 'Đã xảy ra lỗi khi gửi thông tin liên hệ.';
          messageElement.style.color = 'red';
      });
  } else {
      messageElement.textContent = errorMessage;
      messageElement.style.color = 'red';
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[0-9]{10}$/;
  return re.test(phone);
}
