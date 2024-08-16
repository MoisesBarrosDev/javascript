const numero = Number(prompt('Digite um Número :'));
const numeroTitulo = document.querySelector('span#numero-titulo');
const textoTitulo = document.querySelector('div#texto');

numeroTitulo.innerHTML = numero;
textoTitulo.innerHTML += `<p> Raiz Quadrada : ${numero ** 0.5 }</p>`
textoTitulo.innerHTML += `<p> ${numero} é Inteiro : ${Number.isInteger(numero)}</p>`
textoTitulo.innerHTML += `<p> É NaN : ${Number.isNaN(numero)}</p>`
textoTitulo.innerHTML += `<p> Arredondado pra Baixo : ${Math.floor(numero)} </p>`
textoTitulo.innerHTML += `<p> Arredondado pra Cima : ${Math.ceil(numero)}</p>`
textoTitulo.innerHTML += `<p> Com Duas Casas Decimais : ${numero.toFixed(2)}</p>`
