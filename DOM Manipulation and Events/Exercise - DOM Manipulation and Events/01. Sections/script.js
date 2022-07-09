function create(words) {
   let mainDiv = document.getElementById('content');
   words.forEach(element => {
      let divEl = document.createElement('div');
      let parEl = document.createElement('p');
      parEl.innerHTML += element;
      parEl.style.display = 'none';

      divEl.addEventListener('click', () => {
         if (parEl.style.display !== 'none') {
            parEl.style.display = 'none'
         } else {
            parEl.style.display = 'block'
         }
      });

      divEl.appendChild(parEl);
      mainDiv.appendChild(divEl);
   });
}