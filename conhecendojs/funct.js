const novaTarefa = document.querySelector('.nova-tarefa');
const listaDeTarefa = document.querySelector('.lista-tarefas');
const botao = document.querySelector('.botaoadicionar');
const resultado = []

buscandoresul = (evento) =>{
evento.preventDefault();
if(novaTarefa.value.trim() === ''){ // Usa trim() para remover espaços em branco
  alert(' Error! Digite uma Tarefa!') 
  return;
}  
resultado.push({
  tarefa:novaTarefa.value,
 
})
console.log(resultado);
listaDeTarefa.innerHTML += `<li>${novaTarefa.value}</li>`
novaTarefa.value = '';
}

botao.addEventListener('click',buscandoresul)
// buscandoresul();
