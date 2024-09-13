// OPERADORES LOGICOS

/*
  && -> AND -> E -> TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE!, SE HOUVER DENTRO DA EXPRESSÃO 1 FALSE, NAO IMPORTA QUANTOS TRUE TENHA, ELA VAI RETORNAR FALSE.
  || -> OR -> OU -> NÃO É NESCESSARIO QUE TODA EXPRESSÃO RECEBA O VALOR 'TRUE' PRA RETONAR 'TRUE'! 
  ! -> NOT -> NÃO -> O OPERAODR DE NEGAÇÃO ELE MUDA O VALOR ORGINAL. EXEMPLO : SE TIVER !TRUE ELE VAI RETORNAR = 'FALSE', AGORA SE TIVER !!TRUE ELE VAI VOLTAR O VALOR ORIGINAL OU SEJA, ELE VAI RETORNAR = 'TRUE'.

 */

const expressaoAND = true && true && true && true; // -> caso alguma dessa linha for false, a expressão por inteiro, vai retornar false!
console.log(expressaoAND);

const expressaoOR =  false || false || true || false; // -> não importa aonde o true estiver nessa expressão, se o 'true' aparecer na expressão, vai retornar verdadeiro!
console.log(expressaoOR); // -> caso queira que retorne false , toda expressão precisa receber o valor 'false'!


//EXEMPLO NA PRATICA  DE EXPRESSÃO &&
// vamos supor que o usuario digitou o login 'Moises' e a senha '23245';
const usuario01 = 'Moises'; // login formulario.
const senha01 = 23245; // senha formulario.
//           aqui em baixo esse login e senha vai bater no banco de dados , se caso for igual vai retornar true, e ele vai conseguir acesso.
//                                                                |
//                                                                |
//                                  true                  true    |
const logarnaconta = usuario01 === 'Moises' && senha01 === 23245; // caso algum valor desses não bater no 'banco de dados', o usuario, não consiguiria entrar!
//                                          |
//                                          |  
//               SE CASO COLOCASSE O OPERADOR || NO LUGAR DO && O CLIENTE CONSEGUIRIA ACESSAR APENAS POR 1 DADO CERTO, O LOGUIN OU A SENHA, LOGO NÃO FICARIA SEGURO.                                                   
console.log(logarnaconta);

 //                                 OPERADOR DE NEGAÇÃO                                             

console.log(!true); // uma negação inverte o valor.
console.log(!!true) // 2 negações devolve o valor original.