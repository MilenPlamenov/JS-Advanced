function loadRepos() {
   let res = document.getElementById("res");
   const url = 'https://api.github.com/users/testnakov/repos';
   fetch(url)
   .then(res => res.json())
   .then(repos => {
      res.innerHTML = repos.map(repo => `<a href="${repo.html_url}">${repo.url}</a>\n`)
   });
}


// async function loadRepos() {
//    let response = await fetch('https://api.github.com/users/testnakov/repos');
//    let repos = await response.json();

//    return repos;
// }
// let res = document.getElementById("res");
// loadRepos().then(repos => res.innerHTML = repos.map(repo => `<a href="${repo.html_url}">${repo.url}</a>\n`));