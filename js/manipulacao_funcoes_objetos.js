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
    for (let produto of produtos) {
    let linha = document.createElement('tr');
    let colunaProduto = document.createElement('td');
    let colunaEstoque = document.createElement('td');

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
    { pessoa: "Pedro Oliveira dos Santos", nota: 9 },
    { pessoa: "Ana Maria Pereira", nota: 8 },
    { pessoa: "Aiko Tanaka", nota: 7 },
    { pessoa: "Lucas Costa Silva", nota: 4 },
    { pessoa: "Emily Garcia de Lima", nota:10 },
    { pessoa: "Amira Khan El-Masry", nota: 6 },
];

document.addEventListener("DOMContentLoaded", () => {
    for (let aluno of alunos) {
        let linhaAluno = document.createElement('tr');
        let colunaNomeAluno = document.createElement('td');
        let colunaStatusAluno = document.createElement('td');

        colunaNomeAluno.textContent = aluno.pessoa;
        const status = aluno.nota >= 7 ? "Aprovado" : "Reprovado";
        colunaStatusAluno.textContent = status;
        
        if (status === "Reprovado") {
            colunaStatusAluno.style.color = "red";
        }

        linhaAluno.appendChild(colunaNomeAluno);
        linhaAluno.appendChild(colunaStatusAluno);
        corpoTabelaAlunos.appendChild(linhaAluno);
    }
});

// FUNÇOES COM OBJETOS
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

