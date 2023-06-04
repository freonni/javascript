let numero = 1

// let tem escopo de bloco
// quando se tem variavel no escopo menor este recebe preferencia

{
    let numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)