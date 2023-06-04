const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

// Em template strings é possivel 
// e considerado todas as quebras de espaços
// Templates devem ser abertos com "`" simbolo da crase - backtick
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// Também é possivel usar expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)