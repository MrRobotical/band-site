showsArr = [
  {
    date: 'Mon Sept 09 2024',
    venue: 'Ronald Lane',
    location: 'San Francisco, CA',
  },
  {
    date: 'Tue Sept 17 2024',
    venue: 'Pier 3 East',
    location: 'San Francisco, CA',
  },
  {
    date: 'Sat Oct 12 2024',
    venue: 'View Lounge',
    location: 'San Francisco, CA',
  },
  {
    date: 'Sat Nov 16 2024',
    venue: 'Hyatt Agency',
    location: 'San Francisco, CA',
  },
  {
    date: 'Fri Nov 29 2024',
    venue: 'Moscow Center',
    location: 'San Francisco, CA',
  },
  {
    date: 'Wed Dec 18 2024',
    venue: 'Press Club',
    location: 'San Francisco, CA',
  },
];

window.addEventListener('load', function (event) {
  //Top level El to append to:
  const showsParentContainer = document.querySelector('.shows__data-container');

  // DESKTOP & TABLET HEADERS
  // DESKTOP & TABLET HEADERS
  // DESKTOP & TABLET HEADERS

  //Desktop & Tablet Container via JS
  const nonMobileHeaderContainer = document.createElement('div');
  nonMobileHeaderContainer.classList.add('shows__heading-title-dsk-tablet');
  showsParentContainer.prepend(nonMobileHeaderContainer);

  //Date Heading - Desktop & Tablet
  const nonMobileDateContainer = document.createElement('div');
  nonMobileDateContainer.classList.add('shows__headings-dsk-tablet');
  nonMobileHeaderContainer.appendChild(nonMobileDateContainer);
  nonMobileDateContainer.innerText = 'DATE';

  //Venue Heading - Desktop & Tablet
  const nonMobileVenueContainer = document.createElement('div');
  nonMobileVenueContainer.classList.add('shows__headings-dsk-tablet');
  nonMobileHeaderContainer.appendChild(nonMobileVenueContainer);
  nonMobileVenueContainer.innerText = 'VENUE';

  //Location Heading - Desktop & Tablet
  const nonMobileLocationContainer = document.createElement('div');
  nonMobileLocationContainer.classList.add('shows__headings-dsk-tablet');
  nonMobileHeaderContainer.appendChild(nonMobileLocationContainer);
  nonMobileLocationContainer.innerText = 'LOCATION';

  //Dummy Header - Desktop & Tablet
  const nonMobileDummyContainer = document.createElement('div');
  nonMobileDummyContainer.classList.add('shows__headings-dsk-tablet-dummy-div');
  nonMobileHeaderContainer.appendChild(nonMobileDummyContainer);
});

// // SHOW INFO CONTAINERS

window.addEventListener('load', function (event) {
  showsArr.forEach((show) => {
    //Top level El to append to
    const showsParentContainer = document.querySelector(
      '.shows__data-container'
    );

    console.log(showsParentContainer);

    //Top Level Container to append to
    const showsInfoContainer = document.createElement('div');
    showsInfoContainer.classList.add('shows__info-container');

    showsParentContainer.appendChild(showsInfoContainer);

    //Date Title - Mobile
    const dateTitleMobile = document.createElement('div');
    dateTitleMobile.classList.add('shows__heading-title-mobile');
    showsInfoContainer.appendChild(dateTitleMobile);
    dateTitleMobile.innerText = 'DATE';

    //Date info
    const dateInfo = document.createElement('div');
    dateInfo.classList.add('shows__info-date');
    showsInfoContainer.appendChild(dateInfo);
    dateInfo.innerText = show.date;

    //Venue Title - Mobile
    const venueTitleMobile = document.createElement('div');
    venueTitleMobile.classList.add('shows__heading-title-mobile');
    showsInfoContainer.appendChild(venueTitleMobile);
    venueTitleMobile.innerText = 'VENUE';

    //Venue info
    const venueInfo = document.createElement('div');
    venueInfo.classList.add('shows__info-venue');
    showsInfoContainer.appendChild(venueInfo);
    venueInfo.innerText = show.venue;

    //Location Title - Mobile
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

    //Button Element
    const buyButton = document.createElement('button');
    buyButton.classList.add('shows__buy-btn');
    buyButtonContainer.appendChild(buyButton);
    buyButton.innerText = 'BUY TICKETS';

    //Divider Line
    const dividerLine = document.createElement('div');
    dividerLine.classList.add('shows__divider-lines');
    showsInfoContainer.insertAdjacentElement('afterend', dividerLine);
  });
});
