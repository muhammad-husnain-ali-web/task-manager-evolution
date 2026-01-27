const taskInput = document.getElementById("taskinput");
const addTaskBtn = document.getElementById("addtaskbtn");
const taskList = document.getElementById("tasklist");

addTaskBtn.addEventListener("click", ()=>{
    const taskText = taskInput.value
    if(taskText !==""){
        console.log("Adding task:", taskText);
        const li = document.createElement("li");
        li.innerHTML = `
            <span><input type="checkbox" name="" id="taskchecked"></span>
            <span id="taskText">${taskText}</span>
            <span><button class="deletetaskbtn">Delete</button></span>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
        const deleteBtn = li.querySelector(".deletetaskbtn");
        deleteBtn.addEventListener("click", ()=>{
            taskList.removeChild(li);
        })
        const checkbox = li.querySelector("#taskchecked");
        checkbox.addEventListener("change", ()=>{
            if(checkbox.checked){
                li.classList.add("text-completed");
            } else {
                li.classList.remove("text-completed");
            }
        })
    }
} )