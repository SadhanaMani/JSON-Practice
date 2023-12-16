const empList=document.getElementById("emp_list");

async function fetchempasyncawait(){
    try{
        const response = await fetch("http://localhost:3000/employees")
        const empdata = await response.json();
        console.log(empdata)
        displayemp(empdata)
    }
    catch(error){
        console.log(error);

    }
}
function fetchEmpThen(){
    try{
        const data = '';
        fetch("http://localhost:3000/employees")
        .then(data => data.json())
        displayemp(data)
    }
    catch(error){
        console.log(error);

    }
}
//fetchempasyncawait();

fetchEmpThen();

function displayemp(employee){
   employee.forEach(emp => {
    const li = document.createElement('li');
    li.textContent = `${emp.id} -  ${emp.name}`;
    empList.appendChild(li);
   });
}