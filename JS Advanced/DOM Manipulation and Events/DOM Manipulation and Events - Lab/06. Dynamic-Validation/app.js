function validate() {
    let input = document.getElementById('email');
    let regExp = /([a-z]{1,})@([a-z]{1,})\.([a-z]{1,})/gm;

    input.addEventListener('change', (event) => {
        if (!event.target.value.match(regExp)) {
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        }
    })  
}