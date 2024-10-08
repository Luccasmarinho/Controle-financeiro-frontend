import api from "../consulta-api.js";

const buscaDadosUsuario = await api.dadosUsuario()
const { id } = buscaDadosUsuario.conexaoConvertida[1]

async function removerTransacoes() {
    const buscaTodasTransacoes = await api.listaDeTransacoes(id)
    const arrayTransacoes = buscaTodasTransacoes.conexaoConvertida.listarTransacao
    const buscaElemento = arrayTransacoes.find((e) => e.id == 595)

    // const botaoTrash = document.querySelectorAll(".corpo__btn-trash")
    // const tr = document.querySelectorAll(".tabela__corpo")

    const buscaDeletarTransaca = api.deletarTransacao()

    // botaoTrash.forEach((btn, i) => {
    //     btn.onclick = () => tr[i].remove()
    // })

}
removerTransacoes()