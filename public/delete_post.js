// public/delete_post.js

// Fonction pour supprimer un post par ID
export async function deletePostById(postId) {
    const token = localStorage.getItem('token');
  
    if (!token) {
      alert("Utilisateur non authentifié");
      window.location.href = '/';
      return;
    }
  
    const confirmed = confirm("Es-tu sûr de vouloir supprimer ce post ?");
    if (!confirmed) return;
  
    try {
      const res = await fetch(`/post/${postId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
  
      if (res.ok) {
        alert('Post supprimé avec succès');
        const postDiv = document.getElementById(`post-${postId}`);
        if (postDiv) postDiv.remove(); 
      } else {
        const errorData = await res.json();
        alert('Erreur lors de la suppression du post: ' + (errorData.message || 'Erreur inconnue'));
      }
    } catch (err) {
      console.error('Erreur lors de la requête DELETE :', err);
      alert("Une erreur s'est produite lors de la suppression.");
    }
  }
  