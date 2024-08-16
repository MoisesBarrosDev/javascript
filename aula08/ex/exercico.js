const nome = prompt('Digite seu nome:');

document.body.innerHTML += `Seu nome é : <strong>${nome}</strong> <br/>` ;
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras. <br />`;
  document.body.innerHTML += `A segunda letra do seu nome é : <strong>${nome.charAt(1)}</strong> <br />`;
  document.body.innerHTML += `Qual o primeiro índice da letra 'S' no seu nome? <strong>${nome.indexOf('s')}</strong> <br />`;
  document.body.innerHTML += `Qual o último índice da letra 'S' no seu nome? <strong>${nome.lastIndexOf('s')}</strong> <br />`;
  document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong> <br />`;
  document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong> <br />`;
  document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toLocaleUpperCase()}</strong> <br />`;
  document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLocaleLowerCase()}</strong> <br />`;
  document.body.innerHTML += `Seu primeiro nome é : <strong>${nome.slice('0','6')}</strong> <br />`;
  document.body.innerHTML += `Seu ultimo nome é :  <strong>${nome.slice('-7')}</strong> <br />`;

