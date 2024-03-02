// GET COMMENTS FROM SERVER
async function loadAndDisplayComments() {
  try {
    const comments = await InstanceOfBandsiteApi.getComments();

    //Parent Element to append to:
    const createJsCommentsParentContainer =
      document.querySelector('.comments__posts');

    // Build elements
    comments.data.forEach((comment) => {
      //Avatar Container
      const createJsAvatarContainer = document.createElement('div');
      createJsAvatarContainer.classList.add('comments__post-new');
      createJsCommentsParentContainer.prepend(createJsAvatarContainer);

      // Avatar element
      const createAvatarOutputEl = document.createElement('div');
      createAvatarOutputEl.classList.add('comments__avatarAnon');
      createJsAvatarContainer.prepend(createAvatarOutputEl);

      //Comments container
      const createJsbodyContainer = document.createElement('div');
      createJsbodyContainer.classList.add('comments__body');
      createJsAvatarContainer.appendChild(createJsbodyContainer);

      //Name & Date container
      const createJsNameDateContainer = document.createElement('div');
      createJsNameDateContainer.classList.add('comments__name-date-container');
      createJsbodyContainer.appendChild(createJsNameDateContainer);

      // Name element
      const createNameOutputEl = document.createElement('p');
      createNameOutputEl.classList.add('comments__username');
      createJsNameDateContainer.appendChild(createNameOutputEl);
      createNameOutputEl.innerText = comment.name;

      // Date element
      const createDateOutputEl = document.createElement('p');
      createDateOutputEl.classList.add('comments__date');
      createJsNameDateContainer.appendChild(createDateOutputEl);
      const dateTimeStamp = new Date(comment.timestamp).toLocaleDateString(
        'en-US'
      );
      createDateOutputEl.innerText = dateTimeStamp;

      //Comments element
      const createCommentOutputEl = document.createElement('p');
      createCommentOutputEl.classList.add('comments__txt');
      createJsbodyContainer.appendChild(createCommentOutputEl);
      createCommentOutputEl.innerText = comment.comment;

      //Likes container
      const likesContainer = document.createElement('div');
      likesContainer.classList.add('comments__likes-container');
      createJsbodyContainer.appendChild(likesContainer);

      //Like icon element
      const likeButton = document.createElement('ion-icon');
      likeButton.setAttribute('name', 'musical-notes-outline');
      likeButton.classList.add('comments__like-btn');
      likesContainer.appendChild(likeButton);

      //Likes counter
      const likesCounter = document.createElement('span');
      likesCounter.classList.add('comments__like-counter');
      likesCounter.textContent = comment.likes;
      likesContainer.appendChild(likesCounter);
      if (likesCounter.textContent.length === 2) {
        likesCounter.classList.add('comments__like-counter-double-character');
      }
      if (comment.likes > 0) {
        likeButton.classList.add('comments__like-btn-active');
      }

      //Attach event listener to the like icons
      likeButton.addEventListener('click', async () => {
        try {
          const updatedLikes = await InstanceOfBandsiteApi.incrementLikes(
            comment.id
          );
          comment.likes = updatedLikes.likes;
          likesCounter.textContent = comment.likes;
          if (comment.likes > 0) {
            likeButton.classList.add('comments__like-btn-active');
          }
        } catch (error) {
          console.error('Error liking comment:', error);
        }
      });

      // Divider Line
      const dividerLinesEl = document.createElement('div');
      dividerLinesEl.classList.add('comments__divider-lines');
      createJsCommentsParentContainer.prepend(dividerLinesEl);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    console.log(error);
  }
}

loadAndDisplayComments();

// FORM EVENT LISTENER
document
  .querySelector('#form')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    //Input variables from Form
    const name = document.querySelector('#name').value;
    const comment = document.querySelector('#comment').value;

    // Time Stamp
    const timestamp = new Date().toLocaleDateString('en-US');

    // Comment object from Form input
    const newComment = {
      name: name,
      comment: comment,
      // timestamp: timestamp, - This line was causing an error
    };

    // INVOKE POST COMMENTS FUNCTION
    const createdCommentResponse = await postComments(newComment);
    const newCommentId = createdCommentResponse.id;

    // // Clear Inputs
    document.querySelector('#name').value = '';
    document.querySelector('#comment').value = '';

    // Post comments to server
    async function postComments(commentData) {
      try {
        const response = await InstanceOfBandsiteApi.postComments(commentData);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        console.log(error);
      }
    }

    //Parent element to append to:
    const createJsCommentsParentContainer =
      document.querySelector('.comments__posts');

    //Container that holds avatar & comments body
    const createJsAvatarContainer = document.createElement('div');
    createJsAvatarContainer.classList.add('comments__post-new');
    createJsCommentsParentContainer.prepend(createJsAvatarContainer);

    // Avatar element
    const createAvatarOutputEl = document.createElement('div');
    createAvatarOutputEl.classList.add('comments__avatar-loggedIn');
    createJsAvatarContainer.prepend(createAvatarOutputEl);

    //Comments container
    const createJsbodyContainer = document.createElement('div');
    createJsbodyContainer.classList.add('comments__body');
    createJsAvatarContainer.appendChild(createJsbodyContainer);

    //Name & date container
    const createJsNameDateContainer = document.createElement('div');
    createJsNameDateContainer.classList.add('comments__name-date-container');
    createJsbodyContainer.appendChild(createJsNameDateContainer);

    // Name element
    const createNameOutputEl = document.createElement('p');
    createNameOutputEl.classList.add('comments__username');
    createJsNameDateContainer.appendChild(createNameOutputEl);
    createNameOutputEl.innerText = name;

    // Date element
    const createDateOutputEl = document.createElement('p');
    createDateOutputEl.classList.add('comments__date');
    createJsNameDateContainer.appendChild(createDateOutputEl);
    createDateOutputEl.innerText = timestamp;

    //Comments element
    const createCommentOutputEl = document.createElement('p');
    createCommentOutputEl.classList.add('comments__txt');
    createJsbodyContainer.appendChild(createCommentOutputEl);
    createCommentOutputEl.innerText = comment;

    //Likes container
    const likesContainer = document.createElement('div');
    likesContainer.classList.add('comments__likes-container');
    createJsbodyContainer.appendChild(likesContainer);

    //Like icon element
    const likeButton = document.createElement('ion-icon');
    likeButton.setAttribute('name', 'musical-notes-outline');
    likeButton.classList.add('comments__like-btn');
    likesContainer.appendChild(likeButton);

    //Likes counter
    const likesCounter = document.createElement('span');
    likesCounter.classList.add('comments__like-counter');
    likesCounter.textContent = 0;
    likesContainer.appendChild(likesCounter);

    //Likes event listener on new comment
    likeButton.addEventListener('click', async () => {
      try {
        const updatedLikes = await InstanceOfBandsiteApi.incrementLikes(
          newCommentId
        );
        likesCounter.textContent = updatedLikes.likes;
        if (updatedLikes.likes > 0) {
          likeButton.classList.add('comments__like-btn-active');
        }
      } catch (error) {
        console.error('Error liking comment:', error);
      }
    });

    // Divider Line element
    const dividerLinesEl = document.createElement('div');
    dividerLinesEl.classList.add('comments__divider-lines');
    createJsCommentsParentContainer.prepend(dividerLinesEl);
  });
