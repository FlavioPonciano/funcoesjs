function soma(a, b) {
    /*para corrigir o problemas do parametro undefined de um parametro apenas, testando por um operador ternário:
    b = b === undefined ? 0 : b */
    return a + b
}

console.log(soma(7, 7))

//Caso hajam mais parametros do que esperado receber pela função, o js vai desconsiderar os parametros adicionais e calcular apenas os dois primeiros citados
console.log(soma(7, 7, 9, 10))

/*No caso de ser passado parametro a menos do que solicitado ele vai considerar o segundo parametro como undefined
Nesse caso a expressão fica assim: 
return 7 + undefined = not a number NaN*/
console.log(soma(7))

//Trazendo a função sem parametros ele vai retornar o NaN como no exemplo anterior.
console.log(soma())