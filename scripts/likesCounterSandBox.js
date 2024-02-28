// Function to fetch the current like count from the server
async function fetchLikes() {
  try {
    const response = await axios.get(
      `${this.baseURL}comments/${this.likeId}/like?api_key=${this.apiKey}`
    );
    console.log(response.data);
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    console.log(error);
  }
}

// Function to increment the like count on the server via ID
async function incrementLikes(commentId) {
  try {
    const response = await axios.put(
      `${this.baseURL}comments/{$commentId}/like?api_key=${this.apiKey}`
    );
    console.log('liked comment:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    console.log(error);
  }
}

// Event listener
document.getElementbyId('like-button').addEventListener('click', () => {
  const currentCount = parseInt(
    document.getElementById('like-count').textContent,
    10
  );
  const newCount = currentCount + 1;
  document.getElementById('like-count').textContent = newCount;

  // Update the server with the new count
  updateLikes(newCount);
});

// // Fetch the initial like count from the server when the page loads
// document.addEventListener('DOMContentLoaded', fetchLikes);

<HTML>
  <div class="like-container">
    <button id="like-button">👍</button>
    <span id="like-count">0</span>
  </div>
</HTML>;
