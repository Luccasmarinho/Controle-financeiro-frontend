const inputNome = document.querySelector("[type=text]");
const inputEmail = document.querySelector("[type=email]");
const inputSenha = document.querySelectorAll("[type=password]");
const erro = document.querySelector(".formulario__erro");
const erroText = document.querySelector(".erro__text");

const inputs = ["nome", "email", "senha"]

function validacaoFormCadastro(mensagem) {
      for (let i = 0; i < inputs.length; i++) {
        if (mensagem.toLowerCase().includes(inputs[i])) {
            if (inputs[i] == "nome") {
                erro.style.display = "flex"
                erroText.textContent = mensagem
                inputNome.style.border = "1px solid red"
            } else {
                inputNome.style.border = "1px solid #3333336b"
            }

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
                inputSenha[0].style.border = "1px solid red"
                inputSenha[1].style.border = "1px solid red"
            } else {
                inputSenha[0].style.border = "1px solid #3333336b"
                inputSenha[1].style.border = "1px solid #3333336b"
            }
        }
    }
}



export { validacaoFormCadastro }