function tabuada() {
    let num = document.getElementById('num')
    let tabuada = document.getElementById('tabuada')

    if (num.value.length == 0) {
        alert('Por favor, digite um número.')
    } else {
        let n = Number(num.value)
        tabuada.innerHTML = ''
        for (let index = 0; index <= 10; index++) {
            let item = document.createElement('option')
            item.text = `${n} * ${index} = ${n*index}`
            item.value = `tabuada${index}`
            tabuada.appendChild(item)
        }
    }
}