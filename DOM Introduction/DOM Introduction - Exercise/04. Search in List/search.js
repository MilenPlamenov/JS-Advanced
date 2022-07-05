function search() {
   const elements = Array.from(document.querySelectorAll('ul li'));
   let input = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matches = 0;

   elements.forEach((el) => {
      if (el.innerHTML.includes(input)) {
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
         matches += 1
      } else {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = '';
      }
   })

   result.innerText = `${matches} matches found`;

}
