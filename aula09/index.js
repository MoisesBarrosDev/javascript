// padrão da conta que o javascrippt utiliza,IEEE 754-2008

let num1 = 0.7; // number 
let num2 = 0.1; // number
 num1 += num2; // 0.8
 num1 += num2;// 0.9
 num1 += num2; // 1.0

 num1 = Number(num1.toFixed(2));
 console.log(num1);
 console.log(Number.isInteger(num1))


//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^
//  esse exemplo acima existe outra maneira de fazer para arrendondar pra 1.0 olhe o exemplo abaixo;

/* 
let num1 = 0.7; // number 
let num2 = 0.1; // number
 num1 = ((num1*100) + (num2*100)) /100;  0.8
 num1 = ((num1*100) + (num2*100)) /100;  0.9
 num1 = ((num1*100) + (num2*100)) /100;  1.0
 console.log(num1);
 console.log(Number.isInteger(num1))
*/





// let num1 = 10.3988;
// let num2 = 50;

// para transformar ele em uma string, temporatiamente;
// console.log(num1.toString()+ num2); // perceba que vai concatenar ao inves de somar.. a variavel num1 vai continuar sendo um number.

// para trasformar ele em uma string para sempre;
// num1 = num1.toString();

//  caso eu queira a versão binaria do numero da variavel;
// console.log(num1.toString(2));

// quando um numero está grande e você quer cortar as casas decimais
// console.log(num1.toFixed(2));  <- atenção dentro tem o numero '2', isso sgnifica as casas decimais do numero que está dentro da variavel.
//                     ^- atenção pois o toFixed arredonda o valor da sua variavel  


//  caso eu queira saber se o numero é inteiro ou não;
// console.log(Number.isInteger(num1)); -> caso o numero for inteiro vai aparecer true, se for um numero quebrado exemplo; 10.25/ 13.23 , entre outros numeros nesse padrao vai aparecer false


//  caso queira saber se a conta é invalida, lembrando que se for uma conta invalida vai aparecer true, caso contrario false
let temp = 38 * 'ola';
console.log(Number.isNaN(temp));