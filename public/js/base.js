const nome = "Alessandra"
let nome2=""
let pessoa = {
    nome: "Marcelo Eltz"
    
}


function alterarnome() {
    nome2 = "Maria Silva"
    console.log ("valor alterado")
    console.log(nome2)
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome
    console.log ("valor alterado recebendo um nome")
    console.log(nome2)
}

console.log (pessoa);

console.log (nome)


//recebeEalteraNome("João Silva Pereira")
//recebeEalteraNome("Maria Silva")

//alterarnome()