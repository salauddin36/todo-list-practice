function addtask(){
     
    let task = document.getElementById('task').value;
    
    let table = document.getElementById('table');
    let row1 =document.createElement('tr');
    let col1 = document.createElement('td');
    let col2 = document.createElement('td');
    let col3 = document.createElement('td');

    document.getElementById('task').value = '';

    

    if(task==''){
        alert('Please Enter a Task')
    }else{

        col1.innerText = task;

        col2.innerHTML = '<input type="submit" value="Done Task">';
        col2.addEventListener('click', ()=>{
            col1.classList.toggle('striketaskDone');
        })

        let removebutton = document.createElement('input');
        removebutton.setAttribute('type', 'submit');
        removebutton.setAttribute('value','Remove Task');
        removebutton.setAttribute('onclick', 'removeRow(this)');
        col3.appendChild(removebutton);

        row1.appendChild(col1);
        row1.appendChild(col2);
        row1.appendChild(col3);
        table.appendChild(row1);
        }
}

// this function should be outside the above function
function removeRow(e){
    let tab =document.getElementById('table');
    tab.deleteRow(e.parentNode.parentNode.rowIndex);
}