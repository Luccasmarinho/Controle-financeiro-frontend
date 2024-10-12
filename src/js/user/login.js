import api from "../consulta-api.js";

const formularioLogin = document.querySelector(".formulario");
const inputEmail = document.querySelector("[type=email]");
const inputSenha = document.querySelector("[type=password]");
const modal = document.getElementById('loadingModal');


function redir(caminho) {
    window.location.href = caminho
}

document.getElementById("link-esqueceu-senha").addEventListener("click", () => redir("../pages/forgot-password.html"))
document.getElementById("link-cadastrar").addEventListener("click", () => redir("../pages/create-user.html"))

function guardarToken(token) {
    const objToken = {
        token
    }
    localStorage.setItem("token", JSON.stringify(objToken))
}

formularioLogin.addEventListener("submit", async (event) => {
    event.preventDefault()
    const buscaApi = await api.login(inputEmail.value, inputSenha.value)

    if (!buscaApi) {
        return
    } else if (buscaApi.statusCode == 200) {
        const { token } = buscaApi.conexaoConvertida
        const { id } = buscaApi.conexaoConvertida.user

        guardarToken(token)

        modal.style.display = "flex"

        setTimeout(() => {
            window.location.href = "../pages/dashboard.html"
        }, 1500)
    }
})
