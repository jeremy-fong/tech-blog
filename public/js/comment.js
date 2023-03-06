const commentFormHandler = async function(event) {
  event.preventDefault();

  const postId = document.querySelector('.postId').value;

  const message = document.querySelector('#commentMessage').value.trim();

  if (message) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document
  .querySelector('#commentForm')
  .addEventListener('submit', commentFormHandler);
