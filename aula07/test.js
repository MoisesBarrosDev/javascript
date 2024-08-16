let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varAtemp = varA;
varA = varB;
varB = varC;
varC = varAtemp;
// OUTRA FORMA DE FAZER E MAIS ATUALIAZADA [varA,varB,varC] = [varB,varC,varA]
 console.log(varA,varB,varC)