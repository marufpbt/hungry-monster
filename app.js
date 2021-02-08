const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener("click", function () {
	const searchInputValue = document.getElementById('searchInput').value;
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputValue}`)
		.then(res => res.json())
		.then(data => {
			displayFoodItems(data)
		})
})


const displayFoodItems = data => {
	for (let i = 0; i < data.meals.length; i++) {
		meals = data.meals[i].strMeal;
		const container = document.getElementById('container');
		const div = document.createElement('div');
		// div.setAttribute('onclick','renderCard()');
		const mealInfo = `
		<img src='${data.meals[i].strMealThumb}'>
		<h3>${meals}</h3>
		`
		div.innerHTML = mealInfo;
		container.appendChild(div);
		div.className = 'mealItem'
	}
}

