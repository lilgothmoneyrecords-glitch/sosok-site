// Просто прикольный эффект при клике на любое фото
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        // При клике на картинку появляется 67
        const num = document.createElement('div');
        num.innerText = '67';
        num.style.position = 'fixed';
        num.style.left = Math.random() * 100 + 'vw';
        num.style.top = Math.random() * 100 + 'vh';
        num.style.fontSize = '3rem';
        num.style.color = '#ffcc00';
        num.style.fontFamily = 'Impact';
        num.style.pointerEvents = 'none';
        num.style.zIndex = '9999';
        num.style.animation = 'fall 2s forwards';
        document.body.appendChild(num);

        // Удаляем через 2 секунды
        setTimeout(() => num.remove(), 2000);
    });
});

// Добавляем анимацию падения через CSS
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);