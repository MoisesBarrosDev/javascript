meuescopo =  () => {
const form = document.querySelector('.formulario');
const resultado = document.querySelector('.resultado');
const pessoas = [];

/* 
// poderia ser feito assim:
form.onsubmit = function (evento){
evento.preventDefaut();
alert(1);
console.log('foi enviado');
}
*/
recebeEventoform = (evento) => {
  evento.preventDefault();

const nome =form.querySelector('.nome');
const sobrenome =form.querySelector('.sobrenome');
const peso =form.querySelector('.peso');
const altura =form.querySelector('.altura');
pessoas.push({
  nome: nome.value,
  sobrenome: sobrenome.value,
  peso : peso.value,
  altura : altura.value
})
console.log(pessoas);
resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} `+
`${peso.value} ${altura.value}</p>`;

}
form.addEventListener('submit', recebeEventoform);
}
meuescopo();