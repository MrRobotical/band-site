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


### Styling Topics Covered:

- **SCSS Modular Design**: Utilization of SCSS partials to structure the codebase for styles, which enhances organization and maintainability.
- **Responsive Design**: Implementation of mobile-first design principles, with media queries targeting tablet and desktop breakpoints for adaptive styling.
- **CSS Variables and Mixins**: Employment of SCSS variables for colors, fonts, and margins to create a consistent theming and use of mixins for common patterns to avoid repetitive code.
- **BEM Naming Convention**: Adoption of Block Element Modifier (BEM) naming convention for CSS class names to increase modularity and reusability.
- **Typography and Layout**: Use of typography partials to define font styles and sizes, along with layout-specific styling to handle spacing, alignment, and positioning.
- **Interactive Elements**: Styling for interactive elements such as buttons and form elements, with states for hover, active, and focus to enhance user experience.
- **Media Query Management**: Organized media queries within relevant style blocks to maintain readability and context, facilitating easier updates and debugging.
- **Cross-Browser Compatibility**: Ensuring styles work across different browsers with consideration for vendor prefixes and fallbacks where necessary.
- **Accessibility Considerations**: Focus on accessible design with clear visual indicators for interactive elements and sufficient color contrast throughout the site.
- **Performance Optimization**: Minimization of CSS file size and complexity to ensure quick loading times and optimal performance.


