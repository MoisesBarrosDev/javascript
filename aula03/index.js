/* moises yonatha da silva , 75 anos , altura de 1,90
pesa 80kg, seu imc 25.925925925925925924
moises nasceu em ...*/

const nome = 'Moises Yonatha ';
const sobrenome = 'Da Silva';
const idade = 75;
const peso = 80;
const alturaEmM = 1.90;
let ano = 2024;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoDeNascimento = ano - idade;
console.log(` Meu nome é,${nome} ${sobrenome}, minha idade é de ${idade} Anos, porem estou pesando ${peso}Kg, minha altura é de ${alturaEmM} M, o meu imc é ${indiceMassaCorporal}, nasci no ano de ${anoDeNascimento}`   )


