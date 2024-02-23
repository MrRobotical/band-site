let commentsArr = [
  {
    name: 'Victor Pinto',
    timestamp: '11/02/2023',
    text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
  },
  {
    name: 'Christina Cabrera',
    timestamp: '10/28/2023',
    text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
  },
  {
    name: 'Isaac Tadesse',
    timestamp: '10/20/2023',
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

window.addEventListener('load', function (event) {
  // Insert my code for dynamically loding the comments here
  commentsArr.forEach((comment) => {
    //First El to append to:
    const createJsCommentsParentContainer =
      document.querySelector('.comments__posts');

    //Avatar Container via JS
    const createJsAvatarContainer = document.createElement('div');
    createJsAvatarContainer.classList.add('comments__post-new');
    createJsCommentsParentContainer.prepend(createJsAvatarContainer);

    // Avatar El via JS
    const createAvatarOutputEl = document.createElement('div');
    createAvatarOutputEl.classList.add('comments__avatar-loggedIn');
    createJsAvatarContainer.prepend(createAvatarOutputEl);

    //Comments Body Container via JS
    const createJsbodyContainer = document.createElement('div');
    createJsbodyContainer.classList.add('comments__body');
    createJsAvatarContainer.appendChild(createJsbodyContainer);

    //Name - Date Container via JS
    const createJsNameDateContainer = document.createElement('div');
    createJsNameDateContainer.classList.add('comments__name-date-container');
    createJsbodyContainer.appendChild(createJsNameDateContainer);

    // Name El via JS
    const createNameOutputEl = document.createElement('p');
    createNameOutputEl.classList.add('comments__username');
    createJsNameDateContainer.appendChild(createNameOutputEl);
    createNameOutputEl.innerText = comment.name;

    // Date
    const createDateOutputEl = document.createElement('p');
    createDateOutputEl.classList.add('comments__date');
    createJsNameDateContainer.appendChild(createDateOutputEl);
    createDateOutputEl.innerText = comment.timestamp;

    //Comments
    const createCommentOutputEl = document.createElement('p');
    createCommentOutputEl.classList.add('comments__txt');
    createJsbodyContainer.appendChild(createCommentOutputEl);
    createCommentOutputEl.innerText = comment.text;

    // Divider Line -
    const dividerLinesEl = document.createElement('div');
    dividerLinesEl.classList.add('comments__divider-lines');
    createJsCommentsParentContainer.prepend(dividerLinesEl);
  });
});

// My Form event listener
// My Form event listener
// My Form event listener
// My Form event listener
// My Form event listener
// My Form event listener

document.querySelector('#form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const comment = document.querySelector('#comment').value;

  // Clear Inputs
  document.querySelector('#name').value = '';
  document.querySelector('#comment').value = '';

  // Time Stamp attempt - Not sure about this
  const timestamp = new Date().toLocaleDateString('en-US');

  const newComment = {
    name: name,
    timestamp: timestamp,
    text: comment,
  };

  commentsArr.push(newComment);
  console.log(commentsArr);

  //First El to append to:
  const createJsCommentsParentContainer =
    document.querySelector('.comments__posts');

  //Avatar Container via JS
  const createJsAvatarContainer = document.createElement('div');
  createJsAvatarContainer.classList.add('comments__post-new');
  createJsCommentsParentContainer.prepend(createJsAvatarContainer);

  // Avatar El via JS
  const createAvatarOutputEl = document.createElement('div');
  createAvatarOutputEl.classList.add('comments__avatar-loggedIn');
  createJsAvatarContainer.prepend(createAvatarOutputEl);

  //Comments Body Container via JS
  const createJsbodyContainer = document.createElement('div');
  createJsbodyContainer.classList.add('comments__body');
  createJsAvatarContainer.appendChild(createJsbodyContainer);

  //Name - Date Container via JS
  const createJsNameDateContainer = document.createElement('div');
  createJsNameDateContainer.classList.add('comments__name-date-container');
  createJsbodyContainer.appendChild(createJsNameDateContainer);

  // Name El via JS
  const createNameOutputEl = document.createElement('p');
  createNameOutputEl.classList.add('comments__username');
  createJsNameDateContainer.appendChild(createNameOutputEl);
  createNameOutputEl.innerText = name;

  // Date
  const createDateOutputEl = document.createElement('p');
  createDateOutputEl.classList.add('comments__date');
  createJsNameDateContainer.appendChild(createDateOutputEl);
  createDateOutputEl.innerText = timestamp;

  //Comments
  const createCommentOutputEl = document.createElement('p');
  createCommentOutputEl.classList.add('comments__txt');
  createJsbodyContainer.appendChild(createCommentOutputEl);
  createCommentOutputEl.innerText = comment;

  // Divider Line -
  const dividerLinesEl = document.createElement('div');
  dividerLinesEl.classList.add('comments__divider-lines');
  createJsCommentsParentContainer.prepend(dividerLinesEl);
});
