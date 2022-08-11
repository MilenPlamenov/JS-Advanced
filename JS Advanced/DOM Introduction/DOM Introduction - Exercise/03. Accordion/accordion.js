function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    let resDiv = document.getElementById('extra');
    if (resDiv.style.display === 'none') {
        resDiv.style.display = 'block';
        btn.innerHTML = 'Less';
    } else {
        resDiv.style.display = 'none';
        btn.innerHTML = 'More';
    }
}