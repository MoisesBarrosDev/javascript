// NO JAVASCRIPT VOCÊ PODE DIVIDIR UM NUMERO POR 0
console.log(100/0);
// vai chegar um ponto que não vai ter mais "casa", para colocar um numero,e ele vai retornar um infinity
// estar dizendo pra mim que o numero é infinito

// exemplo abaixo sobre um valor boolean
// console.log(!!(100/0));
// isso é visto como true = verdadeiro!


//  objeto math
let num1 = 9.7680569;

// arredonda para baixo;
// let num2 = Math.floor(num1);

// arredonda pra cima 
// let num2 = Math.ceil(num1);

// arredonda pro mais proximo exemplo, se o numero for 9.7680569, vai retornar 10, pois esta proximo do 10.
// se o numero for 9.4680569, vai retornar 9. pois ele nao esta proximo ao 10.
// let num2 = Math.round(num1);

// caso eu queria o maior numero entre uma lista de numeros
// console.log(Math.max(1,2,3,-10,-30,2600,8000,900));

// caso eu queria o menor numero entre uma lista de numeros
//  console.log(Math.min(1,2,3,-10,-30,2600,8000,900));

// para gerar números aleatorios
// const aleatorio = Math.random();
// console.log(aleatorio);

// para gerar numeros aleatorios entre 10 e 5 , e que o numero possa aparecer arredondado.. veja abaixo:
const aleatorio =  Math.round (Math.random()* (10-5) +5);
console.log(aleatorio); 

// o valor de PI
//console.log(Math.PI);

// para pegar a raiz quadrada
// console.log(num1 ** 0.5); 