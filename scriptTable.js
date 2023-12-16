async function fetchEmployee(){
    try{
        const response = await fetch('http://localhost:3000/employees');
        const empDetails = await response.json();
        return empDetails;
    }
    catch(err){
        console.log(err)
    }
}

async function generateTable(){
   const jsonData = await fetchEmployee();
    const tableContainer = document.getElementById('table-container');

    const table = document.createElement('table');
    table.id='Dtable'

    const thead = document.createElement('thead');
    const headerRows = document.createElement('tr');
    const headers = ['ID', 'Name','Position'];

    headers.forEach(HeaderText => {
        const th = document.createElement('th');
        th.textContent = HeaderText;
        headerRows.appendChild(th);
    })
thead.appendChild(headerRows);
table.appendChild(thead)

// create body

const tbody = document.createElement('tbody');


jsonData.forEach(empData =>{
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    td1.textContent = empData.id;
    td2.textContent = empData.name;
    td3.textContent = empData.position;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr)
})

table.appendChild(tbody)
tableContainer.appendChild(table);


}

generateTable();