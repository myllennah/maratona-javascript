// LAÇOS
// 1 - números ímpares de 1 a 100
document.addEventListener("DOMContentLoaded", () => {
    for (a = 1; a <=100; a++){
        if (a%2 === 1){
            numerosImpares.textContent += a + " ";
        }
    };
});

// 2 - múltiplos de 5 de 1 a 50
document.addEventListener("DOMContentLoaded", () => {
    for (b = 1; b <=50; b++){
        if (b%5 === 0){
            multiplos5.textContent += b + " ";
        }
    };
});

// 3 - soma de números
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('soma-ate-num').addEventListener('submit', function(event) {
        event.preventDefault();
    var c = parseFloat(document.getElementById('numeroInseridoC').value);
    soma = 0;

    for (d = 1; d <= c; d++){
        soma = soma + d;
        resultadoSoma.textContent = `Resultado: ${soma}`;
        }
    });
});