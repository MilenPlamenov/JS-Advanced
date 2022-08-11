function solve() {
    let selectMenu = document.getElementById('selectMenuTo');
    let binaryOption = new Option('Binary','binary');
    let hexadecimalOption = new Option('Hexadecimal', 'hexadecimal');
    selectMenu.add(binaryOption, undefined);
    selectMenu.add(hexadecimalOption, undefined);


    const convert = function convert() {
        let numberToConvert = document.getElementById('input').value;
        let selectOption = document.getElementById('selectMenuTo').value;
        let result = '';
    
        if (selectOption === 'binary') {
            result = Number(numberToConvert).toString(2);
        } else if (selectOption === 'hexadecimal') {
            result = Number(numberToConvert).toString(16).toUpperCase();
        }
    
        document.getElementById('result').value = result;
    }

    const btn = document.getElementsByTagName('button')[0];
    btn.onclick = convert;

}