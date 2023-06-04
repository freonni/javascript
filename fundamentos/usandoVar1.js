
{ 
    { 
        { 
            { 
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

// var tem seu escopo dentro de uma função
// significa que se uma var é definida dentro de 
// uma função, ela só poderá ser usada dentro da mesma
function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)