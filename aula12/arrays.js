// para acessar esses nomes, os indices de cada string você ler assim... veja abaixo

//                0         1         2        3      
const alunos = ['Thiago', 'Pedro', 'Isack', 'Lucas'];

// DENTRO DOS ARRAYS [], PODEMOS COLOCAR FUNÇÕES, NUMEROS , STRINGS .. ETC..

// esse codgio no caso é pra saber se de fato é um array ou não, SE APARECER TRUE É PORQUE É UM ARRAY
// SE APARECER FALSE É PORQUE NÃO É UM ARRAY
// console.log(alunos instanceof Array);

// para saber oque é, se é uma string ou number ou objetos e etc,
// console.log(typeof alunos);


// alunos.push('Mauricio');
// alunos.push('Fernando');
// console.log(alunos.slice(0,-1));

// também posso acessar um indicr que não existe;
// que vai ressalter em : undefined
// console.log(alunos[50]);

// para tirar algo dentro de qualquer indice,tendo em vista que ficará vazia;
// perceba que o valor ficara vazio resultando em = undefined

// delete alunos[3];
// console.log(alunos[3]);


// Para Remover algo dentro do array,no caso  o primeiro elemento é removido, existe uma função;
// para retornar um elemento removido, no caso para ver oque foi removido, veja abaixo;

//  const removido = alunos.shift();
//  console.log(removido);
//  console.log(alunos);


// Para Remover algo dentro do array,no caso o ultimo elemento é removido, existe uma função;
// para retornar um elemento removido, no caso para ver oque foi removido, veja abaixo;

// const removido = alunos.pop();
// console.log(removido);
// console.log(alunos);


// existe uma função para colocar no inicio do array;
// caso você utilize esse codigo todos os elementos vão mudar de indice,
// thiago vai pro 1, pedro vai pro 2, Isack 3, Lucas vai pro 4, 
//  e oque você adiciona vai pro 0, que no caso é o inicio

// alunos.unshift('Francisco');
// console.log(alunos);

// existe uma função para colocar um elemento ao final do array
// alunos.push('Luiza');
// console.log(alunos);

// caso queira adicionar depois da ultima string é assim;
//  alunos[alunos.length] = 'Luiza';
//  alunos[alunos.length] = 'Jessica';
//  alunos[alunos.length] = 'João';
//  console.log(alunos);

// caso eu queira adicionar mais alguma coisa dentro do arrays
// alunos[4]='Moises';
// console.log(alunos);

// caso queira ver o tamanho do array;
// console.log(alunos.length);


// caso eu queira mudar o valor de uma das variaveis de cima, veja o codigo abaixo
// alunos[0] = 'francisco';
// console.log(alunos);


// para acessar cada nome veja abaixo como faz;
// console.log(alunos);
// console.log(alunos[3]);
// console.log(alunos[0]);
// console.log(alunos[1]);



/*    
const descreve uma variável que não pode ser reatribuída (com o operador de atribuição =). Depois de criá-la, não podemos fazer algo assim:

const nome = 'luiz';
nome = 'joão'; // Erro: Assignment to constant variable.
Porém, existe uma diferença entre variável e valor.

Variáveis são como um apelido para um valor, uma espécie de alias para mencionar algum valor salvo na memória.

Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores são imutáveis, como number, string, boolean, undefined, null, symbol e bigint (os primitivos todos são imutáveis). Outros tipos são mutáveis, como arrays e objetos (objetos em geral são mutáveis, com exceção de null).

Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. Como é o caso do array, que pode ser composto por vários outros tipos de dados.

Quando usamos const com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de const não permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar essa constante).

Já quando usamos const com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.

Por este motivo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.

Exemplos:

Isso pode

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 
Isso NÃO pode

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable.

*/

