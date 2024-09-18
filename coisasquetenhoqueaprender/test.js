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

// const novoarray = arrayy
// .filter(item => item % 2 !== 0) // aqui ele está filtrando os números impares do array. o bom é que pode juntar os métodos, veja abaixo;
// .map(item => item * 10); // aqui ele está percorrendo o array, multiplicando cada item por 10. 


// o every vai retornar um true ou false = sgnifica boolean. e ele so vai retonar isso se todos os itens satisfazem uma condição
// vai retornar true se todos os itens passarem na condição que eu coloquei dentro da função.
// vai retornar false se pelo menos 1 não bater certinho com a condição.
// veja abaixo:

// const todososItensSãoNumeros = arrayy.every(item => {
// return typeof item === 'number';
// } );


// o some vai verificar se pelomenos 1 item satisfaz a condição.
//  tambem retornar um boolean.

// const peloMenosUmItemNaoEUmNumero = arrayy.some(item=>{
//   return typeof item != 'number';
// })


//  o find serve para encontrar apenas 1 item dentro do array.
//  no caso ele vai retornar o primeiro item que satifaz a condição, no exemplo aqui abaixo,
//  ele vai retornar o primeiro numero par dentro do array. 

// const par = arrayy.find(item =>{
//   return item % 2 === 0
// });


//  o findIndex faz a mesma coisa que o find a diferença é que ele retorna o indice
//  no codigo abaixo ele vai retornar do primeiro valor par o indice em que ele está.
//  veja abaixo:

// const par = arrayy.findIndex(item =>{
//   return item % 2 === 0
// });


//  o reduce a sintaxe dele ja é um pouco diferente ele precisa de um parametro antes e depois

const soma = arrayy.reduce((acc,item) =>{  // dentro do objeto recebe 2 informações a primeira que é chamada de acumuleitor(acc),e a segunda é cada informação do array. 

//   document.body.innerText += acc +  ','  + item + '---'
//  retorna a nova soma acumulada
return acc + item

}, 0); // no caso aonde está esse 0 é aonde ele vai começar, pode tambem colocar os {} 


// DETALHAMENTO DO REDUCE 

/* 

### Sintaxe do `reduce`

A função `reduce` é usada para reduzir um array a um único valor. Ela recebe dois parâmetros principais:

1. **Função Redutora**: Esta função é chamada para cada elemento do array e tem dois parâmetros:
   - **Acumulador (`acc`)**: Este é o valor que vai acumulando os resultados ao longo das iterações. Começa com um valor inicial (que você pode definir) e é atualizado a cada passo.
   - **Elemento Atual (`item`)**: Este é o valor atual do array que está sendo processado.

2. **Valor Inicial**: Este é o valor inicial do acumulador. Se você não fornecer um valor inicial, o `reduce` usará o primeiro elemento do array como valor inicial e começará a iteração a partir do segundo elemento.

### Exemplo Explicado

Vamos revisar e explicar o exemplo que você forneceu:

```javascript
const arrayy = [1, 2, 3, 4, 5]; // Array de números

const soma = arrayy.reduce((acc, item) => {
  // Adiciona o valor do acumulador e o valor atual ao texto do documento
  document.body.innerText += acc + ',' + item + '---';

  // Retorna a nova soma acumulada
  return acc + item;
}, 0); // O valor inicial do acumulador é 0
```

### Passo a Passo

1. **Valor Inicial**: O valor inicial do acumulador (`acc`) é `0`. Isso significa que, antes de começar a iterar, o acumulador é `0`.

2. **Primeira Iteração**:
   - `acc` é `0` (valor inicial).
   - `item` é `1` (primeiro elemento do array).
   - `acc + item` é `0 + 1`, que é `1`.
   - O acumulador (`acc`) agora é `1`.

3. **Segunda Iteração**:
   - `acc` é `1` (resultado da iteração anterior).
   - `item` é `2`.
   - `acc + item` é `1 + 2`, que é `3`.
   - O acumulador (`acc`) agora é `3`.

4. **Próximas Iterações**:
   - O mesmo processo acontece para os próximos elementos (`3`, `4`, e `5`).

5. **Resultado Final**:
   - Após todas as iterações, o acumulador contém a soma total dos elementos do array, que é `15` no final.

6. **Texto no Documento**:
   - O `document.body.innerText +=` adiciona informações sobre cada iteração ao texto do corpo do documento, mostrando o estado do acumulador e o item atual em cada passo.

### Pontos Adicionais

- **`{}` (Blocos de Código)**: Se a função redutora contém mais de uma linha, você deve usar `{}` para delimitar o bloco de código e garantir que o `return` seja explícito.
- **Sem `{}`**: Se a função redutora é simples e contém apenas uma linha, você pode omitir `{}` e o `return` é implícito.

```javascript
const soma = arrayy.reduce((acc, item) => acc + item, 0);
```

No código acima, o `return` é implícito e o bloco `{}` é omitido.

### Resumo

- **`acc`**: O acumulador, que mantém o resultado da operação até o momento.
- **`item`**: O elemento atual do array que está sendo processado.
- **Valor Inicial**: O ponto de partida do acumulador.

O `reduce` é uma ferramenta poderosa para transformar e resumir dados em arrays de maneira flexível e eficiente. */

// TENPLATE LITERALS

const name = null;
const message = `Bem vindo, ${name ?? 'visitante'}`
document.body.innerText = message;




