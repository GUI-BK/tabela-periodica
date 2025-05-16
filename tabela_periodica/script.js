fetch('./dados.json').then(res => res.json()).then(data => {
    console.log(data);
    const table = document.getElementById('table');
const anular = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17
];

for(let i = 1; i <= 7; i++){
    let row = document.createElement('tr');
    row.id = 'period' + i;
    table.appendChild(row);
    for( let j = 1; j <= 18; j++){
        let col = document.createElement('td');
        col.innerHTML = j;
        row.appendChild(col);
    }
}

})
