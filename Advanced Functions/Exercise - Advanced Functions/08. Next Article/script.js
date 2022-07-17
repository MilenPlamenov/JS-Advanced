function getArticleGenerator(articles) {
   let div = document.getElementById('content');
    let index = 0
    return function nextArt() {
        if (articles[index] !== undefined) {
            let art = document.createElement('article');
            art.innerText = articles[index];
            div.appendChild(art)
            index ++
        } 
   }
    nextArt
}
