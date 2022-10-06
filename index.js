const form = document.contactForm

form.addEventListener("submit", submitForm)

function submitForm(e) {
    e.preventDefault()
    
    let senderName = form.name
    let email = form.email
    let message = form.message

    const params = {
        from_name : senderName.value,
        email_id : email.value,
        message : message.value
    }
    
    //using emailjs to send messages from contact form
    emailjs.send("service_fteuuzv", "template_1o88kv3", params)
    .then(function() {
        alert("Email sent successfully!")
        clearForm()
    }, function(error) {
        console.log('FAILED...', error);
        alert("Email failed to send!")
    })

    // clear inputs after submission
    function clearForm() {
        senderName.value = "",
        email.value = "",
        message.value = ""
    }
}

// load page at the top when users refresh (for scroll)
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// toggles mini navigation menu
function toggle() {
   const menu = document.getElementById("toggle-menu")
   menu.style.display == "none" ? menu.style.display="block" :
   menu.style.display = "none"
}
