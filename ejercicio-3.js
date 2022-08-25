// EJERCICIO 3️⃣
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let n0 = 0;
    let n1 = 1;
    let resultado = n0 + n1;
    for (var i = 2; i < n; i++) {
        n0 = n1;
        n1 = resultado;
        resultado = n0 + n1;
    }
    return resultado;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(7));
console.log(fibonacci(25));
