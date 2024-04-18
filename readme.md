<b>BandSite - Sprint 3</b>
Responsive site between 320px and 1920px.

Live App:
https://rococo-meerkat-25036f.netlify.app/

<p style="text-decoration: underline;">Notes:</p>
Modified the specified font sizes and margins in certain areas to better align with the visuals of the mock-up.

Added greyscale hover effect on photo gallery for desktop & tablet only.

Post & Get comments from server

Likes counter interaction with server

### Topics Covered:

- Asynchronous function to load and display comments from the server
- Dynamically create elements for each comment including avatar, name, date, comment text, likes, and like button
- Event listener attached to the like button to increment likes and update the UI accordingly
- Event listener on form submission to add a new comment to the server and display it dynamically without page refresh
- Function to remove the selected class from all items
- Class setup for Bandsite API with methods to get comments, post comments, get shows, and increment likes
- Asynchronous function to load and display shows from the server
- Dynamically create elements for each show including date, venue, location, and buy tickets button
- Event listener to highlight selected show and remove highlight from others
