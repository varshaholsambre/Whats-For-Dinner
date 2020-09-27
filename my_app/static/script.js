window.onload = function() {
	var food;
	var json;
	let recipes;
	var json2;
	let urls1;
	let urls2;
	let urls3;
	var json3;
	var json4;
	document.getElementById("ingredients")
    .addEventListener("keyup", function(event) {
	    if (event.keyCode === 13) {
	        food = document.getElementById("ingredients").value;

	        const Http = new XMLHttpRequest();
			const url = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + food + "&number=3&ranking=2&ignorePantry=true&apiKey=d062cf385d574e1ba7337417f5de1d4d";
			Http.open("GET", url);
			Http.send();

			Http.onreadystatechange = (e) => {
			  json = Http.responseText;
			  recipes = JSON.parse(json);

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

			  const Http2 = new XMLHttpRequest();
			  const url2 = "https://api.spoonacular.com/recipes/" + recipes[0].id + "/information?apiKey=d062cf385d574e1ba7337417f5de1d4d";
			  Http2.open("GET", url2);
			  Http2.send();

			  Http2.onreadystatechange = (e) => {
				  json2 = Http2.responseText;
				  urls1 = JSON.parse(json2);

				  document.getElementById("firstId").href = urls1.sourceUrl;
			  }

			  const Http3 = new XMLHttpRequest();
			  const url3 = "https://api.spoonacular.com/recipes/" + recipes[1].id + "/information?apiKey=d062cf385d574e1ba7337417f5de1d4d";
			  Http3.open("GET", url3);
			  Http3.send();

			  Http3.onreadystatechange = (e) => {
				  json3 = Http3.responseText;
				  urls2 = JSON.parse(json3);

				  document.getElementById("secondId").href = urls2.sourceUrl;
			  }

			  const Http4 = new XMLHttpRequest();
			  const url4 = "https://api.spoonacular.com/recipes/" + recipes[2].id + "/information?apiKey=d062cf385d574e1ba7337417f5de1d4d";
			  Http4.open("GET", url4);
			  Http4.send();

			  Http4.onreadystatechange = (e) => {
				  json4 = Http4.responseText;
				  urls3 = JSON.parse(json4);

				  document.getElementById("thirdId").href = urls3.sourceUrl;
			  }
			}
	    }
    });
}
