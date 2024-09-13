/*
&& -> false && true -> false o "valor mesmo", lembrando: sempre que esse operador estiver na expressão,
e toda operação for vista como verdadeira, ele vai retonar o ultimo valor verdadeiro, caso apareça qualquer valor false,
ele vai ignorar os valores que são true e vai retornar a unica false. veja o exemplo abaixo:

VALORES CONSIDERADOS "FALSE" PELA LINGUAGEM JAVASCRIPT MAS CONHECIDOS POR FALSY:
false -> O VALOR LITERAL
0 -> O NUMERO ZERO
' '  " "  ` `  -> TODAS AS ASPAS QUE ESTÃO VAZIAS TAMBEM É CONSIDERADO FALSE
 null / undefined -> QUE NÃO APONTAM PRA LUGAR NENHUM NA MEMORIA
 NaN -> NOT A NUMBER
*/
console.log('moises barros' && 0 && 'thiago silva'); // repare que ele vai retornar o valor de '0', pois é visto como false.
// ai você se pergunta, porque false? porque retornar 0? o que estou pedindo pra ele exibir é uma string, no meio da expressão, tem um VALOR CONSIDERADO FALSE,
// logo o number '0' é visto como um valor false.
// agora veja ele vai retornar o ultimo valor 'true' da expressão,  ue no caso é a ultima string
console.log('moises barros' && 'thiago silva');

// EXEMPLOS DE 'TUDO' QUE VAI RETORNAR FALSE, NÃO IMPORTA A POSIÇÃO QUE ELE ESTEJA:
console.log('' && 'sabrina');
console.log('thiago' && 'lucas' && "");
console.log('luiz' && 'jessica' && `` && 'francisca');
console.log('luiz' && false && 'amaral' && 'francisca');
console.log('luiz' && 'jessica' && 'amanda' && 0);
console.log('luiz' && 'jessica' && null && 'francisca');
console.log(undefined && 'jessica' && 'mada' && 'francisca');
console.log('luiz' && NaN && 'birina' && 'francisca');

const test = () => {
falaoi = 'oi';
return
}
test();
const vaiexecutar = 'thiago ventura';
console.log(vaiexecutar && falaoi );


/* 
Agora vamos falar do:

|| -> OR -> OU,  PRECISA DE QUALQUER VALOR TRUE APAREÇA NA EXPRESSÃO PARA RETORNAR TRUE, ESSE É DIFERENTE DO DE CIMA, POIS ELE VAI RETORNAR,
O PRIMEIRO VALOR VERDADEIRO QUE APARECER, que no caso é 'Moises Barros' . VEJA ABAIXO:
*/
console.log(0 || false || undefined || null || 'Moises Barros' || 'Thiago Ventura')

//          VAMOS SUPOR   QUE VAMOS CRIAR UM SITE E  O USUARIO PODE SELECIONAR A COR DO SITE.

const corUsuario = null;  // caso o usuario não selecione nenhuma cor vai retornar a cor padrao do sistema. caso ele coloque 'black', ele vai retornar o primeiro true.
const corSistema = corUsuario ||'pink';
console.log(corSistema);

const a = 0;
const b = null;
const c = 'false';//isso é uma pegadinha, pois ele é visto como true, pois está entre aspas.
const d = false;
const e = NaN;

















