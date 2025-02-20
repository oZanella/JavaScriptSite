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
    let i = 0
    for (i; i < tasks.length; i++){
        let newTask = document.createElement("li")
        newTask.textContent = tasks[i]
        listTask.appendChild(newTask)
    }

}