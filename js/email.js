let formName = document.getElementById('fromName');
let formEmail = document.getElementById('email');
let messsage = document.getElementById('message');
const contactFormContent = document.getElementById('contactFormContent');
const h2Element = document.getElementById('contact-h2');

// function testHtml() {
//     h2Element.innerHTML = '<span aria-hidden="true">🥳</span> Message sent';
//     contactFormContent.innerHTML = '<p class="mb-5 mt-2">Thanks! I\'ll aim to reply to you within 2 working days.</p>';
// }

// function validateForm() {
//     if (formName === "") {
//         errorMsgName.innerHTML = `Please enter your full name`;
//         errorMsgName.style.color = '#FF0000';
//     } else if (formEmail === "") {
//         errorMsgEmail.innerHTML = `Please enter your full email address`;
//         errorMsgEmail.style.color = '#FF0000';
//     } else if (messsage === "") {
//         errorMsgMsg.innerHTML = `Please enter a message`;
//         errorMsgMsg.style.color = '#FF0000';
//     } else {
//         // Calls to sendEmail function that uses Email JS to sent client email to site owner
//         sendEmail();
//     }
//     return false;
// }


function submitForm() {
    emailjs.init('u7XdaGtaG2V5fZCSw');
    emailjs.send('service_7ovfolc', 'template_2xyjbr5', {
       'from_name': formName.value,
       'from_email': formEmail.value,
       'message': messsage.value
    }).then(
        function (response) {
            // Success message
            h2Element.innerHTML = '<span aria-hidden="true">🥳</span> Message sent';
            contactFormContent.innerHTML = "<h3 class='mb-5 mt-2 thanks-message'>Thanks for getting in touch! I'll aim to reply to you within 2 working days.</h3>";
       },
        function (error) {
            // Error message
           alert('Whoops! Message has failed. Please send message to taragulwell@gmail.com');
           console.log(error);
       },
    );
    return false;
}