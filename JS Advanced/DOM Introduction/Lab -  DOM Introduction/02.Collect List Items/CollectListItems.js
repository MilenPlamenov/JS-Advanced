function extractText() {
    let liElements = document.getElementsByTagName('li');
    let textAr = document.getElementById('result');
    for (el of liElements) {
        textAr.innerHTML += el.innerHTML + '\n';
    }
}