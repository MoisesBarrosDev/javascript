let numDespesas;
let despesas = [];
let quitada = [];

function iniciarCadastro() {
    numDespesas = parseInt(document.getElementById('numDespesas').value);
    if (isNaN(numDespesas) || numDespesas <= 0) {
        alert("Por favor, insira um número válido de despesas.");
        return;
    }

    document.getElementById('input-section').style.display = 'none';
    document.getElementById('despesas-section').style.display = 'block';

    let despesasList = document.getElementById('despesas-list');
    despesasList.innerHTML = '';

    for (let i = 0; i < numDespesas; i++) {
        despesasList.innerHTML += `
            <div>
                <label for="valor-${i}">Valor da despesa ${i + 1}:</label>
                <input type="number" id="valor-${i}" step="0.01">
                <label for="quitada-${i}">Foi quitada?</label>
                <select id="quitada-${i}">
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                </select>
            </div>
            <br>
        `;
    }
}

function calcularTotais() {
    despesas = [];
    quitada = [];

    for (let i = 0; i < numDespesas; i++) {
        let valor = parseFloat(document.getElementById(`valor-${i}`).value);
        let status = document.getElementById(`quitada-${i}`).value === 'true';
        despesas.push(valor);
        quitada.push(status);
    }

    let totalDespesas = despesas.reduce((acc, curr) => acc + curr, 0);
    let totalQuitado = despesas.reduce((acc, curr, index) => quitada[index] ? acc + curr : acc, 0);
    let totalNaoQuitado = totalDespesas - totalQuitado;

    document.getElementById('totalDespesas').innerText = `Total de despesas: R$${totalDespesas.toFixed(2)}`;
    document.getElementById('totalQuitado').innerText = `Total quitado: R$${totalQuitado.toFixed(2)}`;
    document.getElementById('totalNaoQuitado').innerText = `Total não quitado: R$${totalNaoQuitado.toFixed(2)}`;

    document.getElementById('despesas-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
}