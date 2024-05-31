function sendMail(contactForm) {
    emailjs.send("service_7czahvg", "template_v9e3f7f", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            document.querySelector('#thanks-message').style.display = 'block';
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}