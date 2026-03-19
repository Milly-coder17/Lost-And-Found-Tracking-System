const container = document.querySelector(".itemsContainer");
const searchBar = document.getElementById("searchBar");
const typeFilter = document.getElementById("typeFilter");
const categoryButtons = document.querySelectorAll(".categoriesContainer button");

let currentSelectedType = "AllTypes";

const items = [
    {name: "Wallet", location: "sa may jollibee", date: "2026-03-07", type: "umbrella", image: "brown wallet.png"},
    {name: "Umbrella", location: "Puregold", date: "Tomorrow", type: "wallet", image: "umbrella.png"},
    {name: "Brilyante ng lupa", location: "Xavier Hall", date: "2026-03-08", type: "electronics", image: "Brilyante ng lupa.png"},
    {name: "iPhone 17", location: "Harap ng Daily Joe", date: "2026-03-06", type: "electronics", image: "iPhone 17.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
    {name: "Null", location: "Null", date: "2026-03-06", type: "keys", image: "image.png"},
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
                <h4>${item.date}</h4>
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
            item.type === currentSelectedType;
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