//MANIPULAÇÃO DE OBJETOS
// 1 - estoque de produtos
const produtos = [
    { nome: "RoboVac A89S-07", estoque: 9 },
    { nome: "Quantum EarPhones", estoque: 17 },
    { nome: "Carregador Solar Deluxe", estoque: 32 },
    { nome: "Aventura Oculus Fire VR", estoque: 5 }
];

function somarEstoque(){
    let estoqueTotal = 0;
    for (let produto of produtos) {
        estoqueTotal += produto.estoque;
    }
    return estoqueTotal;
}

function preencherTabela (produtos) {
    for (var produto of produtos) {
    let linha = document.createElement('tr');
    var colunaProduto = document.createElement('td');
    var colunaEstoque = document.createElement('td');

    colunaProduto.textContent = produto.nome;
    colunaEstoque.textContent = produto.estoque;

    linha.appendChild(colunaProduto);
    linha.appendChild(colunaEstoque);
    corpoTabelaProdutos.appendChild(linha);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    preencherTabela(produtos);
    estoqueTotalHtml.textContent = `Estoque total: ${somarEstoque(produtos)}`;
});

// 2 - aprovação de estudantes
const alunos = [
    { pessoa: "Pedro Oliveira dos Santos", nota: 8.5 },
    { pessoa: "Ana Maria Pereira", nota: 5.5 },
    { pessoa: "Aiko Tanaka", nota: 9.5 },
    { pessoa: "Lucas Costa Silva", nota: 4 },
    { pessoa: "Emily Garcia de Lima", nota: 10 },
    { pessoa: "Amira Khan El-Masry", nota: 6 },
    { pessoa: "Monica Cerqueira Gonçalves", nota: 7.5 },
];

document.addEventListener("DOMContentLoaded", () => {
    for (let aluno of alunos) {
        let linhaAluno = document.createElement('tr');
        let colunaNomeAluno = document.createElement('td');
        let colunaStatusAluno = document.createElement('td');

        colunaNomeAluno.textContent = aluno.pessoa;
        const status = aluno.nota >= 6 ? "Aprovado" : "Reprovado";
        colunaStatusAluno.textContent = status;
        
        if (status === "Reprovado") {
            colunaStatusAluno.style.color = "red";
        }

        linhaAluno.appendChild(colunaNomeAluno);
        linhaAluno.appendChild(colunaStatusAluno);
        corpoTabelaAlunos.appendChild(linhaAluno);
    }
});

// 4 - alunos acima da média

document.addEventListener("DOMContentLoaded", () => {
    let somaNotas = 0;
    for (let aluno of alunos) {
        somaNotas += aluno.nota;
    }
    const notaMedia = somaNotas / alunos.length;
    notaMediaHtml.textContent = `Nota média: ${notaMedia.toFixed(2)}`;

    for (let aluno of alunos) {
        let linhaAlunoMedia = document.createElement('tr');
        let colunaNomeAlunoMedia = document.createElement('td');
        let colunaStatusAlunoMedia = document.createElement('td');
        
        if (aluno.nota > notaMedia) {
            colunaNomeAlunoMedia.textContent = aluno.pessoa;
            colunaStatusAlunoMedia.textContent = aluno.nota;
            linhaAlunoMedia.appendChild(colunaNomeAlunoMedia);
            linhaAlunoMedia.appendChild(colunaStatusAlunoMedia);
            corpoTabelaMedia.appendChild(linhaAlunoMedia);
        }
    }
});

// FUNÇOES COM OBJETOS
// 1 - média de preço de produtos
const precos = [899.90, 279.40, 129.90, 2499.00];
produtos.forEach((produto, index) => produto.preco = precos[index]);

function calcularMedia(){
    let soma = 0;
    for (let preco of precos) {
        soma += preco;
    }
    const media = soma / precos.length;
    precoMedioHtml.textContent = `Média: ${media}`;
}

function preencherTabelaPrecos() {
    for (let produto of produtos) {
        let linhaPreco = document.createElement('tr');
        let colunaProduto = document.createElement('td');
        let colunaPreco = document.createElement('td');

        colunaProduto.textContent = produto.nome;
        colunaPreco.textContent = produto.preco;
    
        linhaPreco.appendChild(colunaProduto);
        linhaPreco.appendChild(colunaPreco);
        corpoTabelaPrecos.appendChild(linhaPreco);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    calcularMedia(precos);
    preencherTabelaPrecos(precos);
});


// 2 - alunos com nota acima de 8

function preencherTabelaAlunos() {
    for (let aluno of alunos) {
        let linhaAluno = document.createElement('tr');
        let colunaNomeAluno = document.createElement('td');
        let colunaNotaAluno = document.createElement('td');
   
        if (aluno.nota > 8 ) {
            linhaAluno.appendChild(colunaNomeAluno);
            linhaAluno.appendChild(colunaNotaAluno);
            corpoTabelaAlunos2.appendChild(linhaAluno);
            colunaNomeAluno.textContent = aluno.pessoa;
            colunaNotaAluno.textContent = aluno.nota;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    preencherTabelaAlunos(alunos);
});

