// template_y8sma54 
// service_s4tl5r6
// tq5yOef37QZrOgoN3

function contact() {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
      emailjs
      .sendForm(
         'service_s4tl5r6',
         'template_y8sma54',
          event.target,
         'tq5yOef37QZrOgoN3'
           ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
          }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on joyantioho@gmail.com"
           );
         })
       }
