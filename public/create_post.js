
document.getElementById('postForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const token = localStorage.getItem('token');
  
    const res = await fetch('/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({ title, content })
    });
  
    if (res.ok) {
      window.location.href = 'home.html';
    } else {
      alert('Erreur lors de la création du post');
    }
  });
  