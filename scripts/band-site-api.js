// CLASS SETUP
class BandsiteApi {
  constructor(apiKey) {
    this.baseURL = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';
    this.apiKey = apiKey;
  }
  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseURL}comments?api_key=${this.apiKey}`
      );
      response.data.sort((a, b) => a.timestamp - b.timestamp);
      console.log(response.data);
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      console.log(error);
    }
  }

  async postComments(commentData) {
    try {
      const response = await axios.post(
        `${this.baseURL}comments?api_key=${this.apiKey}`,
        commentData,

        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      console.log(error);
    }
  }
  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseURL}showdates?api_key=${this.apiKey}`
      );
      console.log(response.data);
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      console.log(error);
    }
  }
}

const InstanceOfBandsiteApi = new BandsiteApi(
  'd0eb4df4-5d31-4b4e-ae18-cc5b71f5b1a1'
);
