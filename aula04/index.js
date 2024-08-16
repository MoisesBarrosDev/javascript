// tipos primitivos: 
//String,number,undefied,null, boolean ,symbol

const nome = 'Luiz'; //string
const nome1 = "Luiz"; //string
const nome2 = `Luiz`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; // undefined -> não aponta para local nunhum na memoria
const sobrenomeAluno = null; // Nulo -> não aponta para local nunhum na memoria
const aprovado = false; // Boolean = true, false (logico)
// caso queira ver qual o tipo da variavel utilize typeof

let a = 2;
let b = a;
console.log(a,b) // 2,2
a = 3;
console.log(a,b) //3,2
