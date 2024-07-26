document.addEventListener('DOMContentLoaded', function() {
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    // Formata a hora para exibição
    var horaFormatada = hora.toString().padStart(2, '0') + ':' + minutos.toString().padStart(2, '0') + ':' + segundos.toString().padStart(2, '0');

    // Seleciona o span onde a hora será exibida e atualiza o conteúdo
    const horaSpan = document.getElementById('hora');
    horaSpan.textContent = horaFormatada;

    const button = document.getElementById('verificar');
    const input = document.getElementById('text');
    const respostaDiv = document.getElementById('resposta');
    const dance = document.getElementById('dance');

    button.addEventListener('click', function() {
        const userInput = input.value.trim().toLowerCase();

      

        if (userInput == 'sim') {
            dance.src = 'nois.gif';
            respostaDiv.innerHTML = 'Ownn meudeuxuu, eu também te amo <br> minha princesa';
        } else if (userInput == 'não') {
            dance.src = 'cry.gif';
            respostaDiv.innerHTML = 'Como asi my amor difgitou nãooao &#128557; <br>num mi ama mais?';
        } else {
            respostaDiv.innerHTML = 'Por favor, responda com "sim" ou "não".';
            dance.src = 'dance_fucker.gif';
        }
    });
});
