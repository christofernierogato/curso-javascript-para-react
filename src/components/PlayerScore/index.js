import "./style.css"

function PlayerScore(points = 0){
    
    return`
        <ol class="player-score" data-points="${points}">
            <li class="pointer"></li>
            <li class="pointer"></li>
            <li class="pointer"></li>
        </ol>
    `
}

export default PlayerScore;