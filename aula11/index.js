
// Solicita ao usuário que insira um número
const numero = Number(prompt('Digite um número:'));

// Seleciona o elemento <h1> usando seu id
const titulo = document.getElementById('meuTitulo');


// Atualiza o conteúdo do <h1> diretamente com o texto fixo e o número do usuário
titulo.innerHTML = `Seu número é : ${numero}`;

document.body.innerHTML +=` Raiz quadrada : ${numero ** 0.5} <br/>`  ;
document.body.innerHTML += ` O Número inteiro : ${Number.isInteger(numero)} <br/>`;
document.body.innerHTML += ` É NaN : ${Number.isNaN(numero)} <br/>`;
document.body.innerHTML += ` Arredondado pra baixo  : ${Math.floor(numero)}  <br/>`;
document.body.innerHTML += ` Arredondado pra cima   : ${Math.ceil(numero)}  <br/>`;
document.body.innerHTML += ` Com duas casas decimais : ${numero.toFixed(2)}  <br/>`;
