import api from "../consulta-api.js";

const buscaDadosUsuario = await api.dadosUsuario()
const { id } = buscaDadosUsuario.conexaoConvertida[1]

async function removerTransacoes() {
    const buscaTransacoes = await api.listaDeTransacoes(id, 2, 7)
    const a = buscaTransacoes.conexaoConvertida.listarTransacao
    // console.log(a);

    const botaoTrash = document.querySelectorAll(".corpo__btn-trash")
    const tr = document.querySelectorAll(".tabela__corpo")

    botaoTrash.forEach((btn, i) => {
        btn.onclick = () => tr[i].remove()
        // console.log(tr);
        // const buscaDeletarTransaca = api.deletarTransacao(10)
    })

}
removerTransacoes()