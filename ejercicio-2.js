//EJERCICIO 2️⃣
// Crea aquí tu código
function obtenerPrimos(max) {
    let newArr = [],
        i,
        z,
        primos = [];
    for (let i = 2; i <= max; ++i) {
        if (!newArr[i]) {
            primos.push(i);
            for (let z = i << 1; z <= max; z += i) {
                //For Anidado
                newArr[z] = true;
            }
        }
    }
    return primos;
}

console.log(obtenerPrimos(10));
console.log(obtenerPrimos(19));