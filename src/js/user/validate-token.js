const btnEntrar = document.querySelector("#link-entrar");
const modal = document.getElementById('loadingModal');

function carregamentoERedirecionamento(caminho) {
    modal.style.display = "flex"
    return setTimeout(() => window.location.href = caminho, 1500)
}

async function tokenValido() {
    const token = !localStorage.getItem("token")
        ? carregamentoERedirecionamento("src/pages/login.html")
        : carregamentoERedirecionamento("src/pages/dashboard.html")

    return token

    // if (!localStorage.getItem("token")) {
    //     carregamentoERedirecionamento("src/pages/login.html")
    // }

    // if (localStorage.getItem("token")) {
    //     // const { dataExpiracaoDoToken } = buscaApi.conexaoConvertida
    //     // const dataAtual = new Date().toLocaleString()

    //     // if (dataAtual > dataExpiracaoDoToken) {
    //     //     localStorage.removeItem("token")
    //     //     carregamentoERedirecionamento("src/pages/login.html")
    //     // }

    //     carregamentoERedirecionamento("src/pages/dashboard.html")
    // }
}

btnEntrar.addEventListener("click", tokenValido)


