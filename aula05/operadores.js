// ordem de precedencia
// operadores aritimeticos
/* 
() parentese
** potencialização
* mutiplicação  / divisão  % resto da divisão
+ adição ou concatenação dependendo do contexto, - subtração
*/

//operadores de incremento
/*
Incremento = ++
Decremento = --

toda vez que for usar o Incremento tem que ser com let pois se usar o const da erro exemplo:

const contador = 10;
++contador;
console.log(contador)

tanto faz colocar o  Incremento antes ++contador ou depois contador++ , porem se colocar antes ou depois, na hora que jogar a 
variavel no console.log(), vai aparecer o resultado na hora. agora  se colocar assim;
let contador = 100;
console.log(contador++)
o resultado não vai aparecer que no caso seria 101, pra aparecer,teria que continuar o codigo na proxima linha  que seria;
let contador = 100;
console.log(contador++)
console.log(contador)
ai apareceria o resultado.
 

toda vez que for usar o Decremento tem que ser com let pois se usar o const da erro exemplo:

const contador = 10;
--contador;
console.log(contador)

tanto faz colocar o  Decremento antes --contador ou depois contador-- , porem se colocar antes ou depois, na hora que jogar a 
variavel no console.log(), vai aparecer o resultado na hora. agora  se colocar assim;
let contador = 100;
console.log(contador--)
o resultado não vai aparecer que no caso seria 101, pra aparecer,teria que continuar o codigo na proxima linha  que seria;
let contador = 100;
console.log(contador--)
console.log(contador)
ai apareceria o resultado

o jeito IDEAL tanto pra Incremento ou Decremento, PARA QUE O CODIGO fique melhor;
SERVE TANTO PRA INCREMENTO OU DECREMENTO,LEMBRANDO QUE O INCREMENTO ADICIONA 1 POR VEZ,
O DECREMENTO TIRA 1 POR VEZ, NÃO IMPORTA A POSIÇÃO DA AONDE VAI ESTÁ O ++ OU -- .
let contador  =100;
contador++;
console.log(contador);

*/
 /*
 QUANDO QUISER ACRESCENTAR MAIS DE UM OLHE COMO PODE FAZER;
 1-FORMA,CODIGO ABAIXO ACRESCENTA DE 50 EM 50.
 CONST PASSO = 50;
 LET CONTADOR = 0;

 CONTADOR = CONTADOR + PASSO;
 CONSOLE.LOG(CONTADOR);
 CONTADOR = CONTADOR + PASSO;
 CONSOLE.LOG(CONTADOR);
 CONTADOR = CONTADOR + PASSO;
 CONSOLE.LOG(CONTADOR);

 2-FORMA
 LET CONTADOR = 0;
 CONTADOR += 5;
 CONTADOR += 5;
 CONTADOR += 5;
 CONSOLE.LOG(CONTADOR);

 LEMBRANDO QUE PODE USAR QUALQUER OPERADOR, DEPENDENDO DO QUE VOCÊ QUER!
 3-FORMA 
 LET CONTADOR = 10;
 CONTADOR *= 10;
 CONSOLE.LOG(CONTADOR);
 
 */

 //NaN = Not a number , parseInt (interio), parseFloat (decimais)

 const num1 = 18;
 const num2 = Number (20);
console.log(num1 * num2);
console.log(typeof num2);