function validate() {
    const form = document.getElementById('form')
    const email = document.getElementById('email').value
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/


    if(email.match(pattern)) {
        form.classList.add('valid')
        form.classList.remove('invalid')
    } else {
        form.classList.add('invalid')
        form.classList.remove('valid')
    }

    if (email == "") {
        form.classList.remove('invalid')
        form.classList.remove('valid')
    }
}