import api from "../consulta-api.js";
import notificacaoToastify from "./notification.js";
import { validacaoRedefinirSenha } from "./validation-reset-pass.js";
const formulario = document.querySelector(".formulario");
const inputSenha = document.querySelectorAll("[type=password]");

async function resetPass(evento) {
    evento.preventDefault()
    if (inputSenha[0].value !== inputSenha[1].value) return validacaoRedefinirSenha("As senhas não coincidem.")

    const token = location.search.split("=")[1]
    const buscaApi = await api.redefinirSenha(token, inputSenha[0].value)
    if (!buscaApi.statusCode) {
        return
    } else if (buscaApi.statusCode == 200) {
        notificacaoToastify("Senha alterada com sucesso.", "#00b09b, #96c93d")
        setTimeout(() => {
            window.location.href = "../pages/login.html"
        }, 1500)
    }
}


formulario.addEventListener("submit", (event) => resetPass(event))