var numero = 1

// não existe escopo de bloco para variavel bar
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)