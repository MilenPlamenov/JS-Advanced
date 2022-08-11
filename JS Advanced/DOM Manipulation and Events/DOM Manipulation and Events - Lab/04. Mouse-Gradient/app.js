function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', (e) => {
        document.getElementById('result').innerHTML = `${Math.floor(e.offsetX/gradient.clientWidth*100)}%`;
    });
}