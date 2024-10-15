//CONDICIONAIS
// 1 - número entre 1 e 100
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('1a100').addEventListener('submit', function(event) {
        event.preventDefault();
    var numero1a100 = parseFloat(document.getElementById('numero1a100Html').value);
    var resposta1a100 = numero1a100 <= 100 && numero1a100 >= 1;

    resultado1a100.textContent = resposta1a100 === true ? `${numero1a100} está entre 1 e 100.` : `${numero1a100} não está entre 1 e 100.`;
    });
});

// 2 - criança, adolescente ou adulto
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('idade-fase').addEventListener('submit', function(event) {
        event.preventDefault();
    var valorIdade = parseFloat(document.getElementById('valor-idade').value);
    
    resultadoFase.textContent = valorIdade <= 12 ? `É criança.` : valorIdade > 12 && valorIdade < 18 ? 'É adolescente.' :
    'É adulto.';
    });
});

// 3 - dias no mês
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('dias-mes').addEventListener('submit', function(event) {
        event.preventDefault();
    var nomeMes = document.getElementById('nome-mes').value.toLowerCase();
    var dias30 = ["abril", "junho", "setembro", "novembro"];
    var dias31 = ["janeiro", "março", "maio", "julho", "agosto", "outubro", "dezembro"];
    var dias28 = "fevereiro";

    respostaMeses.textContent = dias30.includes(nomeMes) ? `${nomeMes} tem 30 dias` : dias31.includes(nomeMes) ? `${nomeMes} tem 31 dias` : dias28.includes(nomeMes) ? `${nomeMes} tem 28 ou 29 dias` : 'Mês inválido';
    });
});

// 4 - positivo, negativo ou zero
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('positivo-negativo').addEventListener('submit', function(event) {
        event.preventDefault();
    var respostaPosNeg = parseFloat(document.getElementById('numero-pos-neg').value);
    
    respostaPosNegHtml.textContent = respostaPosNeg < 0 ? 'É negativo.' : respostaPosNeg === 0 ? 'Igual a zero.' : 'É positivo.';
    });
});