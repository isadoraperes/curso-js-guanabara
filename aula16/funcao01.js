function parimpar(numero) {
    if (numero %2 == 0) {
        return 'numero par'
    } else {
        return 'numero impar'
    }
}

let resultado = parimpar(4)
console.log(resultado)
console.log(parimpar(226))