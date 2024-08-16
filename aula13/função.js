//           TIPOS DE COMO CRIAR FUNÇÕES 

// quando tem um parametro a função é recomendado desse jeito, esse '=>' sgnifica a mesma coisa que function, porem
// é mais atualiazado; 
const raiz =  n => n ** 0.5;
console.log(raiz(9));



//   const raiz = function(n){
//   return n ** 0.5;
// }
// console.log(raiz(9));



// function soma(x = 1, y = 9) {
//   const resultado = x + y;
//   return resultado; 
//   // oque está dentro da função, abaixo de return é ignorado;
// }

// const resultado = soma(10,10);
// console.log(resultado)



//   function soma(x, y) {
//   const resultado = x + y;
//   return resultado; 
//   // oque está dentro da função, abaixo de return é ignorado;
// }

// const resultado = soma(6,5);
// console.log(resultado)

// console.log(soma(6,5)); //no caso aqui o valor de x = 6 e o valor de y = 5; execulte o codigo e veja oque acontece
// console.log(soma(50,50));
// console.log(soma(1,1));



//  function = função   saudacao = nome da função  (nome) = o parametro que a função vai receber é um nome
//  function saudacao(nome) {
//  return `Bom dia ${nome}!`;
//  }
//  const variavel = saudacao('Moises');
//  console.log(variavel);