let objectsFound = 0;

function showGameScreen() {
    document.getElementById('initialScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'flex';
    document.getElementById('obj1').style.display = 'block';
    document.getElementById('obj2').style.display = 'block';
    document.getElementById('obj3').style.display = 'block';
}

function startHunt() {
    objectsFound = 0;
    document.querySelectorAll('.message-box').forEach(msg => msg.style.display = 'none');
}

function foundObject() {
    const object = event.target; // Obtém o objeto clicado
    object.style.display = 'none';
    objectsFound++;
    createParticles(object.offsetLeft + object.offsetWidth / 2, object.offsetTop + object.offsetHeight / 2);
    const messageIndex = objectsFound; // Usa o número de objetos encontrados para mostrar a mensagem correspondente
    document.getElementById('message' + messageIndex).style.display = 'block';

    if (objectsFound === 3) {
        document.getElementById('message3').style.display = 'block';
    }
}

function openTreasure() {
    const treasureWindow = window.open("", "_blank");
    treasureWindow.document.write(`
        <html>
            <head>
                <title>Seu Tesouro!</title>
                <style>
                    body { font-family: 'Arial', sans-serif; background-color: #6c5ce7; color: #ffeaa7; text-align: center; padding: 50px; }
                    h1 { font-size: 3em; }
                    p { font-size: 1.5em; }
                </style>
            </head>
            <body>
                <h1>Surpresa Final!</h1>
                <p>Você fez um ótimo trabalho! Espero que essa pequena aventura tenha te mostrado o quanto você significa para mim. 🥰</p>
            </body>
        </html>
    `);
    treasureWindow.document.close();
}

function createParticles(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particles');
    document.body.appendChild(particle);
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    setTimeout(() => {
        particle.remove();
    }, 1000);
}
