//função para criar nova tarefa
function addTask() {
    //mensagem adicionada 
    let mensagem = "Tarefa adicionada com sucesso!";
    
    let textTask = document.getElementById("inputTask")
    let task = textTask.value
    document.getElementById("mensagem").textContent = mensagem;

    textTask.value = ""

    let listTask = document.getElementById("listTask")
    let newTask = document.createElement("li")

    newTask.textContent = task

    listTask.appendChild(newTask)

}