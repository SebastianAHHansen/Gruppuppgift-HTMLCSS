
// Script Heart Button
let btnHeart = document.querySelector('#heart');
btnHeart.addEventListener('click', () => btnHeart.style.color = 'red');

// const nonFilledHeart = 'bi bi-heart';
// const filledHeart = 'bi bi-heart-fill';
// const button = document.querySelector('likeBtn');
// button.addEventListener('click', toggle);

// function toggle() {
//   const like = button.textContent;
//   if (like == nonFilledHeart) {
//     button.textContent = filledHeart;
//   } else {
//     button.textContent = nonFilledHeart;
//   }
// }

// $('likeBtn').click(function () {
//   $(this).toggleClass('fa-heart fa-heart-fill');
// });

// const nonFilledHeart = 'bi bi-heart';
// const filledHeart = 'bi bi-heart-fill';

// changeHeart function(nonFilledHeart, filledHeart)

//  $('likeBtn').click(changeHeart function(nonFilledHeart, filledHeart) {
//   $(this).toggleClass('bi bi-heart');
//   $(this).toggleClass('bi bi-heart-fill');
// });


//Script for Heart button 

//Script Search function
const listJackets = document.getElementById('listJackets');
const searchBar = document.getElementById('searchBar');
let allJackets = [];


searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredJackets = allJackets.filter((jackets) => {
        return{
            jackets.jacketName.toLowerCase().includes(searchString) || jackets.jacketDefinition.toLowerCase().includes(searchString) || jackets.material.toLowerCase().includes(searchString)
        };
    });
    displayJackets(filteredJackets);
});

