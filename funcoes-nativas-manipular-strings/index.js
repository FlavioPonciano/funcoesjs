//Valores primitivos como strings por si só não tem propriedades e metodos, mas o JS consegue converte-los em objetos.
//Propriedade length: Retorna a quantidade de caracteres de ums string
document.write('Flávio Ponciano '.length)//Mostrando no site o valor com quantidade de String sempre iniciando pelo zero

//Método charAt() retorna o caracter contigo em um indice solicitado
document.write('Flávio Ponciano'.charAt(7))

//Método indexOf() retorna a posição da primeira ocorrência dentro da String. E caso não encontre o caractere ele retorna -1
document.write('Flávio Ponciano'.indexOf('P'))

//Método replace() permite extrair uma ocorrencia na String por outra
document.write('Flávio Ponciano'.replace('Ponciano', 'Júnior'))

//Método substr() extrair parte de uma string com base de uma posição inicia e seguido pela quantidade de caracteres a frente da posição inicial
document.write('Flávio Ponciano'.substring(8, 3))

//Método toLowerCase e toUpperCase: Mostra a String em caixa alta e caixa baixa
document.write('Flávio Ponciano'.toLocaleLowerCase())
document.write('Flávio Ponciano'.toLocaleUpperCase())

//Método trim: Removo os espaços em branco de uma extremidade de uma String;
document.write('   Flávio Ponciano'.trim())