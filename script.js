function sendMail(){

    let parms={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value,

    }
    emailjs.send("service_js1vpa1","template_cj3b8sd",parms).then(alert("Email Sent ! "))
}