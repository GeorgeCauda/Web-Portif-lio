function mostrarNome(el) {
    // Oculta todos os h3 de todas as habilidades
    document.querySelectorAll('.habilidades h3').forEach(h => h.style.display = 'none');
    
    // Mostra apenas o h3 do elemento clicado
    const titulo = el.querySelector('h3');
    titulo.style.display = 'block';
}
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio automático

        // Pega os valores dos campos
        const nome = form.querySelector('input[placeholder="Seu nome completo:"]').value.trim();
        const email = form.querySelector('input[placeholder="Seu e-mail:"]').value.trim();
        const numero = form.querySelector('input[placeholder="Seu número:"]').value.trim();
        const mensagem = form.querySelector('textarea').value.trim();

        // Verificação simples se os campos estão preenchidos
        if (!nome || !email || !numero || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Aqui você pode adicionar outras validações, ex: email válido
        if (!email.includes("@")) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        // Se passou nas validações
        alert("Mensagem enviada com sucesso!\nNome: " + nome + "\nEmail: " + email);

        // Se depois quiser mesmo enviar o formulário:
        form.submit();
    });
}); 