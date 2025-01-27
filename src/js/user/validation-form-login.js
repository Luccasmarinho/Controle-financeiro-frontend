const inputEmail = document.querySelector("[type=email]");
const inputSenha = document.querySelector("[type=password]");
const erro = document.querySelector(".formulario__erro");
const erroText = document.querySelector(".erro__text");

const inputs = ["email", "senha"]

function validacaoFormLogin(mensagem) {
    for (let i = 0; i < inputs.length; i++) {
        if (mensagem.toLowerCase().includes(inputs[i])) {
            if (inputs[i] == "email") {
                erro.style.display = "flex"
                erroText.textContent = mensagem
                inputEmail.style.border = "1px solid red"
            } else {
                inputEmail.style.border = "1px solid #3333336b"
            }

            if (inputs[i] == "senha") {
                erro.style.display = "flex"
                erroText.textContent = mensagem
                inputSenha.style.border = "1px solid red"
            } else {
                inputSenha.style.border = "1px solid #3333336b"
            }
        }
    }
}

export { validacaoFormLogin }