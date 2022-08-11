function loadRepos() {
	let username = document.getElementById("username").value;
	let ulElement = document.getElementById("repos");
	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
	.then(res => res.json())
	.then(repos => {
		ulElement.innerHTML = repos.map(repo => `<a href="{${repo.html_url}>"<li>${repo.name}</li></a>`);
	})
}