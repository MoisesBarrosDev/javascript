// nullish coalescing operator

// const idade = 0;
// document.body.innerText =`sua idade é :  `+( idade ?? 'não informado') ;
//  esse operador ?? ele vai olhar para valores não sgnificativos, que são null,undefined e etc,
// o 0 é um valor primitivo real


// objects

const user ={
  name: 'Moises',
  age: 22,
  address:{
    street:'Rua Joaquim', // um objeto dentro do outro pode.
    number: 123,
  },
};
// document.body.innerText = // JSON.stringify(Object.entries(user)); // esse codigo vai retornar vetores , sendo separado por subvetores, que o primeira coisa que vai aparecer é o inicio do objeto e ele vai retornar parte por parte, execute e veja.
// JSON.stringify(Object.values(user)); // esse codigo vai retornar todos os valores que tem dentro do objeto de forma mais nitida.
// Object.values(user); // esse codigo vai retornar todos os valores que tem dentro do objeto.
// Object.keys(user); // esse codigo vai retornar um vetor com todas as partes do meu objeto.          
// ('name'in user); // esse condigo diz: existe um name denbtro de user? no caso retornar true, caso nõ tivesse nada isa retornar false.





// desestruturação sgnifica conseguir remover parte do meu objeto para uma variavel aparte.
//  exemplo:
// const address = user.address;
// tambem posso fazer : desse jeito abaixo posso puxar até mais de um objeto basta colocar a virgula.
//  tambem serve para renomear variavel que é so colocar os :
// const {address , age : idade } = user;
//  caso queira adiconar uma variavel dentro do  objeto é so colocar: atenção so serve se não tiver uma variavel dentro do objeto escrito nickname.
// const {address , age : idade, nickname = 'thiago' } = user
// document.body.innerText = JSON.stringify(address);
// tambem posso fazer : desse jeito abaixo posso puxar até mais de um objeto basta colocar dentro de um objeto e colocar a  virgula.
// document.body.innerText = JSON.stringify({adress,age});




//  rest operator = resto da operação
// nesse codigo abaixo ele esta pegando o valor name dentro do objeto, e depois de retirar o name ele está me dando o restante das coisas que estão no objeto.
// const {name,...rest} = user;
// document.body.innerText = JSON.stringify(rest);  

// desestruração de array

// const array = [1,2,3,4,5,6,7,8,9];
// //  caso queira pular algum numero, por  exemplo você so quer o numero 1,3 e pular o numero 2 você pode fazer assim;
// //  const [fiirst, , third,...rest] 
// //  percebe que esta vazio entre virgulas assim ele pula o numero 2
// //  document.body.innerText = JSON.stringify({first,third,rest})
// const [first , second,...rest] = array;
// document.body.innerText = JSON.stringify({first,second,rest});

// short syntax

// const name = 'Moises';
// const age = 28;

// const userr = { 
//   name, // ----> short syntax
//   age,
// };
// document.body.innerHTML = JSON.stringify(userr);


//  optional chainigh

// const use ={
//   name: 'Moises',
//   age: 22,
//   address: {
//     street:'Rua Joaquim', // um objeto dentro do outro pode.
//     number: 123,  
//     zip: {
//       code: 8999435235,
//       cityy: 'Rio Sul',
//     },
//     // showfulladdress(){
//     //   return 'oi';
//     // }
    
//   },
// };

// oque esse codigo abaixo quer dizer é que ele so vai chamar a função caso ela exista. 
//                               |____________________________________ 
//                                                                    |
// document.body.innerText = use.address.showfulladdress?.(); <------ | 


// document.body.innerText = use.address?.zip?.code ?? 'Não informado';
//  ESSE PONTO DE ? DPS DO ADDRESS, SGNIFICA  QUE ELE VAI TENTAR ACESSAR O ADDRESS, CASO NÃO EXISTA,
//  ELE NÃO VAI TENTAR ACESSAR MAIS NADA. COLOQUE DO ADDRESS, PRA BAIXO EM COMENTARIO E VEJA OQUE ACONTECE. 

// const usr ={
//   nome: 'Moises',
//   idade: 22,
//   address: {
//     street:'Rua Joaquim', // um objeto dentro do outro pode.
//     number: 123,  
//     zip: {
//       code: 8999435235,
//       cityy: 'Rio Sul',
//     },
//     // showfulladdress(){
//     //   return 'oi';
//     // }
    
//   },
// };
// const key = 'nome';
// document.body.innerText = usr[key];


// METODOS DE ARRAY

 const arrayy = [1,2,3,4,5];
//FORMAS DE PERCORER UM ARRRAY :
// for(const i of arrayy){
//   document.body.innerText += i;
// }

// arrayy.forEach(item =>{
//   document.body.innerText += item;
// })

// so se usa o map quando eu quero transformar o meu array em outra informação porem dentro de outro array.

// const novoarray = arrayy.map(item =>{
//   if (item % 2 === 0){   // essa linha quer dizer, se o numero for par ,  
//     return item * 10; // multiplique ele por 10;
//   }  
//     return item;
// })
// document.body.innerText += JSON.stringify(novoarray);

// map , filter ,every, some , find, findIndex, reduce

//  o filter é diferente do map, pois  nao pode mudar os valores do array, ele serve para 'cortar' ou pegar um pedaço do array.
const novoarray = arrayy
.filter(item => item % 2 !== 0) // aqui ele está filtrando os números impares do array. o bom é que pode juntar os métodos, veja abaixo;
.map(item => item * 10); // aqui ele eestá 
document.body.innerText += JSON.stringify(novoarray); 





