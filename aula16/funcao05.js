//recursividade
function fatorial(num) {
    if (num == 1) {
        return 1
    } else {
        return num * fatorial(num-1)
    }
}

/*
5! = 5 x 4!

n! = n * (n-1)
1! = 1
*/

console.log(fatorial(5))