function sumTable() {
    let rows = document.querySelectorAll('table, tr');
    let sum = 0;
    for (let i = 2; i < rows.length - 1; i ++) {
        sum += Number(rows[i].lastElementChild.innerHTML);
    }
    document.getElementById('sum').innerHTML = sum;
}