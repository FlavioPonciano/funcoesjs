//Iniciando uma função
/*A função começa com:
    function nomeDaFuncao(parametros1, parametro2, ...){ 
        dentro das chaves vão os valores e lógicas para trabalhar a função
        também depenendendo do tipo de função pode solicitar o retorno ou não
    }
*/
//Função do tipo void:
function calcularAreaTerreno(largura, comprimento) {
    var area = largura * comprimento //declarando a viariável que vai receber o calculo
    document.write('O terreno possui ' + area + ' metros quadrados.') //saída para esse tipo de função
}

calcularAreaTerreno(12, 35)

//Função do tipo retorno:
function somandoDoisNumeros(primeiroNumero, segundoNumero) {
    var soma = primeiroNumero + segundoNumero
    return soma 
}

//Além de chamar a função no resultado mesmo, pode chamar a função dentro de uma variável para facilitar

//Resultado chamando a função:
document.write(' A soma é ' + somandoDoisNumeros(2, 3))

//Atribuindo uma varíavel à função:
var soma = somandoDoisNumeros(2, 5)

//Resultado chamando a função:
document.write(' A soma é ' + soma)

//Utilizando valores recebidos pelo usuário, nesse exemplo com o prompt:

//Entradas dos dados pelo usuário:
var primeiroNumeroSubtracao = prompt('Digite o primeiro número: ')
var segundoNumeroSubtracao = prompt('Digite o segundo número: ')

//Fazendo a função:
function subtracaoDoisNumeros(primeiroNumeroSubtracao, segundoNumeroSubtracao) {
    var resultado = primeiroNumeroSubtracao - segundoNumeroSubtracao
    return resultado
}

var mostrarResultado = subtracaoDoisNumeros(primeiroNumeroSubtracao, segundoNumeroSubtracao) //Atribuindo os valores ao resultado

document.write(' A subtração é ' + mostrarResultado) //Mostrando o resultado