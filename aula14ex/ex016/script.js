var start = document.getElementById('start')
var finish = document.getElementById('finish')
var jump = document.getElementById('jump')
var res = document.getElementById('res')

function counting() {
    if (validation() == false) {
        return false
    } else {
        res.innerHTML = 'Contando:  '

        //contagem crescente
        if (Number(start.value) < Number(finish.value)) {
            for (let index = Number(start.value); index <= Number(finish.value); index += Number(jump.value)) {
                res.innerHTML += `${index}\n \u{1F308}`
            }
        //contagem decrescente
        } else {
            for (let index = Number(start.value); index >= Number(finish.value); index -= Number(jump.value)) {
                res.innerHTML += `${index}\n \u{1F308}`
            } 
        }       
        res.innerHTML += `\u{1F6A9}` 
    }    
}

function validation() {
    if (start.value == "") {
        res.innerHTML = `<p>Impossível contar. Digite um número inicial para a contagem.</p>`
        start.focus()
        return false
    } else if (jump.value == 0 || jump.value == null) {
        alert('O número digitado para pular é inválido. Adotamos o pulo de 1 em 1 para essa contagem.')
        jump.value = 1
    }
}