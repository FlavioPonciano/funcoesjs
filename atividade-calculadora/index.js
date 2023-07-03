function calculo () {
    let num1 = Number(document.getElementById('recebeNumero1').value)
    let num2 = Number(document.getElementById('recebeNumero2').value)
    let total = 0

    if(document.getElementById('escolheSoma').checked)
        total = num1 + num2
    else
        total = num1 - num2

    document.getElementById('resultado').innerHTML = `${total}`
}