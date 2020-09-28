const task = document.getElementById('task');
const taskCounter = document.getElementById('taskCounter');
const taskContainer = document.getElementById('taskContainer');
const arr = [];
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', function(){
    if (task.value == '') {
        alert('please add some task');
        return;
    }
    arr.push(task.value);
    task.value=""
    taskContainer.innerHTML = "";
    taskCounter.innerHTML = `${arr.length} Tasks:`
    for(let i = 0; i < arr.length; i++)
    {
        var addTask = document.createElement("li");
        addTask.innerHTML =`<input type="checkbox" id="checkbox${i}" class="checkbox"/>
                            <label for="checkbox${i}">${arr[i]}</label>
                            <i class="far fa-trash-alt delete-img" onclick="deleteTask(${i})"></i>
                            `;
        taskContainer.appendChild(addTask)
    }   
    
});

function deleteTask(i) {
  arr.splice(i,1);
  taskContainer.innerHTML = "";
  taskCounter.innerHTML = `${arr.length} Tasks:`
  for(let i = 0; i < arr.length; i++)
    {
        var addTask = document.createElement("li");
        addTask.innerHTML = `<input type="checkbox" id="checkbox${i}" class="checkbox"/>
                            <label for="checkbox${i}">${arr[i]}</label>
                            <i class="far fa-trash-alt delete-img" onclick="deleteTask(${i})"></i>
                            `;
        taskContainer.appendChild(addTask);
    } 
}



