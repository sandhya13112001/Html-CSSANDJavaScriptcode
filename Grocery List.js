let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let listContainer = document.getElementById("groceryListContainer");
listContainer.classList.add("groceryListContainer");

let headingElement = document.createElement("h1");
headingElement.textContent = "Grocery List";
headingElement.classList.add("headingstyle")
listContainer.appendChild(headingElement)

let createContainerElement = document.createElement("div");
createContainerElement.classList.add("divElement");
listContainer.appendChild(createContainerElement)

let unorderList = document.createElement("ul");
createContainerElement.appendChild(unorderList);
for (let items of groceryList) {
    let listItem = document.createElement("li");
    listItem.textContent = items
    unorderList.appendChild(listItem)
}