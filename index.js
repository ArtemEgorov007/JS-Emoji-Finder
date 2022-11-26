import { data } from "./emoji.js";
console.log(data);
const box = document.querySelector(".card");

function createCard(obj) {
	const card = document.createElement("div");
	const emoji = document.createElement("p");
	const title = document.createElement("p");
	const icon = document.createElement("p");

	card.className = "card";
	emoji.className = "card__emoji";
	title.className = "card__title";
	icon.className = "card__text";

	emoji.textContent = obj.symbol;
	title.textContent = obj.title;
	icon.textContent = obj.keywords;

	card.append(emoji);
	card.append(title);
	card.append(icon);

	console.log(card);

	return card;
}

const cards = document.querySelector(".cards");
console.log(cards);
data.forEach((el) => cards.append(createCard(el)));

// inputText = document.querySelector(".headinput");
// information = document.querySelectorAll(".cards");

function search() {
	document.addEventListener("keyup", search);
	let input = document.getElementById("headinput");
	let filter = input.value.toUpperCase();
	let cards = document.getElementById("cards");
	let text = input.getElementsByTagName("title");
	for (let i = 0; i < cards.length; i++) {
		let a = text[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			text[i].style.display = "";
		} else {
			text[i].style.display = "none";
		}
		return cards;
	}
}
console.log(search);
