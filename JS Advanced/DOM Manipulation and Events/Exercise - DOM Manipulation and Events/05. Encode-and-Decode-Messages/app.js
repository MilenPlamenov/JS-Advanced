function encodeAndDecodeMessages() {
    let textAr = document.getElementsByTagName('textarea')[0];
    let textArTwo = document.getElementsByTagName('textarea')[1];
    document.getElementsByTagName('button')[0].addEventListener('click', () => {
        let textToEncode = textAr.value;
        let newText = '';
        [...textToEncode].forEach(([el, index]) => {
            let encodedChar = String.fromCharCode(el.charCodeAt(index) + 1);
            newText += encodedChar;
        });
        textArTwo.value = newText;
        textAr.value = '';
    });

    document.getElementsByTagName('button')[1].addEventListener('click', () => {
        let textToDecode = textArTwo.value;
        let newText = '';
        [...textToDecode].forEach(([el, index]) => {
            let decodedChar = String.fromCharCode(el.charCodeAt(index) - 1);
            newText += decodedChar;
        });
        textArTwo.value = newText;
    });
}