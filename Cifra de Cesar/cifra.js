const mensagemSecreta = "alura";
const movimentosInformados = 4

console.log(mensagemSecreta)

function cifraMensagem(mensagem, movimentos){
   const mensagemCifrada = mensagem.split('').map( caractere => {
        const codigoCaractere = caractere.charCodeAt(0)
        return String.fromCharCode(codigoCaractere + movimentos)
    })

    return mensagemCifrada.join('')
}
const mensagemCifrada =  cifraMensagem(mensagemSecreta, movimentosInformados)
console.log(mensagemCifrada)

function decifraMensagem(mensagem, movimentos){
    const mensagemCifrada = mensagem.split('').map( caractere => {
         const codigoCaractere = caractere.charCodeAt(0)
         return String.fromCharCode(codigoCaractere - movimentos)
     })
 
     return mensagemCifrada.join('')
 }

 const mensagemDecifrada =  decifraMensagem(mensagemCifrada, movimentosInformados)
console.log(mensagemDecifrada)
