let commentsArr = [
  {
    name: 'Isaac Tadesse',
    timestamp: '10/20/2023',
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
  {
    name: 'Christina Cabrera',
    timestamp: '10/28/2023',
    text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
  },

  {
    name: 'Victor Pinto',
    timestamp: '11/02/2023',
    text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
  },
];

// Sprint 3 below
// Sprint 3 below
// Sprint 3 below
// Sprint 3 below
// Sprint 3 below

class BandsiteApi {
  constructor(apiKey) {
    this.baseURL = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';
    this.apiKey = apiKey;
  }
}

const apiKey = new BandsiteApi('d0eb4df4-5d31-4b4e-ae18-cc5b71f5b1a1');

async function getComments() {
  try {
    const response = await axios.get(
      `${apiKey.baseURL}comments?api_key=${apiKey.apiKey}`
    );
    console.log(response.data);

    // DISPLAY COMMENTS FROM ARRAY
    response.data.forEach((comment) => {
      //Parent Element to append to:
      const createJsCommentsParentContainer =
        document.querySelector('.comments__posts');

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

getComments();

console.log(`${apiKey.baseURL}comments?api_key=${apiKey.apiKey}`);

// EVENT LISTENER & POST COMMENT TO SERVER
// EVENT LISTENER & POST COMMENT TO SERVER
// EVENT LISTENER & POST COMMENT TO SERVER
// EVENT LISTENER & POST COMMENT TO SERVER
// FORM EVENT LISTENER
document.querySelector('#form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const comment = document.querySelector('#comment').value;

  // Time Stamp
  const timestamp = new Date().toLocaleDateString('en-US');

  //Push new comment to array - Sprint 2
  // const newComment = {
  //   name: name,
  //   timestamp: timestamp,
  //   text: comment,
  // };
  // commentsArr.push(newComment);

  const newComment = {
    name: name,
    comment: comment,
    // timestamp: timestamp,
  };

  postComments(newComment);

  // // Clear Inputs
  document.querySelector('#name').value = '';
  document.querySelector('#comment').value = '';

  // Post comments to server
  async function postComments(commentData) {
    try {
      const response = await axios.post(
        `${apiKey.baseURL}comments?api_key=${apiKey.apiKey}`,
        commentData,

        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
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

  // Divider Line element
  const dividerLinesEl = document.createElement('div');
  dividerLinesEl.classList.add('comments__divider-lines');
  createJsCommentsParentContainer.prepend(dividerLinesEl);
});
