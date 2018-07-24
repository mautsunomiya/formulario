let nome  = document.querySelector ("#nome");
let sobrenome = document.querySelector ("#sobrenome");
let email = document.querySelector ("#email");
let senha = document.querySelector ("#senha");
let botao = document.querySelector ("#botao");
let modalPositivo = document.querySelector ("#modalPositivo");
let modalNegativo = document.querySelector ("#modalNegativo");



function validarTudo(){
    var resultado = email.value;
    let arroba = email.value.indexOf("@")
    if (nome.value == "" || sobrenome.value =="" || email.value == "" || senha.value == ""){
        alert("Preencha todos os campos");
        return error;
    } else if(arroba == -1){
        alert("Digite um E-mail válido");
        return error;
    } else if(senha.value.length <= 6){
        alert("Sua senha deve ter no mínimo 6 caracteres");
        return error;
    }else{
        alert("Cadastro enviado com sucesso")
        return ""
    
    }
}

function openModal(){
    
}
botao.addEventListener ("click", openModal)
botao.addEventListener ("click", validarTudo);
