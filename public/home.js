
document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
  
    const res = await fetch('/post', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
  
    if (!res.ok) {
      alert('Erreur pour récupérer les posts');
      return;
    }
  
    const posts = await res.json();
    const postList = document.getElementById('postList');
  
    posts.forEach(post => {
      const postEl = document.createElement('div');
      postEl.className = 'post';
      postEl.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <small>Par ${post.username} - ${post.created_at}</small>
      `;
      postList.appendChild(postEl);
    });
  });
  