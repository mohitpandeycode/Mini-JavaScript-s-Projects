let card = document.getElementById('card')
let start = document.getElementById('start')
const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)

start.addEventListener('click', () => {
    if (xhr.readyState == XMLHttpRequest.OPENED) {
        xhr.send();
      }
})

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        image = data.avatar_url;
        Name = data.name;
        followers = data.followers;
        bio = data.bio;
    }

    card.innerHTML = `
<div class="card" style="width: 18rem;">
<img src="${image}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${Name}</h5>
    <p class="card-text">${bio}</p>
    <a href="#" class="btn btn-primary">Followers (${followers}+)</a>
</div>
</div>
`
}