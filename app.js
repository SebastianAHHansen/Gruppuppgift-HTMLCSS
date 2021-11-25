
// Script Heart Button
let btnHeart = document.querySelector('#heart');
btnHeart.addEventListener('click', () => btnHeart.style.color = 'red');

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

