import ArrowDown from "../../components/ArrowDown";
import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import PlayerScore from "../../components/PlayerScore";



import "./style.css"

function ScoreBoard(){
    return`
    <header class="score-board"> 
    ${ArrowDown()}
    ${PlayerName(1)}
    ${PlayerScore()}
    ${VsPlayer()}
    ${PlayerScore()}
    ${PlayerName(2)}
    </header> 
    `   
}

export default ScoreBoard;