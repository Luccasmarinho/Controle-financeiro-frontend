function notificacaoToastify(mensagem, background = "#F40001, #F40001") {
    Toastify({
        text: mensagem,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: `linear-gradient(to right, ${background})`,
        },
        onClick: function () { }
    }).showToast();
}

export default notificacaoToastify

//#00b09b, #96c93d