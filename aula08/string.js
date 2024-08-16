//  indice =     01234567        o indice 0 representa o primeiro caractere.
let umastring = "Um texto";

console.log(umastring[0])
// para saber qual é o indice que a palavra começa, vamos usar;
console.log(umastring.indexOf('texto')) // esse codigo vai informar, por qual indice começa a palavra texto, que no caso é 3.

// nesse codigo abaixo, ele vai procurar a partir do indice que você vai colocar pra achar a letra que você quer, veja abaixo;
console.log(umastring.indexOf('o', 3));// no caso aqui,ele vai procurar apartir do indice 3, que no caso é a letra e,
// apartir da li, ele vai procurar a letra o, e vai me informar qual indice a letra estar, que no caso é 7!

//no caso desse é de tras pra frente, EM VEZ DELE COMEÇAR NA FRASE Um texto, COMO O INDEXOF, ELE VAI COMEAÇAR
// DA LETRA "O" UM TEXTO, E VAI ATÉ O U, QUE É AONDE COMEÇA A FRASE
console.log(umastring.lastIndexOf('U', 3)); // LEIA ASSIM ; DO INDICE 3 PRA TRAS ACHE QUAL INDICE ESTA A LETRA U;

// EXPRESSÃO REGULAR;
console.log(umastring.match(/[a-z]/g)); // o g é nescessario para que funcione!

//similar a o indexof, a diferença é que aceita expressoes regulares
console.log(umastring.search(/[x]/));

// replace , serve para substituir, exemplo abaixo, a variavel está recebendo o valor de "Um texto" e eu vou
// mudar o valor, veja abaixo,
console.log(umastring.replace('Um', 'Outro'));
// mudei o valor de "Um texto" para "Outro texto", porem da pra fazer uma expressão regular veja abaixo;

let segundastring = 'O rato roeu a roupa do rei de roma'
console.log(segundastring.replace(/r/g, '@')) // nesse codigo estou trocando, todas as letras r, por @, mas isso so funciona se colocar o g, pois ele é o inicializador. 

// como saber quantos caracteres tem a string, veja abaixo 
console.log(segundastring.length);

// caso eu queira corta a palavra, olhe abaixo , vou querer que ela corte do indice 2 até o indice 6, no caso sempre temm que colocar a mais, eu quero do 2 a 5, mais vou colocar 1 mais se não vai aparecer oque eu quero.
console.log(segundastring.slice(2, 6));

// caso eu queira dividir uma string
console.log(segundastring.split(' ' , 2)); // dentro dos ( ) colocar a string que eu quero dividir. leia assim, quero que divida os espaços da strings 3 vezes

// caso eu queira a string toda MAIUSCULA , OLHE ABAIXO;
console.log(segundastring.toUpperCase());

// caso eu queira a string toda Minuscula , OLHE ABAIXO;
console.log(segundastring.toLowerCase());

// concatenação formas;
console.log(umastring.concat(', Em um lindo dia.'));
console.log(umastring + ', Em um lindo dia.')
// console.log(`${umastring}, Em um lindo dia.`)
