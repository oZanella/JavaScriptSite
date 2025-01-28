//função para criar nova tarefa
function addTask() {
    //mensagem adicionada 
    let mensagem = "Tarefa adicionada com sucesso!";
    //adicionado texto no campo com id=inputTask
    let textTask = document.getElementById("inputTask")
    //defiido o texto em task usando o get por id=mensagem
    let task = textTask.value
    document.getElementById("mensagem").textContent = mensagem;
    //limpa o campo depois de informado o valor
    textTask.value = ""
    //apresenta o valor do id na listask
    let listTask = document.getElementById("listTask")
    //cria um novo elemnto com element=li
    let newTask = document.createElement("li")
    //nova tarefa contendo o texto que foi definido em task
    newTask.textContent = task
    //Adicionando o novo item à lista
    listTask.appendChild(newTask)
}