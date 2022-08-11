function addAndRemove(arr) {
    let initial = [];
    let initialValue = 1;
    for (command of arr) {
        if (command === 'add') {
            initial.push(initialValue);
        } else {
            initial.pop();
        }
        initialValue ++;
    }
    if (initial.length === 0) {
        return 'Empty';
    }
    return initial.join('\n');
}

console.log(addAndRemove(['add', 
'add', 
'add', 
'add']
))

console.log(addAndRemove(['add', 
'add', 
'remove', 
'add', 
'add']))


console.log(addAndRemove(['remove', 
'remove', 
'remove']))