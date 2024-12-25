function toggleCard() {
    const card = document.querySelector('.christmas-card');
    card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}
