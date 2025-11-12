' '// Script simples para o formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if(nome && email && mensagem) {
        document.getElementById('resposta').innerHTML = `<p>Obrigado pelo seu contato, ${nome}!</p>`;
    } else {
        document.getElementById('resposta').innerHTML = '<p>Por favor, preencha todos os campos.</p>';
    }
});
