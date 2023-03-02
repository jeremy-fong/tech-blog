const commentFormHandler = async function(event) {
  event.preventDefault();

  const postId = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

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
  .querySelector('#newComment-form')
  .addEventListener('submit', commentFormHandler);
