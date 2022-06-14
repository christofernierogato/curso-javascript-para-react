import "./style.css";

function ArrowDown(CurrentPlayer = 1) {
	return `
    <img src="images/ArrowDown.png"
    data-CurrentPlayer = "${CurrentPlayer}"
    class="arrow-down" alt="Seta-Para-Baixo">
    `;
}

export default ArrowDown;
