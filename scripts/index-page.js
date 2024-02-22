document.querySelector('#form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const comment = document.querySelector('#comment').value;

  // Grabing the parent containers here
  const nameParentContainer = document.querySelector(
    '.comments__name-date-container'
  );

  const avatarParentContainer = document.querySelector('.comments__post-new');

  const commentsParentContainer = document.querySelector('.comments__body');

  //
  //   console.log(avatarParentContainer);

  const createNameOutputEl = document.createElement('p');
  createNameOutputEl.classList.add('comments__username');
  nameParentContainer.appendChild(createNameOutputEl);
  createNameOutputEl.innerText = name;

  const createDateOutputEl = document.createElement('p');
  createDateOutputEl.classList.add('comments__date');
  nameParentContainer.appendChild(createDateOutputEl);
  createDateOutputEl.innerText = '02/11/24';

  const createCommentOutputEl = document.createElement('p');
  createCommentOutputEl.classList.add('comments__txt');
  commentsParentContainer.appendChild(createCommentOutputEl);
  createCommentOutputEl.innerText = comment;

  const createAvatarOutputEl = document.createElement('div');
  createAvatarOutputEl.classList.add('comments__avatar-loggedIn');
  avatarParentContainer.appendChild(createAvatarOutputEl);
});
