import api from "../consulta-api.js";
import notificacaoToastify from "./notification.js";
import { validacaoFormCadastro } from "./validation-form-register.js";

const formulario = document.querySelector(".formulario");
const inputNome = document.querySelector("[type=text]");
const inputEmail = document.querySelector("[type=email]");
const inputSenha = document.querySelectorAll("[type=password]");

function redir() {
    window.location.href = "../pages/login.html"
}

document.getElementById("link-login").addEventListener("click", redir);

async function cadastroDeUsuario(evento) {
    evento.preventDefault()
    if (inputSenha[0].value !== inputSenha[1].value) {
        return validacaoFormCadastro("As senhas não coincidem.")
    } else {
        const buscaApi = await api.cadastrarUsuario(inputNome.value, inputEmail.value, inputSenha[0].value)

        if (!buscaApi.statusCode) {
            return
        } else if (buscaApi.statusCode == 201) {
            notificacaoToastify("Usuário cadastrado com sucesso.", "#00b09b, #96c93d")
        }
    }
    setTimeout(() => {
        window.location.href = "../pages/login.html"
    }, 2000)

}

formulario.addEventListener("submit", (event) => cadastroDeUsuario(event))


