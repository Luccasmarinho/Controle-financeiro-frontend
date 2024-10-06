import api from "../consulta-api.js";

const inputCategoria = document.querySelector("#input-descricao");
const inputValor = document.querySelector("#input-valor");
const inputTipo = document.querySelectorAll('input[name="entrada-saida"]');
const formTransacao = document.querySelector("#formulario-transacao");
const btnPrev = document.getElementById("prev")
const btnNext = document.getElementById("next")

const buscaDadosUsuario = await api.dadosUsuario()
const { id } = buscaDadosUsuario.conexaoConvertida[1]

let pagina = 1
let registrosPaginas = 7

const buscaTransacoes = await api.listaDeTransacoes(id, pagina, registrosPaginas)
const {
    listarTransacao,
    currentPage: paginaAtual,
    totalPages: registrosPorPagina
} = buscaTransacoes.conexaoConvertida


function criarElementos(categoria, valor, tipo = "icon-entrada") {
    const tbody = document.querySelector(".tbody-tabela")
    const tr = document.createElement("tr")
    tr.classList.add("tabela__corpo")

    tbody.appendChild(tr)

    for (let i = 0; i < 4; i++) {
        const td = document.createElement("td")
        switch (i) {
            case 0:
                td.textContent = categoria
                break
            case 1:
                td.textContent = valor
                break
            case 2:
                const iconType = tipo == "icon-entrada" ? "fa-arrow-up" : "fa-arrow-down"
                const iconArrow = document.createElement("i")
                iconArrow.classList.add("fa-solid", iconType)
                iconArrow.id = tipo
                td.appendChild(iconArrow)
                break
            case 3:
                const iconTrash = document.createElement("i")
                iconTrash.classList.add("fa-solid", "fa-trash")
                iconTrash.id = "icone-trash"
                const button = document.createElement("button")
                button.classList.add("corpo__btn-trash")
                tr.appendChild(button)
                button.appendChild(iconTrash)
                break
            default:
                break;
        }
        tr.appendChild(td)
    }
}

async function carregarTransacoes() {
    const buscaTransacoes = await api.listaDeTransacoes(id, pagina, registrosPaginas)
    const { listarTransacao, currentPage: paginaAtual, totalPages: registrosPorPagina } = buscaTransacoes.conexaoConvertida
    listarTransacao.forEach((dados) => {
        criarElementos(dados.categoria, Number(dados.valor).toFixed(2), `icon-${dados.tipo}`)
    })
}
carregarTransacoes()

async function criarTransacao(evento) {
    evento.preventDefault();

    const buscaTransacoes = await api.listaDeTransacoes(id, pagina, registrosPaginas)
    const {
        listarTransacao,
        currentPage: paginaAtual,
        totalPages: registrosPorPagina
    } = buscaTransacoes.conexaoConvertida

    const valorInputTipo = inputTipo[0].checked ? inputTipo[0].value : inputTipo[1].value

    const buscaCadastrarTransacao = await api.cadastrarTransacao(inputCategoria.value, inputValor.value, valorInputTipo, id)
    if (!buscaCadastrarTransacao) {
        return
    } else if (buscaCadastrarTransacao.statusCode == 200 && listarTransacao.length < 7) {
        criarElementos(inputCategoria.value, Number(inputValor.value).toFixed(2), `icon-${valorInputTipo}`)
        inputCategoria.value = ""
        inputValor.value = ""
    }
}

// async function prevDisabled() {
//     const buscaTransacoes = await api.listaDeTransacoes(id, pagina, registrosPaginas)
//     const {
//         listarTransacao,
//         currentPage: paginaAtual,
//         totalPages: registrosPorPagina
//     } = buscaTransacoes.conexaoConvertida

//     if (pagina == 1) {
//         btnPrev.disabled = true
//         btnPrev.style.backgroundColor = "#ffffff5e"
//         btnPrev.style.color = "#47a3bd5d"
//     } else {
//         btnPrev.disabled = false
//         btnPrev.style.color = "red"

//     }
// }
// prevDisabled()

btnNext.addEventListener("click", async () => {
    pagina++
    const tr = document.querySelectorAll(".tabela__corpo")

    const buscaTransacoes = await api.listaDeTransacoes(id, pagina, registrosPaginas)
    tr.forEach((e) => e.remove())

    const { listarTransacao, currentPage, totalPages: registrosPorPagina } = buscaTransacoes.conexaoConvertida
    listarTransacao.forEach((dados) => {
        criarElementos(dados.categoria, Number(dados.valor).toFixed(2), `icon-${dados.tipo}`)
    })
})

btnPrev.addEventListener("click", async () => {
    pagina--
    const tr = document.querySelectorAll(".tabela__corpo")

    const buscaTransacoes = await api.listaDeTransacoes(id, pagina, 7)
    tr.forEach((e) => e.remove())

    const { listarTransacao, currentPage, totalPages: registrosPorPagina } = buscaTransacoes.conexaoConvertida
    listarTransacao.forEach((dados) => {
        criarElementos(dados.categoria, Number(dados.valor).toFixed(2), `icon-${dados.tipo}`)
    })

})
formTransacao.addEventListener("submit", (event) => criarTransacao(event));