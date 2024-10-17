import notificacaoToastify from "./user/notification.js"
import { validacaoFormEsqueceuSenha } from "./user/validation-forgot-pass.js"
import { validacaoFormLogin } from "./user/validation-form-login.js"
import { validacaoFormCadastro } from "./user/validation-form-register.js"
import { validacaoRedefinirSenha } from "./user/validation-reset-pass.js"

const linkApi = "https://controle-financeiro-api.vercel.app"

async function cadastrarUsuario(nome, email, senha) {
    try {
        const conexao = await fetch(`${linkApi}/usuarios`, {
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
            const errorData = await conexao.json()
            validacaoFormCadastro(errorData.Mensagem)
            throw new Error(errorData.Mensagem)
        }

        const statusCode = conexao.status
        const conexaoConvertida = await conexao.json()

        return { conexaoConvertida, statusCode }
    } catch (error) {
        return { erro: error.message }
    }
}

async function login(email, senha) {
    try {
        const conexao = await fetch(`${linkApi}/login`, {
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
            const errorData = await conexao.json()
            validacaoFormLogin(errorData.Mensagem)
            throw new Error(errorData.Mensagem)
            // throw new Error("Não foi possível efetuar o login.")
        }

        const statusCode = conexao.status
        const conexaoConvertida = await conexao.json()

        return { conexaoConvertida, statusCode }
    } catch (error) {
        return { erro: error.message }
    }
}

async function cadastrarTransacao(categoria, valor, tipo, usuario_id) {
    try {
        const token = JSON.parse(localStorage.getItem("token")).token

        const conexao = await fetch(`${linkApi}/transacoes`, {
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
            const errorData = await conexao.json()
            throw new Error(JSON.stringify(errorData))
        }

        const statusCode = conexao.status
        const conexaoConvertida = await conexao.json()

        return { conexaoConvertida, statusCode }
    } catch (error) {
        console.log(error);
        const modalSessaoExpirada = document.querySelector(".modal-token")
        if (JSON.parse(error.message).erro == "jwt expired") {
            modalSessaoExpirada.style.display = "block"
            localStorage.removeItem("token")
            // setTimeout(() => window.location.href = "../pages/login.html", 1500)
            return
        }

        return { erro: error.message }
    }
}

async function listaDeTransacoes(id, page, limit) {
    const url = !page && !limit
        ? `${linkApi}/transacoes?usuario_id=${id}`
        : `${linkApi}/transacoes?usuario_id=${id}&page=${page}&limit=${limit}`
    try {
        const token = JSON.parse(localStorage.getItem("token")).token
        const conexao = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${token}`
            }
        })

        if (!conexao.ok) {
            const errorData = await conexao.json()
            throw new Error(errorData.Mensagem)
        }

        const statusCode = conexao.status
        const conexaoConvertida = await conexao.json()

        return { conexaoConvertida, statusCode }
    } catch (error) {
        return { erro: error.message };
    }
}

async function deletarUsuario(id) {
    // const token = aqui vai pegar o token do localstorage
    try {
        const conexao = await fetch(`${linkApi}/usuarios/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${token}`
            }
        })

        if (!conexao.ok) {
            throw new Error("Não foi possível deletar este usuário.")
        }

        const conexaoConvertida = await conexao.json()

        return conexaoConvertida
    } catch (error) {
        return { erro: error.message };
    }
}

async function deletarTransacao(id) {
    try {
        const token = JSON.parse(localStorage.getItem("token")).token
        const conexao = await fetch(`${linkApi}/transacoes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${token}`
            }
        })

        if (!conexao.ok) {
            const errorData = await conexao.json()
            throw new Error(errorData.Mensagem)
        }

        const statusCode = conexao.status
        const conexaoConvertida = await conexao.json()

        return { conexaoConvertida, statusCode }
    } catch (error) {
        return { erro: error.message };
    }
}

async function totalTransacoes(id) {
    try {
        const token = JSON.parse(localStorage.getItem("token")).token
        const conexao = await fetch(`${linkApi}/transacoes/total?usuario_id=${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${token}`
            }
        })

        if (!conexao.ok) {
            const errorData = await conexao.json()
            throw new Error(errorData.Mensagem)
        }

        const statusCode = conexao.status
        const conexaoConvertida = await conexao.json()

        return { conexaoConvertida, statusCode }
    } catch (error) {
        return { erro: error.message };
    }
}

async function dadosUsuario() {

    try {
        const token = JSON.parse(localStorage.getItem("token")).token
        const conexao = await fetch(`${linkApi}/dados/usuario`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${token}`
            }
        })

        if (!conexao.ok) {
            const errorData = await conexao.json()
            throw new Error(JSON.stringify(errorData))
        }

        const conexaoConvertida = await conexao.json()

        return { conexaoConvertida }
    } catch (error) {
        // const modalSessaoExpirada = document.querySelector(".modal-token")
        // if (JSON.parse(error.message).erro == "jwt expired") {
        //     modalSessaoExpirada.style.display = "block"
        //     localStorage.removeItem("token")
        //     // setTimeout(() => window.location.href = "../pages/login.html", 1500)
        //     return
        // }

        return { erro: error.message }
    }
}

async function esqueceuSenha(email) {
    try {
        const conexao = await fetch(`${linkApi}/send`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        })

        if (!conexao.ok) {
            const errorData = await conexao.json()
            validacaoFormEsqueceuSenha(errorData.Mensagem)
            throw new Error(errorData.Mensagem)
        }

        const statusCode = conexao.status
        const conexaoConvertida = await conexao.json()

        return { conexaoConvertida, statusCode }
    } catch (error) {
        return { erro: error.message }
    }
}

async function redefinirSenha(token, senha) {
    try {
        const conexao = await fetch(`${linkApi}/redefinir-senha?token=${token}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                senha
            })
        })

        if (!conexao.ok) {
            const errorData = await conexao.json()
            console.log(errorData.Mensagem);
            validacaoRedefinirSenha(errorData.Mensagem)
            throw new Error(errorData.Mensagem)
        }

        const statusCode = conexao.status
        const conexaoConvertida = await conexao.json()

        return { conexaoConvertida, statusCode }
    } catch (error) {
        return { erro: error.message }
    }
}



const api = {
    cadastrarUsuario,
    login,
    dadosUsuario,
    cadastrarTransacao,
    listaDeTransacoes,
    totalTransacoes,
    deletarTransacao,
    esqueceuSenha,
    redefinirSenha
}

export default api