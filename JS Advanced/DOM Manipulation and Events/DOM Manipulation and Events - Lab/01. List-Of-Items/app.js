function addItem() {
    let input = document.getElementById('newItemText').value;
    let items = document.getElementById('items');

    items.innerHTML += `<li>${input}</li>`;
    input.value = '';
}