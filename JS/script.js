//função para criar nova tarefa
let tasks = []

function addTask() {

    const textTask = document.getElementById("inputTask")
    let task = textTask.value.trim()

    const messageAlert = document.getElementById("message")

    //if = SE e else = SE NAO 
    if (task == "") {
        let messageError = "Digite uma tarefa para adiciona-lá na lista!"
        messageAlert.textContent = messageError;
    } else {
        let messageSucess = "Tarefa adicionada com sucesso!";
        messageAlert.textContent = messageSucess;

        tasks.push(task)
        rendertask()
    }
    textTask.value = ""
}

function rendertask() {
    const listTask = document.getElementById("listTask")
    listTask .innerHTML = ""

    //i = indice
    
    for (let i = 0; i < tasks.length; i++){
        let newTask = document.createElement("li")
        newTask.textContent = tasks[i]
        
        let buttonRemove = document.createElement("button")
        buttonRemove.className = "remove"
        buttonRemove.textContent = "Remover"
        buttonRemove.onclick = () => removeTask(i)           //mesma função da estrutura de function
        
        newTask.appendChild(buttonRemove)
        listTask.appendChild(newTask)
    }
}

function removeTask (i) {
    tasks.splice(i, 1)
    rendertask()
}