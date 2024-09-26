const input = document.querySelectorAll("#input-pass");
const iconEye = document.querySelectorAll("#icon-eye");

function showHidePassword() {
    for (let i = 0; i < input.length; i++) {
        if (input[i].type == "password") {
            input[i].setAttribute("type", "text")
            iconEye[i].classList.replace("fa-eye", "fa-eye-slash")
        } else {
            input[i].setAttribute("type", "password")
            iconEye[i].classList.replace("fa-eye-slash", "fa-eye")
        }
    }
}

iconEye.forEach((icon) => icon.addEventListener("click", showHidePassword))