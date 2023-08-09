function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "sender@email_address.com",
    Password: "Enter your password",
    To: "first_username@gmail.com, second_username@gmail.com",
    From: "sender@email_address.com",
    Subject: "Sending Email using javascript",
    html: "<h1>GeeksforGeeks</h1><p>A computer science portal</p>",
  }).then(function (message) {
    alert("Mail has been sent successfully");
  });
}
