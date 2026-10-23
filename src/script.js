 
document.getElementById("formAvaliacao").addEventListener("submit", function(event) {
    event.preventDefault();
 
    let nome = document.getElementById("nome").value;
    let nota = document.getElementById("nota").value;
    let comentario = document.getElementById("comentario").value;
 
    let novaAvaliacao = document.createElement("div");
    novaAvaliacao.className = "avaliacao";
 
    novaAvaliacao.innerHTML = `
        <h3>${nome}</h3>
        <div class="estrelas">${"★".repeat(nota)}${"☆".repeat(5 - nota)}</div>
        <p>${comentario}</p>
    `;
 
    document.getElementById("listaAvaliacoes").appendChild(novaAvaliacao);
 
    alert("Obrigada pela avaliação!");
 
    document.getElementById("formAvaliacao").reset();
});
 
document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();
 
    let nome = document.getElementById("nomeCadastro").value;
    let mensagem = document.getElementById("mensagemCadastro");
 
    mensagem.innerText = "Obrigada pelo cadastro, " + nome + "!";
 
    document.getElementById("formCadastro").reset();
});