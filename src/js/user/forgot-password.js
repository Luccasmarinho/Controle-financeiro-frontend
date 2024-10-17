import api from "../consulta-api.js";
import notificacaoToastify from "./notification.js";

const inputEmail = document.querySelector("[type=email]");
const form = document.querySelector(".formulario");

async function enviarEmail(evento) {
    evento.preventDefault()
    const buscaApi = await api.esqueceuSenha(inputEmail.value)
    console.log(buscaApi);

    if (!buscaApi.statusCode) {
        return
    }

    if (buscaApi.statusCode == 200) {
        notificacaoToastify("E-mail enviado com sucesso.", "#00b09b, #96c93d")
        setTimeout(() => {
            window.location.href = "../pages/login.html"
        }, 1500)
    }


}

form.addEventListener("submit", (event) => enviarEmail(event))