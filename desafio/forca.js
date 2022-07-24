var letrasChutadas = [];
var listaCerta = ['a', 'b', 'a', 'c', 'a', 'x', 'i'];
var letrasCertas = ['_', '_', '_', '_', '_', '_', '_'];
var vidas = 6;
var estado = "aguardando chute";

class Forca {

  chutar(letra) {

    //remove espaços em branco e converte para minúsculo
    letra = letra.trim().toString().toLowerCase();

    //verifica se foi digitado apenas um caracter
    if (letra.length == 1) {

      //verifica se a letra chutada já foi chutada anteriormente
      if (!letrasChutadas.includes(letra)) {

        letrasChutadas.push(letra);

        //verifica se a letra chutada é correta
        if (listaCerta.includes(letra)) {

          //busca a letra chutada no array para saber as posições que deve substituir
          for (let i = 0; i < listaCerta.length; i++) {

            //substitui o espaço em branco pela letra chutada
            if (listaCerta[i] === letra) {
              letrasCertas[i] = letra;
            }
          }

          //verifica se já acertou todas as letras
          if (letrasCertas.toString() === listaCerta.toString()) {
            estado = "ganhou";
          }
        } else {

          //desconta a vida em caso de erro
          vidas--;

          //verifica se as vidas acabaram
          if (vidas == 0) {
            estado = "perdeu";
          }
        }
      } else {
        console.log('Esta letra já foi');
      }
    } else {
      console.log('Insira um valor valido(com apenas uma letra)');
    }
  }

  buscarEstado() { return estado; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: letrasChutadas, // Deve conter todas as letras chutadas
      vidas: vidas, // Quantidade de vidas restantes
      palavra: letrasCertas // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;
