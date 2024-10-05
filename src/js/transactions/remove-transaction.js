import api from "../consulta-api.js";

const buscaDadosUsuario = await api.dadosUsuario()
const { id } = buscaDadosUsuario.conexaoConvertida[1]

async function removerTransacoes() {
    const buscaTransacoes = await api.listaDeTransacoes(id)

    const botaoTrash = document.querySelectorAll(".corpo__btn-trash")
    const tr = document.querySelectorAll(".tabela__corpo")

    botaoTrash.forEach((e, i) => {
        e.onclick = () => tr[i].remove()
    })

}
removerTransacoes()