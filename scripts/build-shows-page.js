//TOP LEVEL PARENT CONTAINER - SHOW TITLE & DESKTOP/TABLET TITLES
const showsTitleContainer = document.querySelector('.shows__container');

// Shows Section Title
showsTitle = document.createElement('h2');
showsTitle.classList.add('shows__title');
showsTitleContainer.prepend(showsTitle);
showsTitle.innerText = 'Shows';

// Shows info container
const showsParentContainer = document.createElement('div');
showsParentContainer.classList.add('shows__data-container');
showsTitleContainer.appendChild(showsParentContainer);

//Desktop & Mobile header titles container
const nonMobileHeaderContainer = document.createElement('div');
nonMobileHeaderContainer.classList.add('shows__heading-title-dsk-tablet');
showsParentContainer.prepend(nonMobileHeaderContainer);

//Date title element
const nonMobileDateContainer = document.createElement('div');
nonMobileDateContainer.classList.add('shows__headings-dsk-tablet');
nonMobileHeaderContainer.appendChild(nonMobileDateContainer);
nonMobileDateContainer.innerText = 'DATE';

//Venue title element
const nonMobileVenueContainer = document.createElement('div');
nonMobileVenueContainer.classList.add('shows__headings-dsk-tablet');
nonMobileHeaderContainer.appendChild(nonMobileVenueContainer);
nonMobileVenueContainer.innerText = 'VENUE';

//Location title element
const nonMobileLocationContainer = document.createElement('div');
nonMobileLocationContainer.classList.add('shows__headings-dsk-tablet');
nonMobileHeaderContainer.appendChild(nonMobileLocationContainer);
nonMobileLocationContainer.innerText = 'LOCATION';

//Dummy title element
const nonMobileDummyContainer = document.createElement('div');
nonMobileDummyContainer.classList.add('shows__headings-dsk-tablet-dummy-div');
nonMobileHeaderContainer.appendChild(nonMobileDummyContainer);

