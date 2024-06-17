function calcular() {
    event.preventDefault();
    const resultado = document.getElementById("resultado");
    const nome = document.getElementById("nome").value;
    let vitorias = document.getElementById("vitorias").value;
    let derrotas = document.getElementById("derrotas").value;
    const section = document.getElementById("section");

    let textoResultado;

    textoResultado = "O Herói " + nome + " tem um saldo de " + calcRank(vitorias, derrotas);
    resultado.innerText = textoResultado;
}

function calcRank(vitorias, derrotas) {
    let resultado  = vitorias - derrotas;
    let textoResultado;
    let nivel;

    if (resultado <= 10) {
        nivel = "Ferro"
    } else if (resultado <= 20) {
        nivel = "Bronze"
    }  else if (resultado <= 50) {
        nivel = "Prata"
    }  else if (resultado <= 80) {
        nivel = "Ouro"
    }  else if (resultado <= 90) {
        nivel = "Diamante"
    }  else if (resultado <= 100) {
        nivel = "Lendário"
    }  else if (resultado > 100) {
        nivel = "Imortal"
    }

    textoResultado = resultado + " vitórias e está no nível " + nivel;
    return textoResultado
}
