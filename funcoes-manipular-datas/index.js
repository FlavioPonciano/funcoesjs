//Objeto Date é o utilizado para manipular Datas:
//Date é um objeto que precisa ser instanciado, fazendo uma nova instancia do objeto date, da seguinte forma:
var data = new Date() // new Date() faz com que um novo objeto de data seja criado e atribuido à uma variável, essa variável vai conter todas as informações de datas do momento em que foi instanciada (criada), as informações são solicitadas ao browser que são solicitadas ao sistema operacional do usuário. Geralmente os calculos de datas e informação são trazidas também do servidor e manipuladas para trazer a informação ao usuário.

//Solicitado o dia de forma dinâmica:
document.write(data.getDate() + '/')

//Solicitando o mês: Essa função traz os meses de 0 a 11, precisando somar +1
document.write(data.getMonth() + 1 + '/')

//Solicitando o ano:
document.write(data.getFullYear() + ' ')

//Métodos get são utilizados para puxar dados e os métodos set são utilizados para setar dados ou seja configurados

document.write('<hr /> ')

//Adicionar ou remover dias da data:
document.write(data.toString()) //Data atual
data.setDate(data.getDate() + 720) //Adicionando dias a data ou o simbolo de "-" para remover dias
document.write('<hr /> ')
document.write(data.toString()) // Data com os dias adicionados, além de mudar os dias ela muda o mes e o ano também de acordo com a soma
document.write('<hr /> ')

//Adicionar ou remover meses da data:
//utilizando o SET para setar e o GET para trazer a informação
document.write(data.toString()) //Data atual
data.setMonth(data.getMonth() - 12) //Adicionando meses a data ou o simbolo de "-" para remover 
document.write('<hr /> ')
document.write(data.toString()) // Data com os meses adicionados, além de mudar os dias ela muda o mes e o ano também de acordo com a soma
document.write('<hr /> ')

//Adicionar ou remover anos da data:
document.write(data.toString()) //Data atual
data.setFullYear(data.getFullYear() + 5) //Adicionando anos a data ou o simbolo de "-" para remover 
document.write('<hr /> ')
document.write(data.toString()) // Data com os anos adicionados, além de mudar os dias ela muda o mes e o ano também de acordo com a soma
document.write('<hr /> ')
document.write('<br /> <br / ><hr /> ')
document.write('<br /> <br / ><hr /> ')

//Calculo entre duas datas diferentes:

//Quantos dias existe entre duas datas diferentes:
var data1 = new Date(2023, 5, 19) //Existe uma sequencia entre as informações do Date (ano, mes, dia, horas, minutos, segundos e millisegundos)

var data2 = new Date(2023, 10, 20)

document.write(data1.toString())
document.write('<hr /> ')
document.write(data2.toString())
document.write('<br /> <br / ><hr /> ')

//Converter as datas para um valor que pode ser calculado:
//Convertendo para milisegundos, ele vai trazer um valor referente a desde 1 de janeiro de 1970
document.write(data1.getTime())
document.write('<hr /> ')
document.write(data2.getTime())

document.write('<br /> <br / ><hr /> ')
//Encontrar a quantidade de milisegundos entre data1 e data2:
var milissegundosEntreDatas = Math.abs(data1.getTime() - data2.getTime()) //Método abs retorna valor absoluto transformando negativo em positivo nesse caso
document.write(milissegundosEntreDatas) 
document.write('<hr /> ')
//Saber quantos dias represetam a quantidade de milisegundos:
//Quantos milissegundos existem em um dia?
var milissegundosPorDia = 1 * 24 * 60 * 60 * 1000
document.write(`1 dia tem: ${milissegundosPorDia}milissegundos`)
document.write('<hr /> ')

document.write(`A diferença entre as datas é de: ${Math.ceil(milissegundosEntreDatas / milissegundosPorDia)}`)