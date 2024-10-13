const inputSenha = document.querySelectorAll("[type=password]");
const erro = document.querySelector(".formulario__erro");
const erroText = document.querySelector(".erro__text");

const inputs = ["senha"]

function validacaoRedefinirSenha(mensagem) {
      for (let i = 0; i < inputs.length; i++) {
        if (mensagem.toLowerCase().includes(inputs[i])) {
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

export { validacaoRedefinirSenha }