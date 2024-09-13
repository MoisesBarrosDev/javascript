const criarSoluçao = (nome, sobrenome, numDespesas, despesas, quitada) => {
  return { nome, sobrenome, numDespesas, despesas, quitada };
}

// Exemplo com dados apropriados
const solução1 = criarSoluçao(
  'Moises',
  'Barros',
  3, // número de despesas
  [350, 230, 630], // valores das despesas
  [true, false, true] // status de quitação
);

console.log(solução1);


// LETRA A
/*
 nome:
Descrição: Armazena o nome da pessoa ou da família que está gerenciando as despesas.
Tipo: string

sobrenome:
Descrição: Armazena o sobrenome da pessoa ou da família.
Tipo: string

numDespesas:
Descrição: Armazena o número total de despesas registradas.
Tipo: number (para representar o número de despesas como um inteiro)

despesas:
Descrição: Armazena os valores das despesas registradas.
Tipo: number[] (array de números para armazenar múltiplas despesas)

quitada:
Descrição: Armazena o status de quitação de cada despesa.
Tipo: boolean[] (array de booleanos para indicar se cada despesa foi quitada ou não) */


// LETRA B
/* 
Aqui está a definição dos tipos para cada identificador:
nome: string
sobrenome: string
numDespesas: number
despesas: number[]
quitada: boolean[]
*/



// LETRA C
/*
nome e sobrenome:
Tipo: string: Nomes e sobrenomes são representados por texto e não por números. Portanto, string é o tipo mais adequado para armazenar essas informações.

numDespesas:
Tipo: number: O número total de despesas é um valor inteiro que representa a quantidade de despesas, o que é mais apropriado para um tipo numérico.

despesas:
Tipo: number[]: Como haverá várias despesas, é apropriado usar um array de números (number[]) para armazenar cada despesa individualmente.

quitada:
Tipo: boolean[]: Para indicar se cada despesa foi quitada ou não, um array de booleanos (boolean[]) é ideal porque cada despesa pode estar em um estado de true (quitada) ou false (não quitada).
*/


// LETRA D

/*
nome:
Conjunto de Dados: Strings representando nomes. Exemplos: 'Moises', 'Jaqueline', 'Carlos'.

sobrenome:
Conjunto de Dados: Strings representando sobrenomes. Exemplos: 'Barros', 'Silva', 'Ferreira'.

numDespesas:
Conjunto de Dados: Números inteiros que representam a quantidade total de despesas. Exemplos: 35, 10, 50.

despesas:
Conjunto de Dados: Arrays de números representando os valores das despesas. Exemplos: [200, 150, 630], [50, 75, 100].

quitada:
Conjunto de Dados: Arrays de booleanos representando se cada despesa foi quitada ou não. Exemplos: [true, false, true], [false, false, true].
*/