let num = [5, 8, 2, 9, 3]
num [5] = 7
//add o elemento 6 na ultima posição do vetor
num.push(6)

//num.length - tamanho do vetor
//num.sort() - coloca os elementos em ordem crescente

console.log(num.sort())

for (let index = 0; index < num.length; index++) {
    console.log(num[index])
}

//para cada posição em num (vetor num)
for (let index in num) {
    console.log(`A posição ${index} tem o valor ${num[index]}`)
}

//buscar os valores no vetor
console.log(num.indexOf(8))

//quando o valor não é encontrado no vetor é retornado o valor -1 para nós

let procurar = num.indexOf(5)
if (procurar == -1) {
    console.log('o valor não foi encontrado')
} else {
    console.log(`o valor está na posição ${procurar}`)
}
