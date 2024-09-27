import api from "../consulta-api.js";

const formularioLogin = document.querySelector(".formulario");
const inputEmail = document.querySelector("[type=email]");
const inputSenha = document.querySelector("[type=password]");

const modal = document.getElementById('loadingModal');

function redir() {
    window.location.href = "./src/pages/create-user.html"
}

document.getElementById("link-cadastrar").addEventListener("click", redir)


formularioLogin.addEventListener("submit", async (event) => {
    event.preventDefault()
    const buscaApi = await api.login(inputEmail.value, inputSenha.value)
    // console.log(buscaApi.conexaoConvertida.token)

    if (!buscaApi) {
        return
    } else if (buscaApi.statusCode == 200) {
        modal.style.display = "flex"

        setTimeout(() => {
            window.location.href = "./src/pages/home.html"
        }, 1500)
    }
})