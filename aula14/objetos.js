//  quando estiver  começando com um [] é um array.
//  quando estiver  começando com um {} é um objeto.

const pessoa1 = {
name: 'Moises',
sobrenome: 'Barros',
age: 22 , 
years : 'Anos'

};

// console.log(pessoa1.years);




const criarPessoa = (nome,sobrenome,idade) => {
return{
  nome: nome,
  sobrenome: sobrenome,
  idade : idade
  // quando há valores igual, igual oque esta em cima, nao a nescessidade, de fazer assim, posso fazer desse jeito;
  // return{nome,sobrenome,idade};
};
}
const pessoa2 = criarPessoa ('Thiago' ,'Silva', 38);
const pessoa3 =criarPessoa  ('Jessica','Ferreira',50);
const pessoa4 = criarPessoa ('Heitor' ,'Barros', 77);
const pessoa5 = criarPessoa ('Beatriz' ,'Lourenzo', 98);
const pessoa6 = criarPessoa ('João' ,'Francisco', 67);
console.log(pessoa3.idade, pessoa2.idade);

//  Quando tem uma função dentro do objeto, é chamado de método;

const pessoa7 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  Idade: 29,
  // oque vou executar aqui embaixo, dentro desse objeto é uma função, NÃO É NESCESSARIO COLOCAR O FUNCTION E,
  // NEM O '=>' , VEJA ABAIXO :
  fala() {
    console.log(`${this.nome} ${this.sobrenome} Falou Olá!`);
  }
  // tambem posso colocar outra função, nao há limite de funções que possamos colocar noes objetos;
  //    incrementaIdade() {
  //      this.Idade++;
  //        }
  //        
  // 
}
pessoa7.fala();
// toda vez que eu quiser que aumente a idade de acordo com os codigos que estão em comentario, colocamos ;
// pessoa7.fala();
// pessoa7.incrementaIdade();
// pessoa7.fala();
// pessoa7.incrementaIdade();
// assim toda vez que chamamos ele incrementa..