const valores = [7.7, 8.9, 6.3, 9.2]
// Retorna os indices selecionados
console.log(valores[0], valores[3])
// Ao acessar um indice inexistente retorna Undefined
console.log(valores[4])

// O indice 4 recebe o valor 10 - adicionar ou alterar
valores[4] = 10
// Lista todos os indices
console.log(valores)
// Retorna o tamanho do array
console.log(valores.length)

// Função .push adiciona novos itens ao array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// Retira o ultimo item do array
console.log(valores.pop())
// Retira o item selecionado
delete valores[0]

console.log(valores)

console.log(typeof valores)