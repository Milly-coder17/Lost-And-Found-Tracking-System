const container = document.querySelector(".itemsContainer");
const searchBar = document.getElementById("searchBar");
const typeFilter = document.getElementById("typeFilter");
const categoryButtons = document.querySelectorAll(".categoriesContainer button");

let currentSelectedType = "AllTypes";

const items = [
    {name: "4 Tumblers", location: "ADNU, Covered Court", date: "2025-12-16", type: "tumbler", image: "images/Bottles.jpeg"},
    {name: "3 Umbrellas", location: "Plaza Rizal", date: "2025-12-19", type: "umbrella", image: "images/Umbrellas.jpeg"},
    {name: "Type C Charger", location: "ADNU, Bonoan", date: "2026-03-07", type: "electronics", image: "images/charger.png"},
    {name: "Blue Cap", location: "ADNU, Bonoan", date: "2026-01-05", type: "accessories", image: "images/Blue Cap.png"},
    {name: "Laptop and keyboard", location: "P216", date: "2026-01-05", type: "electronics", image: "images/laptop and keyboard.png"},
    {name: "Books and papers", location: "SM Naga", date: "2026-01-06", type: "schoolitems documents", image: "images/books.png"},
    {name: "Wallet", location: "ADNU, ADMIN BLDG", date: "2025-06-26", type: "wallet", image: "images/wallet admin bldg.jpeg"},
    {name: "Black cap", location: "ADNU, P216", date: "2025-07-04", type: "accessories", image: "images/black cap.jpg"},
    {name: "White and Black Shirts", location: "ADNU, Arrupe Convention Hall", date: "2025-03-11", type: "clothing", image: "images/shirts.jpg"},
    {name: "Black wallet", location: "ADNU, Main Gate", date: "2025-03-11", type: "wallet", image: "images/black wallet.jpeg"},
    {name: "Coffee Bottle", location: "Magsaysay Starbucks", date: "2025-09-22", type: "tumbler", image: "images/missing coffee.png"},
    {name: "Watch", location: "Ateneo Avenue 7/11", date: "2025-03-10", type: "accessories", image: "images/watch.jpg"},
];

/* Code for rendering items */
function renderItems(itemArray) {
    container.innerHTML = ``;
    itemArray.forEach(item => {
        let card = document.createElement("div");
        card.className = "itemCard";
        card.dataset.type = item.type;
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="itemInfo">
                <h3>${item.name}</h3>
                <h4 class="location">📍${item.location}</h4>
                <h4>📅 ${item.date}</h4>
            </div>
        `
        ;
        container.appendChild(card);
    });
}

renderItems(items);

function filterFunction(){
    let searchText = searchBar.value.toLowerCase();
    let filteredItems = items.filter(item => {
        let matchesSearch =
            item.name.toLowerCase().includes(searchText) ||
            item.location.toLowerCase().includes(searchText);
        let matchesType =
            currentSelectedType === "AllTypes" ||
            item.type.includes(currentSelectedType);
        return matchesSearch && matchesType;
    });
    renderItems(filteredItems);
};

searchBar.addEventListener("input", filterFunction);

categoryButtons.forEach(button => {
    button.addEventListener("click", function() {
        currentSelectedType = button.id.toLowerCase();
        if(currentSelectedType === "alltypes"){
            currentSelectedType = "AllTypes";
        }
        filterFunction();
    });
});
