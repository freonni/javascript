// Hoisting = içar; funciona só com var, a var sendo
// lida em uma linha que está acima da linha em que 
// ela foi declarada
console.log('a =', a)
var a = 2
console.log('a =', a)

// Não funciona com let
console.log('b =', b)
let b = 2
console.log('b =', b)