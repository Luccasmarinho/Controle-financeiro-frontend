async function cadastrarUsuario(nome, email, senha) {
    const conexao = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome,
            email,
            senha
        })
    })

    if (!conexao.ok) {
        throw new Error("Não foi possível cadastrar o novo usuário.")
    }

    const conexaoConvertida = await conexao.json()

    return conexaoConvertida

}

async function login() {
    const conexao = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email,
            senha
        })
    })

    if (!conexao.ok) {
        throw new Error("Não foi possível efetuar o login.")
    }

    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function cadastrarTransacao(categoria, valor, tipo, usuario_id) {
    // const token = aqui vai pegar o token do localstorage

    const conexao = await fetch("http://localhost:3000/transacoes", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            categoria,
            valor,
            tipo,
            usuario_id
        })
    })

    if (!conexao.ok) {
        throw new Error("Não foi possível cadastrar essa transação.")
    }

    const conexaoConvertida = await conexao.json()

    return conexaoConvertida

}

async function listaDeTransacoes(id) {
    // const token = aqui vai pegar o token do localstorage

    const conexao = await fetch(`http://localhost:3000/transacoes?usuario_id=${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${token}`
        }
    })

    if (!conexao.ok) {
        throw new Error("Não foi possível listar essas transações.")
    }

    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}