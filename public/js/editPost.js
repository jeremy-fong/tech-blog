const postId = document.querySelector('.postId').value;

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('#postTitle').value.trim();
  const content = document.querySelector('#postContent').value.trim();

  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#editPost-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#deleteBtn')
  .addEventListener('click', deleteClickHandler);
