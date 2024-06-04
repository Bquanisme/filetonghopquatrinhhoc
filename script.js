function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phonenumber = document.getElementById('phonenumber').value;
  const message = document.getElementById('message').value;
  
  
  console.log(`Name: ${name}, Email: ${email}, Phonenumber: ${phonenumber}, Message: ${message}`);
  
  alert('Tin nhắn của bạn đã được gửi!');
  this.reset();
});
