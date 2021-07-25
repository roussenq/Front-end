// Exercício 1

function calcIdade() {
    bdate = document.getElementById('data').value
    bday = +new Date(bdate)
    idade = ~~((Date.now() - bday) / (31557600000))
    document.getElementById('idade').innerHTML = "Sua idade é: " + idade
    return idade
}

// Exercício 2

function calcSoma() {
    n1 = parseInt(document.getElementById('n1').value)
    n2 = parseInt(document.getElementById('n2').value)

    document.getElementById('resultado').value = n1 + n2
}

function calcSub() {
    n1 = parseInt(document.getElementById('n1').value)
    n2 = parseInt(document.getElementById('n2').value)

    document.getElementById('resultado').value = n1 - n2
}

function calcMulti() {
    n1 = parseInt(document.getElementById('n1').value)
    n2 = parseInt(document.getElementById('n2').value)

    document.getElementById('resultado').value = n1 * n2
}

function calcDiv() {
    n1 = parseInt(document.getElementById('n1').value)
    n2 = parseInt(document.getElementById('n2').value)

    document.getElementById('resultado').value = n1 / n2
}

// Exercício 3

function parImpar() {
    valor = document.getElementById('imPar').value
    if (valor % 2 === 0) {
        document.getElementById('resultado_imPar').innerText = 'PAR'
    } else {
        document.getElementById('resultado_imPar').innerText = 'IMPAR'
    }
}

// Exercício 4

function getTime() {
    let horas = new Date().getHours()
    let minutos = new Date().getMinutes()
    document.getElementById('time').innerHTML = "Horário: " + horas + ":" + (minutos < 10 ? '0' : '') + minutos
}

getTime()

// Exercícios 5

function getTime2() {
    horas = new Date().getHours()
    minutos = new Date().getMinutes()
    document.getElementById('time2').innerHTML = "Horário: " + horas + ":" + (minutos < 10 ? '0' : '') + minutos
}

setInterval(getTime2, 1000)

// Exercício 6

function getEstacao() {
    mes = new Date().getMonth()
    dia = new Date().getDay()

    img_estacao = document.getElementById('img-estacao')
    estacao_atual = document.getElementById('estacao')

    if ((mes <= 3 || mes > 11)) { estacao_atual.innerHTML = "Verão"; img_estacao.setAttribute('src', 'verao.jpg') }
    if ((mes >= 3 || mes >= 6)) { estacao_atual.innerHTML = "Outono"; img_estacao.setAttribute('src', 'outono.jpg') }
    if ((mes >= 6 || mes >= 9)) { estacao_atual.innerHTML = "Inverno"; img_estacao.setAttribute('src', 'inverno.jpg') }
    if ((mes >= 9 || mes >= 12)) { estacao_atual.innerHTML = "Primavera"; img_estacao.setAttribute('src', 'primavera.jpg') }
}

getEstacao()

// Exercício 7

function addItem() {

    document.getElementById('listaForm').addEventListener('submit', function (e) {
        e.preventDefault()
        console.log('prevented')
    })

    if (document.getElementById('novoItem').value === '') {
        alert('Preencha este campo')
    } else {
        lista = document.getElementById('listaCompras')
        opt = document.createElement('option')
        lista.appendChild(opt)
        opt.value = document.getElementById('novoItem').value
        opt.innerText = document.getElementById('novoItem').value
        document.getElementById('novoItem').value = ""
    }


}

// Exercícios 8 e 9

function addItem2() {

    document.getElementById('listaForm2').addEventListener('submit', function (e) {
        e.preventDefault()
        console.log('prevented')
    })

    if (document.getElementById('novoItem2').value === '') {
        alert('Preencha este campo')
    } else {
        lista = document.getElementById('listaCompras2')
        opt = document.createElement('option')
        lista.appendChild(opt)
        opt.value = document.getElementById('novoItem2').value
        opt.innerText = document.getElementById('novoItem2').value
        document.getElementById('novoItem2').value = ""
    }


}

function saveStorage() {
    document.getElementById('saveLista').addEventListener('click', function (e) {
        e.preventDefault()
        store = document.getElementById('listaCompras2').innerHTML
        localStorage.setItem('Lista de Compras', store)
        console.log('gravando')
    })
}

function loadStorage() {
    document.getElementById('loadLista').addEventListener('click', (e) => {
        if (localStorage.getItem('Lista de Compras')) {
            document.getElementById('listaCompras2').innerHTML = localStorage.getItem('Lista de Compras')
            console.log('carregando')
        }

    })

}

// Exercício 10

function calcularPA() {
    var pa = document.getElementById('inputValor').value
    var pg = document.getElementById('inputRaiz').value
    document.getElementById('calcPA').addEventListener('click', (e) => {
        e.preventDefault()
        if (!pa.length || !pg.length) {
            alert('Preencha os campos!')
        } else {
            var array = []
            var valor = parseInt(document.getElementById('inputValor').value)
            array.push(valor)
            var raiz = parseInt(document.getElementById('inputRaiz').value)
            array.push(raiz)
            resultado = valor + raiz
            for (i = 0; i < 8; i++) {
                resultado = resultado + raiz
                array.push(resultado)
            }
            alert(array)
        }
    })
}

calcularPA()

function calcularPG() {
    var pa = document.getElementById('inputValor').value
    var pg = document.getElementById('inputRaiz').value
    var element = document.getElementById('calcPG')

    element.addEventListener('click', (e) => {
        e.preventDefault()
        if (!pa.length || !pg.length) {
            alert('Preencha os campos!')
        } else {
            var array = []
            var valor = parseInt(document.getElementById('inputValor').value)
            array.push(valor)
            var raiz = parseInt(document.getElementById('inputRaiz').value)
            array.push(raiz)
            resultado = valor * raiz
            for (i = 0; i < 8; i++) {
                resultado = resultado * raiz
                array.push(resultado)
            }
            alert(array)
        }
    })
}

calcularPG()