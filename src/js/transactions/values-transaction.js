import api from "../consulta-api.js";
const btnAdicionar = document.querySelector(".btn-adicionar");
const inputValor = document.querySelector("#input-valor");
const inputTipo = document.querySelectorAll('input[name="entrada-saida"]');

const buscaDadosUsuario = await api.dadosUsuario()
const { id } = buscaDadosUsuario.conexaoConvertida[1]

async function carregarValor() {
    const buscaTotalTransacoes = await api.totalTransacoes(id)
    document.querySelector(".value__saida").textContent = `R$ ${buscaTotalTransacoes.conexaoConvertida.total_saida}`
    document.querySelector(".value__entrada").textContent = `R$ ${buscaTotalTransacoes.conexaoConvertida.total_entrada}`
    document.querySelector(".value__total").textContent = `R$ ${buscaTotalTransacoes.conexaoConvertida.saldo}`
}
carregarValor()


async function operacoesDeValores() {
    const buscaTotalTransacoes = await api.totalTransacoes(id)
    const { total_entrada, total_saida } = buscaTotalTransacoes.conexaoConvertida
    const inputValorTipoNumber = Number(inputValor.value)
    const textoTotal = document.querySelector(".value__total")

    let textoEntrada = document.querySelector(".value__entrada")
    let textoSaida = document.querySelector(".value__saida")

    if (inputTipo[0].checked) textoEntrada.textContent = `R$ ${(Number(total_entrada) + inputValorTipoNumber).toFixed(2)}`

    if (inputTipo[1].checked) textoSaida.textContent = `R$ ${(Number(total_saida) + inputValorTipoNumber).toFixed(2)}`

    textoEntrada = document.querySelector(".value__entrada").textContent.split(" ")[1]
    textoSaida = document.querySelector(".value__saida").textContent.split(" ")[1]

    textoTotal.textContent = `R$ ${(Number(textoEntrada) - Number(textoSaida)).toFixed(2)} `
}

btnAdicionar.addEventListener("click", operacoesDeValores);