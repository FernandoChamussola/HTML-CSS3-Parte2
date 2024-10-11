document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const codigoInput = document.getElementById('codigo').value; // Obtém o valor do campo de entrada
    validar(codigoInput); // Chama a função de validação
});

function validar(codigo) {
    // Verifica se o código é válido
    if (codigo == 20062013) {
        // Redireciona para a página do menu
        window.location.href = 'menu.html'; // Substitua 'menu.html' pelo nome correto do seu arquivo
    } else {
        // Exibe um alerta caso o código não seja válido
        alert('Código não validado!');
    }
}



