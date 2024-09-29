const btnSair = document.querySelector("#link-sair");
const modal = document.getElementById('loadingModal');
const loader = document.querySelector("#loader__text");


function loggout() {
    localStorage.removeItem("token")

    loader.innerHTML = `Saindo...`
    modal.style.display = "flex"

    setTimeout(() => {
        window.location.href = "../pages/login.html"
    }, 1500)
}
btnSair.addEventListener("click", loggout)