var nome = null
var sobrenome = null
var idade = null
var esporte = null
var anoAtual = null
var anoNasc = null


function ex1() {
    window.alert('Bem-vindo ao DEV in House!')
}

function ex2() {
    window.confirm('Tem certeza que deseja continuar?')
}

function ex3() {
    nome = window.prompt("Digite o seu nome: ")
    window.alert("Bem-vindo, " + nome)
}

function ex4() {
    nome = window.prompt("Digite o seu nome: ")
    console.log(nome)
    idade = parseInt(window.prompt("Digite a sua idade: "))
    console.log(idade)
    esporte = window.confirm("Você gosta de esportes?")
    console.log(esporte)
}

function ex5() {
    sobrenome = window.prompt("Digite o seu sobrenome: ")
    nome = window.prompt("Digite o seu nome: ")
    window.alert(nome + " " + sobrenome)
}

function ex6() {
    sobrenome = window.prompt("Digite o seu sobrenome: ")
    window.alert('Olá, ' + sobrenome.toUpperCase() + ". Seu sobrenome contém " + sobrenome.length + " letras")
}

function ex7() {
    anoNasc = prompt("Digite o ano de seu nascimento: ")
    anoAtual = prompt("Digite o ano atual: ")
    var idadeAtual = anoAtual - anoNasc
    window.alert("Sua idade é " + (anoAtual - anoNasc) + " ou " + ((anoAtual - anoNasc) - 1))
}

function ex8() {
    var resultado = null
    var operacao = window.prompt("Digite a operação desejada ( + , - , * , / ): ")
    var valor1 = parseInt(window.prompt("Digite o primeiro valor: "))
    var valor2 = parseInt(window.prompt("Digite o segundo valor: "))

    if (operacao === "+") {
        resultado = (valor1 + valor2)
        window.alert(resultado)
    } else if (operacao === "-") {
        resultado = (valor1 - valor2)
        window.alert(resultado)
    } else if (operacao === "*") {
        resultado = (valor1 * valor2)
        window.alert(resultado)
    } else if (operacao === "/") {
        resultado = (valor1 / valor2)
        window.alert(resultado)
    } else {
        window.alert("Operação inválida!")
    }

}

function ex9() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    window.alert(time)
}

function ex10() {
    var array = []
    var valor1 = parseInt(prompt("Digite o primeiro número: "))
    array.push(valor1)
    var valorRaiz = parseInt(prompt("Digite o valor 'raiz': "))
    array.push(valorRaiz)
    var resultado = valor1 + valorRaiz
    for (i = 0; i < 8; i++) {
      resultado = resultado + valorRaiz
      array.push(resultado)
    }

    window.alert(array)
}