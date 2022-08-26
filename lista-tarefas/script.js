const inputTarefa = document.getElementById("tarefanova")

function adicionarTarefa() {
    const item= document.createElement("li")
    
    item.innerHTML = `<li>
        <span> ${inputTarefa.value}  </span> 
        <button class="excluir"> X </button>
    
    </li>`;

        const lista = document.getElementById("lista");

        lista.appendChild(item); 

        inputTarefa.value=""
}   

const botao = document.querySelector(".addbtn")
botao.addEventListener("click", adicionarTarefa)


function limparLista(){
    const lista = document.getElementById("lista");
    lista.innerHTML= ""
}

const delbotao = document.querySelector(".clearbt")
delbotao.addEventListener("click", limparLista)


