// Variáveis e operações matemáticas
// 1 - conversão °C para F
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('conversaoTemp').addEventListener('submit', function(event) {
        event.preventDefault();
    var tempC = parseFloat(document.getElementById('celsius').value);
    var tempF = (tempC*1.8) + 32;
    
    tempFHtml.textContent = `Temperatura em Fahrenheit: ${tempF}`;
    });
});

// 2 - área de triângulo
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('calculoTriangulo').addEventListener('submit', function(event) {
        event.preventDefault();
    var baseTriangulo = parseFloat(document.getElementById('base-triangulo').value);
    var alturaTriangulo = parseFloat(document.getElementById('altura-triangulo').value);
    var areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
    areaTrianguloHtml.textContent = `A área do triângulo é igual a: ${areaTriangulo}`;
    });
});

// 3 - potência - quadrado e cubo
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('potencia').addEventListener('submit', function(event) {
        event.preventDefault();
    var basePotencia = parseFloat(document.getElementById('base-potencia').value);
    var aoQuadrado = basePotencia** 2;
    var aoCubo = basePotencia**3;

    potenciaQuadrado.textContent = `${basePotencia}² = ${aoQuadrado}`;
    potenciaCubo.textContent = `${basePotencia}³ = ${aoCubo}`;
    });
});

// 4 - potência - outros expoentes
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('potencia2').addEventListener('submit', function(event) {
        event.preventDefault();
    var basePotencia2 = parseFloat(document.getElementById('base-potencia2').value);
    var expoente = parseFloat(document.getElementById('expoente-potencia').value);
    var resultadoPotencia = basePotencia2 ** expoente;

    resultadoPotenciaHtml.textContent = `Resultado: ${resultadoPotencia}`;
    });
});