const btnLogin = document.getElementById("loginAgain");
const modal = document.getElementById('loadingModal');


function redir() {
    modal.style.display = "flex"
    return setTimeout(() => window.location.href = "../pages/login.html", 1500)
}

btnLogin.addEventListener("click", redir)
