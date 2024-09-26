import api from "../consulta-api.js";
import notificacaoToastify from "./notification.js";

const formulario = document.querySelector(".formulario");
const inputNome = document.querySelector("[type=text]");
const inputEmail = document.querySelector("[type=email]");
const inputSenha = document.querySelectorAll("[type=password]");

function redir() {
    window.location.href = "../pages/index.html"
}

document.getElementById("link-login").addEventListener("click", redir);

function validarSenhasIguais() {

}

// function cadastroDeUsuario(evento) {
//     evento.preventDefault()
//     validarSenhasIguais()
// }

formulario.addEventListener("submit", async (event) => {
    event.preventDefault()
    debugger
    if (inputSenha[0].value !== inputSenha[1].value) {
        inputSenha[0].style.border = "2px solid red"
        inputSenha[1].style.border = "2px solid red"
        return notificacaoToastify("As senhas não coincidem.")
    } else {
        inputSenha[0].style.border = "2px solid #3333336b"
        inputSenha[1].style.border = "2px solid #3333336b"

        const result = await api.cadastrarUsuario(inputNome.value, inputEmail.value, inputSenha[0].value)

        if (!result) {
            return
        } else if (result.statusCode == 201) {
            notificacaoToastify("Usuário cadastrado com sucesso.", "#00b09b, #96c93d")
        }
    }
    setTimeout(() => {
        window.location.href = "../pages/index.html"
    }, 2000)
})


