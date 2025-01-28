//função para criar nova tarefa
function addTask() {

    let textTask = document.getElementById("inputTask")
    let task = textTask.value

    if (task == "") {
        let mensageError = "Digite uma tarefa para adiciona-lá na lista"
        document.getElementById("mensage").textContent = mensageError;
    }

    let listTask = document.getElementById("listTask")
    let newTask = document.createElement("li")
    newTask.textContent = task
    listTask.appendChild(newTask)

    let mensageSucess = "Tarefa adicionada com sucesso!";
    document.getElementById("mensage").textContent = mensageSucess;

    textTask.value = ""


}