/* * * * * * *  
 * Selectors * 
 * * * * * * */
console.log('JS for profile')

const githubLInk = document.querySelector('#github');
const colorBtn = document.querySelector('#color');
const favPlaceBtn = document.querySelector('#place');
const ritualBtn = document.querySelector('#ritual');

/* * * * * * *  
 * Functions * 
 * * * * * * */

// create a leave page message to ahndle external link
// NTS: I cannot get this to work, maybe ask in office hours
// it works when navigating out of home page into profile page
/* const leavePageMessage = (evt) => {
    evt.preventDefault();

    console.log("redirect")
    // return 'You are being redirected to an external site';
} */

// Browser Object Model to display window when leaving page
/* window.addEventListener('beforeunload', leavePageMessage);
 */

// event handler for clicking the link
// NTS: I cannot get this to work, maybe ask in office hours
/* console.log('githubLink:', githubLink);
githubLInk.addEventListener('click', (evt) => {
    leavePageMessage(evt) // Display leavepagemessage
}); */

const colorBtnHandler = (evt) => {
    alert("My favorite color is blue");
}

const favPlaceBtnHandler = (evt) => {
    alert("My favorite place is the beach");
}

const ritualBtnHandler = (evt) => {
    alert("My ritual before a big event is to do deep breathing");
}

/* * * * * * *  
 * Listeners * 
 * * * * * * */

colorBtn.addEventListener('click', colorBtnHandler);
favPlaceBtn.addEventListener('click', favPlaceBtnHandler);
ritualBtn.addEventListener('click', ritualBtnHandler);