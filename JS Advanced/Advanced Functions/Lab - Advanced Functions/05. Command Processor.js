function solution() {
    let str = '';

    return operations = {
        append: function(input){
            str += input;
        },
        removeStart: function(count){
            str = str.slice(count);
        },
        removeEnd: function(count){
            str = str.substring(0, str.length - count);
        },
        print: function(){
            console.log(str);
        },
    };
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();