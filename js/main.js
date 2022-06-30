
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
let rating = document.getElementsByClassName('rating-container')[0].children;

function ratingSelection(ele) {  
   for(var i = 0; i < rating.length; i++) {
      console.log(rating);
      //console.log(rating[i]);
      rating[i].classList.remove('selected');
   } 
   ele.classList.add('selected');
   starRatingSelected = ele.innerHTML;
   console.log(ele.innerHTML + " was clicked");
   console.log(starRatingSelected);
   outPut.innerHTML = "You selected " + starRatingSelected + " out of 5";
};



const submitBtn = document.getElementsByTagName('button');
submitBtn[0].addEventListener('click', (button) => {
   let thankYouPage = document.getElementsByClassName('thankyou-container')[0];
   thankYouPage.style.cssText = 'opacity: 1; transform: scale(1);';
   setTimeout(function(){
      for(var i = 0; i < rating.length; i++) {
         console.log(rating);
         //console.log(rating[i]);
         rating[i].classList.remove('selected');
      } ;
      thankYouPage.style.cssText = 'opacity: 1; transform: scale(0);'; 
  }, 5000);//wait 5 seconds to close thank you message
});

