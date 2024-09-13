/* 
ENTRE 0 - 11 -> BOM DIA.
ENTRE 12 - 17 -> BOA TARDE.
ENTRE 18 - 23 -> BOA NOITE.
*/

//  IF -> PODE SER USADO SOZINHO.
//  sempre que utilizo a palavra ELSE,preciso de um IF antes.
//  eu posso ter varios ELSE IF na checagem. 
//  so pode ter um ELSE na checagem, que no caso esta na ultima linha do codigo.
//  podemos usar condições sem else if, utilizando apenas if e else.
const hora = 24;

if (hora >= 0 && hora <= 11) {
  console.log(`Bom dia`);

} else if (hora >= 12 && hora <= 17) {
  console.log(`Boa tarde`);
}
else if (hora >= 18 && hora <= 23) {
  console.log(`Boa noite`)
} else {
  console.log(`ERROR!! DIGITE UMA HORA VALIDA!`)
}

const tenhoGrana = false; // se colocar o valor true, ele retornaria a primeira condição ; 
if (tenhoGrana) { // PRIMEIRA CONDIÇÃO
  console.log('Vou sair de casa!');
} else { // ULTIMA CONDIÇÃO.         SE COLOCAR QUALQUER VALOR QUE É VISTO COMO FALSE ELE VAI RETORNAR ESSA ULTIMA CONDIÇÃO.
  console.log('Não vou sair de casa!');
}