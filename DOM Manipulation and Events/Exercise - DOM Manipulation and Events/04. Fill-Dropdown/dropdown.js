function addItem() {
    let itemText = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');
    
    let selectEl = document.getElementById('menu');
    let newOption = document.createElement('option');
    newOption.value = itemValue.value;
    newOption.innerHTML = itemText.value;

    selectEl.appendChild(newOption);

    itemText.value = '';
    itemValue.value = '';
}