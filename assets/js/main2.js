function sendEmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

const serviceID = "service_ih3z8k6";
const templateID = "template_bmj1wqh";

emailjs
  .send(serviceID, templateID, params)
  .then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("your email has been sent successfully!");
  })
  .catch((err) => console.log(err));



}



