function solve(arr) {
    html = '';
    html += '<table>\n';
    toJson = JSON.parse(arr);
    html += '   <tr>'
    let takeData = toJson[0];
    for (el of Object.keys(takeData)) {
        html += `<th>${el}</th>`.trim()
    }
    html += '</tr>'
    for (let i = 0; i< toJson.length; i++) {
        html += '\n   <tr>'
        let curr = toJson[i];
        for (el of Object.values(curr)) {
            html += `<td>${el}</td>`
        }
        html += '</tr>'
    }
    html += '\n</table>'
    return html;
}


console.log(solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`))



console.log(solve(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`))