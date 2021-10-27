const player1="X"
const player2="O"

var playTime = player1;
var gameOver = false;

atualizarMostrador();

function atualizarMostrador(){

    if (gameOver) { return;}

    if (playTime == player1) {

        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "")
        
    }
}