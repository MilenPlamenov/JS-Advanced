function solve() {
  let input = document.getElementById('input').value;
  let res = document.getElementById('output');
  input = input.split('.').filter((el) => el != "" && el.length > 1);
  let sentances = input.length;
  let paragraphsNeeded = Math.ceil(sentances / 3);
  let everyNth = 1;
  let currStateOfPar = '<p>';
  if (input.length <= 3) {
    for (el of input) {
      currStateOfPar += el + '.';
    }
    currStateOfPar += '</p>';
    res.innerHTML += currStateOfPar;
  } else {
  input.forEach((element, index) => {
    currStateOfPar += element + '.';
    everyNth ++;
    if (everyNth % paragraphsNeeded === 0 || index === input.length - 1) {
      currStateOfPar += '</p>';
      res.innerHTML += currStateOfPar;
      everyNth = 0;
      currStateOfPar = '<p>';
    }
  });
}
}