// GET SHOWS FROM SERVER
async function getShows() {
  try {
    const response = await axios.get(
      `${InstanceOfBandsiteApi.baseURL}showdates?api_key=${InstanceOfBandsiteApi.apiKey}`
    );
    console.log(response.data);

    response.data.forEach((show) => {
      //Top level element to append to
      const showsParentContainer = document.querySelector(
        '.shows__data-container'
      );

      //Top level container creation
      const showsInfoContainer = document.createElement('div');
      showsInfoContainer.classList.add('shows__info-container');
      showsParentContainer.appendChild(showsInfoContainer);

      //Date title - Mobile
      const dateTitleMobile = document.createElement('div');
      dateTitleMobile.classList.add('shows__heading-title-mobile');
      showsInfoContainer.appendChild(dateTitleMobile);
      dateTitleMobile.innerText = 'DATE';

      //Date info
      const dateInfo = document.createElement('div');
      dateInfo.classList.add('shows__info-date');
      showsInfoContainer.appendChild(dateInfo);
      const dateTimeStamp = new Date(show.date).toLocaleDateString('en-US');
      dateInfo.innerText = dateTimeStamp;

      //Venue title - Mobile
      const venueTitleMobile = document.createElement('div');
      venueTitleMobile.classList.add('shows__heading-title-mobile');
      showsInfoContainer.appendChild(venueTitleMobile);
      venueTitleMobile.innerText = 'VENUE';

      //Venue info
      const venueInfo = document.createElement('div');
      venueInfo.classList.add('shows__info-venue');
      showsInfoContainer.appendChild(venueInfo);
      venueInfo.innerText = show.place;

      //Location title - Mobile
      const locationTitleMobile = document.createElement('div');
      locationTitleMobile.classList.add('shows__heading-title-mobile');
      showsInfoContainer.appendChild(locationTitleMobile);
      locationTitleMobile.innerText = 'LOCATION';

      //Location info
      const locationInfo = document.createElement('div');
      locationInfo.classList.add('shows__info-location');
      showsInfoContainer.appendChild(locationInfo);
      locationInfo.innerText = show.location;

      //Button container
      const buyButtonContainer = document.createElement('div');
      buyButtonContainer.classList.add('shows__btn-container');
      showsInfoContainer.appendChild(buyButtonContainer);

      //Button element
      const buyButton = document.createElement('button');
      buyButton.classList.add('shows__buy-btn');
      buyButtonContainer.appendChild(buyButton);
      buyButton.innerText = 'BUY TICKETS';

      //Divider line
      const dividerLine = document.createElement('div');
      dividerLine.classList.add('shows__divider-lines');
      showsInfoContainer.insertAdjacentElement('afterend', dividerLine);

      //Styling-Hightlight -- Selected
      buyButton.addEventListener('click', function () {
        removeSelectedClass();
        // Add the selected class to the clicked item
        showsInfoContainer.classList.add('shows__info-container--selected');
      });
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    console.log(error);
  }
}
getShows();

// SHOWS DATA CONTAINERS & ELEMENTS
// showsArr.forEach((show) => {
//   //Top level element to append to
//   const showsParentContainer = document.querySelector('.shows__data-container');

//   //Top level container creation
//   const showsInfoContainer = document.createElement('div');
//   showsInfoContainer.classList.add('shows__info-container');
//   showsParentContainer.appendChild(showsInfoContainer);

//   //Date title - Mobile
//   const dateTitleMobile = document.createElement('div');
//   dateTitleMobile.classList.add('shows__heading-title-mobile');
//   showsInfoContainer.appendChild(dateTitleMobile);
//   dateTitleMobile.innerText = 'DATE';

//   //Date info
//   const dateInfo = document.createElement('div');
//   dateInfo.classList.add('shows__info-date');
//   showsInfoContainer.appendChild(dateInfo);
//   dateInfo.innerText = show.date;

//   //Venue title - Mobile
//   const venueTitleMobile = document.createElement('div');
//   venueTitleMobile.classList.add('shows__heading-title-mobile');
//   showsInfoContainer.appendChild(venueTitleMobile);
//   venueTitleMobile.innerText = 'VENUE';

//   //Venue info
//   const venueInfo = document.createElement('div');
//   venueInfo.classList.add('shows__info-venue');
//   showsInfoContainer.appendChild(venueInfo);
//   venueInfo.innerText = show.venue;

//   //Location title - Mobile
//   const locationTitleMobile = document.createElement('div');
//   locationTitleMobile.classList.add('shows__heading-title-mobile');
//   showsInfoContainer.appendChild(locationTitleMobile);
//   locationTitleMobile.innerText = 'LOCATION';

//   //Location info
//   const locationInfo = document.createElement('div');
//   locationInfo.classList.add('shows__info-location');
//   showsInfoContainer.appendChild(locationInfo);
//   locationInfo.innerText = show.location;

//   //Button container
//   const buyButtonContainer = document.createElement('div');
//   buyButtonContainer.classList.add('shows__btn-container');
//   showsInfoContainer.appendChild(buyButtonContainer);

//   //Button element
//   const buyButton = document.createElement('button');
//   buyButton.classList.add('shows__buy-btn');
//   buyButtonContainer.appendChild(buyButton);
//   buyButton.innerText = 'BUY TICKETS';

//   //Divider line
//   const dividerLine = document.createElement('div');
//   dividerLine.classList.add('shows__divider-lines');
//   showsInfoContainer.insertAdjacentElement('afterend', dividerLine);

//   //Styling-Hightlight -- Selected
//   buyButton.addEventListener('click', function () {
//     removeSelectedClass();
//     // Add the selected class to the clicked item
//     showsInfoContainer.classList.add('shows__info-container--selected');
//   });
// });

// Remove the selected class from all items
function removeSelectedClass() {
  const selectedState = document.querySelector(
    '.shows__info-container--selected'
  );
  if (selectedState) {
    selectedState.classList.remove('shows__info-container--selected');
  }
}
