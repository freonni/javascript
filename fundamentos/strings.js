const escola = "Cod3r"

// Retorna o caractere no indice 4 = r. [0,1,2,3,4]
console.log(escola.charAt(4))

// Se o valor for além do indice da string
// Retorna um valor vazio ao invés de gerar erro
console.log(escola.charAt(5))

// Retorna o valor do caractere na tabela ASCII. 3 ASCII = 51
console.log(escola.charCodeAt(3))

// Procura em que indice o caractere está na string
console.log(escola.indexOf('3'))

// Retorna os caracteres da string a partir do indice selecionado
console.log(escola.substring(1))
// Retorna os caracteres da string no intervalo de indice selecionado
console.log(escola.substring(0, 3))

// Concatenação
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

// Substitui o caractere selecionado por outro
console.log(escola.replace(3, 'e'))

// Converte uma string separada por virgulas para um array
// Selecionasse o separador dentro da função .split
console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana3Maria3Pedro'.split('3'))