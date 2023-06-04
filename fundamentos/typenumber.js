const peso1 = 1.0;
const peso2 = Number('2.0');
console.log(peso1, peso2);

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2);
console.log(media);

//.isInteger confirma se a variável é um valor inteiro
console.log(Number.isInteger(peso1));
let exemplo = 3.1
// A saída será false pois 3.1 não é inteiro
console.log(Number.isInteger(exemplo));

// .toFixed limita o número de casa decimais
console.log(media.toFixed(2));

// Cria uma representação em string do objeto que o chama
console.log(media.toString());
console.log(media.toString(2)); // (2) cria uma representação em binário
console.log(typeof media);

/* *********** FUNÇÕES ***********
* .isInteger
* .toFixed
* .toString
*/ 