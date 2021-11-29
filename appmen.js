//Script Search function
const listJackets = document.getElementById('jacketsList');
const searchBar = document.getElementById('searchBar');
//array with all the jackets
let allJackets = [

    {
        "image": "img/jacket.jpg",
        "img_alt":"Denim Jacket",
        "name": "Allen",
        "jacketName":"Denim Jacket",
        "price": "$59",
        "fabric":"100% Denim",
        "gender":"men"
    },
    {
        "image": "img/jacket1.jpg",
        "img_alt":"Blazer Jacket",
        "name": "Bobby",
        "jacketName":"Blazer Jacket",
        "price": "$79",
        "fabric":"100% Cotton",
        "gender":"men"
    },
    {
        "image": "img/jacket3.jpg",
        "img_alt":"Windproof Jacket",
        "name": "Wincent",
        "jacketName":"Windproof Jacket",
        "price": "$79",
        "fabric":"100% Cotton",
        "gender":"men"
    },
    {
        "image": "img/jacket4.jpg",
        "img_alt":"Leather Jacket",
        "name": "Leo",
        "jacketName":"Leather Jacket",
        "price": "$99",
        "fabric":"100% Cotton",
        "gender":"men"
    }, 
    {
        "image": "img/jacket9.jpg",
        "img_alt":"Field Jacket",
        "name": "Filip",
        "jacketName":"Field Jacket",
        "price": "$79",
        "fabric":"100% Cotton",
        "gender":"men"
    },
    {
        "image": "img/jacket8.jpg",
        "img_alt":"Leather Jacket",
        "name": "Leonard",
        "jacketName":"Leather Jacket",
        "price": "$99",
        "fabric":"100% Vegan Leather",
        "gender":"men"
    },
   



];

//Search function 
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredJackets = allJackets.filter((jacket) => {
        return(
                jacket.name.toLowerCase().includes(searchString) || jacket.img_alt.toLowerCase().includes(searchString) || jacket.fabric.toLowerCase().includes(searchString)
        );
    
    });
    displayJackets(filteredJackets);
});

//Display function 
const displayJackets=(jackets) => {
    const htmlString = jackets
    .map((jacket) => {
        return`
        <div class="card lg-3 my-3 mx-3" style="width: 18rem">
          <img class="card-img-top" src="${jacket.image}" alt="${jacket.img_alt}" />
          <div class="card-body">
            <h5 class="mt-1">${jacket.name}</h5>
            <h3 class="mt-2">${jacket.jacketName}</h3>
            <h5 class="mt-1">${jacket.price}</h5>
            <p class="card-text">${jacket.fabric}</p>
            <a href="#" class="btn bi bi-heart"></a>
            <a href="#" class="btn btn-primary">Buy</a>
          </div>
        </div>
        `;
        })
        .join('');
        jacketsList.innerHTML = htmlString;
};
//Loads all jackets
displayJackets(allJackets);