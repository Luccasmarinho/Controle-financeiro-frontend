const formularioLogin = document.querySelector(".formulario");
const inputEmail = document.querySelector("[type=email]");
const inputSenha = document.querySelector("[type=password]");
const erro = document.querySelector(".formulario__erro");
const erroText = document.querySelector(".erro__text");

const a = [
    "O campo senha não pode ficar vazio.",
    "O campo email não pode ficar vazio.",
    "O campo senha deve ter no mínimo 8 caracteres.",
    "O campo senha deve ter no máximo 50 caracteres.",
    "Email não cadastrado.",
    "Senha incorreta. Tente novamente.",
    "Digite um email válido."
]

function validacaoForm(mensagem) {
    if (!inputEmail.value && !inputSenha.value) {
        erro.style.display = "flex"
        erroText.textContent = "Preencha os campos E-mail e Senha"
        inputEmail.style.border = "1px solid red"
        inputSenha.style.border = "1px solid red"
        return
    }

    if (mensagem == "O campo email não pode ficar vazio.") {
        erro.style.display = "flex"
        erroText.textContent = mensagem
        inputEmail.style.border = "1px solid red"
    } else {
        inputEmail.style.border = "1px solid #3333336b"
    }

    if (mensagem == "O campo senha não pode ficar vazio.") {
        erro.style.display = "flex"
        erroText.textContent = mensagem
        inputSenha.style.border = "1px solid red"
    } else {
        inputSenha.style.border = "1px solid #3333336b"
    }


    if (mensagem == "O campo senha deve ter no mínimo 8 caracteres.") {
        erro.style.display = "flex"
        erroText.textContent = mensagem
        inputSenha.style.border = "1px solid red"
    }

    if (mensagem == "O campo senha deve ter no máximo 50 caracteres.") {
        erro.style.display = "flex"
        erroText.textContent = mensagem
        inputSenha.style.border = "1px solid red"
    }


    if (mensagem == "Email não cadastrado." || mensagem == "Senha incorreta. Tente novamente.") {
        erro.style.display = "flex"
        erroText.textContent = "E-mail ou senha incorretos."
        inputEmail.style.border = "1px solid red"
        inputSenha.style.border = "1px solid red"
    }

    if (mensagem == "Digite um email válido.") {
        erro.style.display = "flex"
        erroText.textContent = mensagem
        inputEmail.style.border = "1px solid red"
    }


}

export { validacaoForm }