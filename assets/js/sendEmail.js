function sendMail(contactForm) {
    emailjs.send("service_7czahvg", "template_v9e3f7f", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            return false;
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    
}