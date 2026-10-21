// Write your code here!
function displayPost(post) {
    const postList = document.getElementById('post-list');

    post.forEach(post => {
        const li = document.createElement('li');

        const h1 = document.createElement('h1');
        h1.textContent = post.title;

        const p = document.createElement('p');
        p.textContent = post.content;

        li.append(h1, p);
        postList.appendChild(li);
    });
}
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => displayPost(posts));
