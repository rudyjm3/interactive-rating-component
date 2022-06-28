
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

function ratingSelection(ele) {

   let rating = document.getElementsByClassName('rating-container')[0].children;
   for(var i = 0; i < rating.length; i++) {
      console.log(rating);
      console.log(rating[i]);
      rating[i].classList.remove('selected');
   } 
   ele.classList.add('selected');
   starRatingSelected = ele.innerHTML;
   console.log(ele.innerHTML + " was clicked");
   console.log(starRatingSelected);
   document.getElementById('star-rating').innerHTML = "You selected " + starRatingSelected + " out of 5";
}

