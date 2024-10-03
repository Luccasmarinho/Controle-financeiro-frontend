import api from "../consulta-api.js";

const inputCategoria = document.querySelector("#input-descricao");
const inputValor = document.querySelector("#input-valor");
const inputTipo = document.querySelectorAll('input[name="entrada-saida"]');
const formTransacao = document.querySelector("#formulario-transacao");

const buscaDadosUsuario = await api.dadosUsuario()
const { id } = buscaDadosUsuario.conexaoConvertida[1]


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

async function criarTransacao(evento) {
    evento.preventDefault();
    const valorInputTipo = inputTipo[0].checked ? inputTipo[0].value : inputTipo[1].value

    const buscaCadastrarTransacao = await api.cadastrarTransacao(inputCategoria.value, inputValor.value, valorInputTipo, id)
    if (!buscaCadastrarTransacao) {
        return
    } else if (buscaCadastrarTransacao.statusCode == 200) {
        criarElementos(inputCategoria.value, Number(inputValor.value).toFixed(2), `icon-${valorInputTipo}`)
        inputCategoria.value = ""
        inputValor.value = ""
    }
}

async function carregarTransacoes() {
    const buscaTransacoes = await api.listaDeTransacoes(id)
    const { conexaoConvertida } = buscaTransacoes
    conexaoConvertida.forEach((dados) => {
        criarElementos(dados.categoria, Number(dados.valor).toFixed(2), `icon-${dados.tipo}`)
    })
}
carregarTransacoes()

formTransacao.addEventListener("submit", (event) => criarTransacao(event));