//  TIPOS DE DADOS PRIMITIVOS (OS VALORES SÃO IMÚTAVEIS)- string,number,boolean,undefined,null (bigint,symbol). 
//  TIPOS DE DADOS PASSADOS POR REFERÊNCIA (OS VALORES SÃO MÚTAVEIS)-  array,object,function.

// let a = [1,2,3];
// let b = [...a]; // quando coloco esses 3 pontinhos e coloco a variavel 'a', ele está pegando e copiando o mesmo valor da variavel a. 
// let c =b;
// console.log(b);

// NESSE CODIGO ABAIXO REPARE, QUE ESTOU MODIFICANDO O VALOR DE A , O VALOR DE B NÃO É ALTERADO POIS ESTAR COPIANDO 
// O VALOR QUE FOI COLOCADO ORIGINALMENTE. POIS EU COLOQUEI {..a}, se eu faço const b = a; ele iria copiar o mesmo
// Valor.

const a = {
  nome:'Moises',
  sobrenome: 'Barros'
};
const b ={...a};
a.nome = 'Vinicius'
console.log(a,b);
