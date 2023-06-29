//Funções de Callback são funções encaminhadas como paramêtros para outras funções

function exibirArtigo(id, callbackSucesso, callbackErro) {
    //realizado alguma lógica qualquer
    if(true) {
        callbackSucesso('Funções de callBack em JS')
    } else {
        callbackErro('Erro!')
    }
}

//Wrapper é encapsular a função em uma variável para que ela seja utilizada na chamada abaixo
var callbackSucesso = function(titulo, descricao) {
    document.write('<h1>' + titulo + '</h1>')
    document.write('<h1>' + descricao + '</h1>')
}

var callbackErro = function(erro) {
    document.write('<p><b>Erro: </b>' + erro + '</p>')
}

//Nesse caso de utilização de funções como paramêtros não se utiliza ()
exibirArtigo(1, callbackSucesso, callbackErro)


//Podemos chamar a função e delegar as lógicas das funções na própria chamada, mas isso pode não ser muito usual, por isso podemos utilizar a técnica de wrapper
exibirArtigo(1, function(){ /*aqui entra a lógica*/}, function() {/*aqui entra a lógica*/})
