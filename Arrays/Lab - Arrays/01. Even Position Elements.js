function evenPosElements(arr) {
    return arr.filter((element, index, array) => index % 2 === 0).join(' ');
}

arr = ['20', '30', '40', '50', '60'];

console.log(evenPosElements(arr));