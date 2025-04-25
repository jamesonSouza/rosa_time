// Data de início do namoro
const startDate = new Date('2025-01-03');
const currentDate = new Date();

// Função para calcular o tempo decorrido e alterar a imagem da rosa
function updateTime() {
    const now = new Date();
    const elapsedTime = new Date(now - startDate);

    // Calculando a diferença em anos, meses e dias
    const years = now.getFullYear() - startDate.getFullYear();
    const months = now.getMonth() - startDate.getMonth() + (years * 12); // Convertendo anos para meses
    const days = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    

    // Cálculo do tempo total em dias para as condições da rosa
    const totalTime = days; // Tempo total em dias para a mudança da imagem

    // Atualizando o tempo na tela (em anos, meses e dias)
    document.getElementById('time').textContent = `${years} anos, ${months % 12} meses, ${days%30} dias`;

    // Alterando a imagem da rosa conforme o tempo
    let roseImage = '';

    if (totalTime < 30) {
        roseImage = '1.png'; // Broto
    } else if (totalTime >= 30 && totalTime < 90) {
        roseImage = '2.png'; // Parcialmente aberta
    } else if (totalTime >= 90 && totalTime < 180) {
        roseImage = '3.png'; // Rosa aberta
    } else {
        roseImage = '4.png'; // Rosa totalmente aberta
    }

    // Alterando a imagem da rosa conforme o tempo
    const rose = document.getElementById('rose');
    rose.src = roseImage;
}

// Atualizando o tempo a cada segundo
setInterval(updateTime, 1000);
