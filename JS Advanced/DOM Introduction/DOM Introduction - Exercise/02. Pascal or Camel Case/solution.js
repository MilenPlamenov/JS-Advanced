function solve() {
  let input = document.getElementById('text').value;
  let namingConv = document.getElementById('naming-convention').value;
  let res = document.getElementById('result');
  input = input.split(' ');

  if (namingConv === 'Camel Case') {
    let camelCaseStr = '';
    camelCaseStr += input[0].toLowerCase();
    for (let i = 1; i < input.length;i++) {
      camelCaseStr += input[i].charAt(0).toUpperCase() + input[i].slice(1).toLowerCase();
    }
    res.innerHTML += camelCaseStr;
  } else if (namingConv === 'Pascal Case') {
    let pascalCase = '';
    for (let i = 0;i < input.length;i++) {
      pascalCase += input[i].charAt(0).toUpperCase() + input[i].slice(1).toLowerCase();
    }
    res.innerHTML += pascalCase;
  } else {
    res.innerHTML += 'Error!';
  }
}