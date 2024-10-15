// FUNÇÕES
// 1 - divisão
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('funcao-divisao').addEventListener('submit', function(event) {
        event.preventDefault();

    const numA = parseFloat(document.getElementById('dividendo').value);
    const numB = parseFloat(document.getElementById('divisor').value);
    
    function divisao(num1, num2){
        if (num2 === 0) {
            return "Erro: Divisão por zero não produz números reais!";
        } else {
            return num1 / num2;
        }
    }

    const respostaDivisao = divisao(numA, numB);

    resultFuncaoDivisao.textContent = `Resultado: ${respostaDivisao}`;
    });
});

// 2 - ordenar palavras
document.addEventListener("DOMContentLoaded", () => {
    const arrayPalavras = [];

    document.getElementById('form-palavras').addEventListener('submit', function(event) {
        event.preventDefault();

        const novaPalavra = document.getElementById('palavraInseridaForm').value.trim();

        if (novaPalavra) {
            arrayPalavras.push(novaPalavra);
            atualizarLista();
            document.getElementById('palavraInseridaForm').value = '';
        }
    });

    function atualizarLista() {
        palavrasOrdenadasHtml.innerHTML = '';

        const palavrasOrdenadas = arrayPalavras.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        palavrasOrdenadas.forEach(palavra => {
            const li = document.createElement('li');
            li.textContent = palavra;
            palavrasOrdenadasHtml.appendChild(li);
        });
    }
});

// 3 - maior numero
document.addEventListener("DOMContentLoaded", () => {
    const arrayNumeros = [];
    console.log(arrayNumeros);

    document.getElementById('form-maior-numero').addEventListener('submit', function(event) {
        event.preventDefault();

        const novoNumero = parseFloat(document.getElementById('numeroInseridoForm').value);

        if (!isNaN(novoNumero)) {
            arrayNumeros.push(novoNumero);
            atualizarMaiorNumero();
            document.getElementById('numeroInseridoForm').value = '';
        }
    });

    function atualizarMaiorNumero() {
        const maiorNumero = Math.max(...arrayNumeros);
        maiorNumeroHtml.textContent = `Maior número: ${maiorNumero}`;
    }
});

// 4 - inversão de strings
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('form-string-invertido').addEventListener('submit', function(event) {
        event.preventDefault();
        const stringOriginal = document.getElementById('stringInserido').value.trim();
        const stringInvertido = reverseString(stringOriginal);

        stringInvertidoHtml.textContent = `Texto invertido: ${stringInvertido}`;
    });

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

});


