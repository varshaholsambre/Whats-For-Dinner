window.onload = function() {
	var food;
	var json;
	let recipes;
	document.getElementById("ingredients")
    .addEventListener("keyup", function(event) {
	    if (event.keyCode === 13) {
	        food = document.getElementById("ingredients").value;
	        console.log(food);

	        const Http = new XMLHttpRequest();
			const url = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + food + '&number=3&apiKey=4ff7174659c74b19b2cf2a3e9662d4e5';
			Http.open("GET", url);
			Http.send();

			Http.onreadystatechange = (e) => {
			  json = Http.responseText;
			  recipes = JSON.parse(json);
			  console.log(recipes[0].title);

			  var cards = document.getElementById("cards");
			  cards.style.visibility = "visible";
			  cards.style.opacity = 1;
			  cards.style.transition = "opacity 2s linear";

			  var used1 = "";
			  for (i = 0; i < recipes[0].usedIngredients.length; i++) {
  				   used1 += recipes[0].usedIngredients[i].name.charAt(0).toUpperCase() + recipes[0].usedIngredients[i].name.slice(1) + ", ";
			  }
			  if (used1.length > 110) {
			  	used1 = used1.substring(0, 110) + "...  ";
			  }

			  var used2 = "";
			  for (i = 0; i < recipes[1].usedIngredients.length; i++) {
  				   used2 += recipes[1].usedIngredients[i].name.charAt(0).toUpperCase() + recipes[1].usedIngredients[i].name.slice(1) + ", ";
			  }
			  if (used2.length > 110) {
			  	used2 = used2.substring(0, 110) + "...  ";
			  }

			  var used3 = "";
			  for (i = 0; i < recipes[2].usedIngredients.length; i++) {
  				   used3 += recipes[2].usedIngredients[i].name.charAt(0).toUpperCase() + recipes[2].usedIngredients[i].name.slice(1) + ", ";
			  }
			  if (used3.length > 110) {
			  	used3 = used3.substring(0, 110) + "...  ";
			  }

			  var missing1 = "";
			  for (i = 0; i < recipes[0].missedIngredients.length; i++) {
  				   missing1 += recipes[0].missedIngredients[i].name.charAt(0).toUpperCase() + recipes[0].missedIngredients[i].name.slice(1) + ", ";
			  }
			  if (missing1 == "") {
			  	missing1 = "None!  ";
			  }
			  if (missing1.length > 40) {
			  	missing1 = missing1.substring(0, 40) + "...  ";
			  }

			  var missing2 = "";
			  for (i = 0; i < recipes[1].missedIngredients.length; i++) {
  				   missing2 += recipes[1].missedIngredients[i].name.charAt(0).toUpperCase() + recipes[1].missedIngredients[i].name.slice(1) + ", ";
			  }
			  if (missing2 == "") {
			  	missing2 = "None!  ";
			  }
			  if (missing2.length > 40) {
			  	missing2 = missing2.substring(0, 40) + "...  ";
			  }

			  var missing3 = "";
			  for (i = 0; i < recipes[2].missedIngredients.length; i++) {
  				   missing3 += recipes[2].missedIngredients[i].name.charAt(0).toUpperCase() + recipes[2].missedIngredients[i].name.slice(1) + ", ";
			  }
			  if (missing3 == "") {
			  	missing3 = "None!  ";
			  }
			  if (missing3.length > 40) {
			  	missing3 = missing3.substring(0, 40) + "...  ";
			  }

			  document.getElementById("firstTitle").innerHTML = recipes[0].title;
			  document.getElementById("firstImage").src = recipes[0].image;
			  document.getElementById("firstLikes").innerHTML = recipes[0].likes;
			  document.getElementById("usedIngredients1").innerHTML = "Used: " + used1.substring(0, used1.length - 2);
			  document.getElementById("missedIngredients1").innerHTML = "Missing: " + missing1.substring(0, missing1.length - 2);
			  document.getElementById("secondTitle").innerHTML = recipes[1].title;
			  document.getElementById("secondImage").src = recipes[1].image;
			  document.getElementById("secondLikes").innerHTML = recipes[1].likes;
			  document.getElementById("usedIngredients2").innerHTML = "Used: " + used2.substring(0, used2.length - 2);
			  document.getElementById("missedIngredients2").innerHTML = "Missing: " + missing2.substring(0, missing2.length - 2);
			  document.getElementById("thirdTitle").innerHTML = recipes[2].title;
			  document.getElementById("thirdImage").src = recipes[2].image;
			  document.getElementById("thirdLikes").innerHTML = recipes[2].likes;
			  document.getElementById("usedIngredients3").innerHTML = "Used: " + used3.substring(0, used3.length - 2);
			  document.getElementById("missedIngredients3").innerHTML = "Missing: " + missing3.substring(0, missing3.length - 2);
			}

	    }

    });
}
