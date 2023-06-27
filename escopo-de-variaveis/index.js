/*O JS possuí 3 tipos de escopos:
Global é o escopo do script como um todo.
Função corresponde ao conteúdo inserido em um bloco de função {}.
Bloco são as instruções incluídas dentro de comandos como if e switch.
*/

//Variável Global:
var serie = 'Friends '
//Essa variável pode ser acessada por um escopo de bloco:
if(true) {
    var serie2 = 'Game of Thrones ' //Se tem acesso à essa varíavel mesmo no escopo Global, essa elevação para global se chama hoist
    document.write(serie)
}
document.write(serie2) //Acessando a variável de bloco de forma global
//Acesso do escopo de função à uma variável global:
function x() {
    document.write(serie)
    document.write(serie2) //Acessando a variável de bloco em uma função, pois ela vira global
    var serie3 = 'The Walking Dead' // Escopo de função não podem ser acessados globalmente ou em bloco
}

document.write(serie3)//Está errado pois ela não poderá ser acessado de forma global

x()