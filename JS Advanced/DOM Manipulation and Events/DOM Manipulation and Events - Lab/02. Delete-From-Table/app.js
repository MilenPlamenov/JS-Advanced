function deleteByEmail() {
    let input = document.getElementsByTagName('input')[0].value;
    let tableElements = Array.from(document.querySelectorAll('tbody tr'));
    let res = 'Not found.';
    tableElements.forEach(el => {
        console.log(el.innerHTML)
        if (el.lastElementChild.innerHTML === input) {
            res = 'Deleted.';
            el.remove();
        }
    })
    document.getElementById('result').innerHTML = res;
}