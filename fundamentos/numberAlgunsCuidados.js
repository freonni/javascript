// Javascript retorna infinito
console.log(7 / 0)
// É válido, Javascript retorna '5'
console.log("10" / 2)
// string ganha!
console.log('3' + 2) 
console.log('3' - 2)
// Retorna NaN - Not a Number
console.log("Show!" * 2)
// Não retorna 0.8 por causa de especificações de precisão do Javascript
console.log(0.1 + 0.7)
// Impossível chamar diretamenta o literal com .toString
// console.log(10.toString())
// Solução
console.log((10.345).toFixed(2))