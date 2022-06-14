import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack(icon, altIcon) {
	window.CardFrontBack = {};
	window.CardFrontBack.handleClick = (event) => {
		const $origin = event.target;
		const $cardFrontBack = $origin.closest(".card-front-back");
		$cardFrontBack.classList.toggle("-active");
	};

	return `
    <article class="card-front-back" onClick="CardFrontBack.handleClick(event)">

        <div class="card -front">
        ${CardGame()}
        </div>
        <div class="card -back">
        ${CardGame(icon, altIcon)}
        </div>
    </article>
    `;
}

export default CardFrontBack;
