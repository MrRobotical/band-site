// class BandsiteApi {
//   constructor(apiKey) {
//     this.baseURL = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';
//     this.apiKey = apiKey;
//   }
// }

// const apiKey = new BandsiteApi('d0eb4df4-5d31-4b4e-ae18-cc5b71f5b1a1');

// async function getComments() {
//   const response = await axios.get(
//     `${baseURL}/comments?api_key=d0eb4df4-5d31-4b4e-ae18-cc5b71f5b1a1`
//   );
//   console.log(response);
// }

// getComments();

// getComments() {
//This method accepts no parameters. It must send a GET request to the API, using the API key instance property (this.apiKey) to authenticate the request.
// The getComments method must sort the array of comments from the API, returning them in order from newest to oldest.
// }

// postComment(commentParam){
//It must send a POST request to the API with the comment object as the body, using the API key instance property (this.apiKey) to authenticate the request.
// }

// getShows(){
//This method accepts no parameters. It must send a GET request to the provided shows API, using the API key instance property (e.g. this.apiKey) to authenticate the request.
// The getShows method must return the array of show data objects returned from the API.
// }
