function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}
function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/supermancbs/repos')
  req.send()
}


function getCommits(el) {
  const name = el.dataset.repo
  const req = new XMLHttpRequest()
  req.addEventListener("load", showCommits);

  req.open("GET", 'https://api.github.com/repos/supermancbs/Active-Record-Association-Methods-web-0616')
  req.send()
}

function showCommits() {
  const commit = JSON.parse(this.responseText)
  
  const commitsList = `${commit.name} + ${commit.language}`
  document.getElementById("commits").innerHTML = commitsList
}
