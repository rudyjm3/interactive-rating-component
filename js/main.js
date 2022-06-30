
// let rating = document.getElementsByClassName('rating-num');
//    for (var i = 0; i < rating.length; i++) {
//       rating[i].addEventListener('click', function () {
//          console.log(this.innerHTML + " was clicked");
//          if (rating[i].className === 'selected') {
//             rating[i].classList.remove('selected');
//          } 
//          this.classList.add('selected');
//       });
//    };
let outPut = document.getElementsByClassName('rating-output-container')[0];
let rating = document.getElementsByClassName('rating-container')[0].children; //targets all the child div/elements inside the parent div

// Function ran when any number rating is clicked
function ratingSelection(ele) {  
   for(var i = 0; i < rating.length; i++) { //Loops through all divs inside rating-container
      // console.log(rating);
      console.log(rating[i]);
      rating[i].classList.remove('selected');//If any div has class name 'selected' remove it
   } 
   ele.classList.add('selected');
   starRatingSelected = ele.innerHTML;
   console.log(ele.innerHTML + " was clicked");
   console.log(starRatingSelected);
   outPut.innerHTML = "You selected " + starRatingSelected + " out of 5";
};



const submitBtn = document.getElementsByTagName('button');
submitBtn[0].addEventListener('click', (button) => {
   let countNum = document.getElementById('countDwn');
   let thankYouPage = document.getElementsByClassName('thankyou-container')[0];

   // let sec = 5;
   // setInterval(function () {
   //    countNum.innerHTML = sec;
   //    sec--;
   //    if (sec < 0) {
   //       ++sec;
   //    } 
   // }, 1000);
   let sec = 5;
   let timer = setInterval(function(){
      countNum.innerHTML = sec;
      sec--;
      if (sec < 0) {
         clearInterval(timer);  
      }
   }, 1000);

   thankYouPage.style.cssText = 'opacity: 1; transform: scale(1);';
         setTimeout(function(){
            for(var i = 0; i < rating.length; i++) {
               console.log(rating);
               //console.log(rating[i]);
               rating[i].classList.remove('selected');
               outPut.innerHTML = "";
               countNum.innerHTML = "0";   
            } ;
            thankYouPage.style.cssText = 'opacity: 0; transform: scale(0);'; 
      }, 6000);//wait 6 seconds to close thank you message
      countNum.innerHTML = "5";

});

