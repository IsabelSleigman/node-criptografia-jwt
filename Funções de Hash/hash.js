import { createHash } from 'crypto'

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criaHash('uma string qualquer'))

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha){
        if(nome === this.nome && this.hash === criaHash(senha)){
            console.log("Usuario autenticado com sucesso!")
            return true
        }
        console.log("Usuário ou senha incorretos!")
        return false
    }
}

const usuario = new Usuario('Isabel', 'minhaSenha')

console.log(usuario)

// caso de sucesso
usuario.autentica('Isabel', 'minhaSenha')

// caso de fracasso
usuario.autentica('isabel', 'minhaSenha')
usuario.autentica('Isabel', 'minhasenha')