//função para criar nova tarefa
function addTask() {
    
    //let por conta de reatribuir valores
    const textTask = document.getElementById("inputTask")
    //pega o valor de texto inserido no input e defini em task, trim() não permite inserir espaços no inicio e fim do text
    let task = textTask.value.trim()
    //const definida por conta de não alterar valor
    const mensageAlert = document.getElementById("mensage")

    //if = SE e else = SE NAO 
    if (task == "") {
        //mensagem de erro
        let mensageError = "Digite uma tarefa para adiciona-lá na lista!"
        mensageAlert.textContent = mensageError;
    } else {
        //mensagem de sucesso
        let mensageSucess = "Tarefa adicionada com sucesso!";
        mensageAlert.textContent = mensageSucess;
        //cria um item (li) e inserir na (lista ul)
        const listTask = document.getElementById("listTask")
        let newTask = document.createElement("li")
        newTask.textContent = task
        listTask.appendChild(newTask)
    }

    //limpa o input do user 
    textTask.value = ""

}