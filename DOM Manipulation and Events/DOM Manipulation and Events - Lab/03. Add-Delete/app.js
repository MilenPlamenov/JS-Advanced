function addItem() {
    let itemToAddValue = document.getElementById('newItemText').value;

    const liElement = document.createElement('li');
    liElement.textContent = itemToAddValue;

    const btnElement = document.createElement('a');
    btnElement.href = '#';
    btnElement.innerHTML = '[Delete]';
    liElement.appendChild(btnElement);
    
    document.getElementById('items').appendChild(liElement);
    btnElement.addEventListener('click', () => {
        let parent = btnElement.parentNode;
        document.getElementById('items').removeChild(parent);
    });
}