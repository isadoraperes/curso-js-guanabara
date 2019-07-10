let num = document.getElementById('num')
let list = document.getElementById('list')
let res = document.getElementById('res')
let array = []

// function isNumber(n) {
//     if (Number(n) < 1 && Number(n) > 100) {
//         return true
//     } else {
//         return false
//     }
// }

// function inList(n, l) {
//     if (l.includes(Number(n))) {
//         return true
//     } else {
//         return false
//     }
// }

function add() {
    if (Number(num.value) == '' ||
        Number(num.value) > 100 ||
        Number(num.value) < 1 ||
        array.includes(Number(num.value))) {
            alert('Valor inválido ou já adicionado.')
        } else {
            array.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} foi adicionado.`
            list.appendChild(item)
            res.innerHTML = ''
        }
    num.value = ''
    num.focus()
}

function calcular() {
    if (array.length == 0) {
        alert('Adicione números antes de finalizar')
    } else {
        array.sort()
        let total = array.length
        let menor = array[0]
        let maior = array[array.length-1]
        let soma = 0

        for (let index = 0; index < array.length; index++) {
            soma += array[index];            
        }

        let media = soma/(array.length)

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todos são ${total} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}
