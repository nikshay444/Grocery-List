let userInput = document.getElementById("userInput");
let groceries = document.getElementsByClassName("groceries")[0];
let pencil = document.getElementById("pencil");
let allItems = document.getElementById("allItems")


pencil.addEventListener("click", function () {
    allItems.innerHTML = " ";
})
userInput.addEventListener("keydown", function (event) {
    if (event.key=="Enter") {
        addItems()
    }
})

function addItems() {
    let h2 = document.createElement("h2");
    
    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener('click', function () {
        h2.style.textDecoration = "line-through";
    })
    allItems.insertAdjacentElement("beforeend",h2)
    userInput.value = "";
}