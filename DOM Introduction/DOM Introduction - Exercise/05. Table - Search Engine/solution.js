function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   
   function onClick() {
      let input = document.getElementById('searchField').value.toLowerCase();
      let tableElements = Array.from(document.querySelectorAll('tbody tr'));

      tableElements.forEach((el) => {
         if ((el.innerHTML).toLowerCase().includes(input)) {
            el.classList.add("select");
         } else {
            el.classList.remove("select");
         }
      })
   }
}