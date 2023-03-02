const newFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('#postTitle').value.trim();
  const content = document.querySelector('#postContent').value.trim();

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#newPost-form')
  .addEventListener('submit', newFormHandler);
