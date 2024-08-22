
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew"];


function displayFruits(fruitArray) {
    const fruitList = document.getElementById('fruitList');
    fruitList.innerHTML = '';
    
    fruitArray.forEach(fruit => {
        const li = document.createElement('li');
        li.textContent = fruit;
        fruitList.appendChild(li);
    });
}


displayFruits(fruits);

document.getElementById('searchInput').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    
    const filteredFruits = fruits.filter(fruit => 
        fruit.toLowerCase().includes(searchValue)
    );
    
    displayFruits(filteredFruits);
});
