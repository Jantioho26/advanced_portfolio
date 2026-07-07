



function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
    .sendForm(
        'service_s4tl5r6',
        'template_m31dp54',
        event.target,
        'user_tq5yOef37QZrOgoN3'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        console.log("EmailJS. error:", error)
    })
}


