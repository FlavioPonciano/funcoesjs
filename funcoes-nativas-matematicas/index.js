//A Funções matemáticas podem ser acessadas pelo objeto Math do JS
//Como arredondar o valor fracionado para cima:
var x = Math.ceil(10.380)
document.write(x + ' ')

//Arredondamento do valor fracionado para baixo:
var y = Math.floor(10.380)
document.write(y + ' ')

//Arredondamento com base de média:
var x = Math.round(10.380) //Arredonda para baixo no caso 10
document.write(x + ' ')

var y = Math.round(10.580) //Arredonda pra cima no caso 11
document.write(y + ' ')

//Gerando um valor aleatório entre 0 e 1
var n = Math.random()
document.write(n + ' ')
