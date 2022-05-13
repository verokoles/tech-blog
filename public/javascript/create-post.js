// create a new post with title and text 
async function newFormHandler(event) {
    event.preventDefault();
    // create title and content, await the api/posts
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('input[name="post-content"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
