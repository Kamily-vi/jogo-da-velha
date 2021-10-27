
const espacos = document.querySelectorAll(".espaco");
let checarTurno = true;

const JOGADOR_X = "X";
const JOGADOR_O = "O";

document.addEventListener("click", (event) => {
    if(event.target.matches(".espaco")) {
    console.log(event.target.id);
    jogar(event.target.id);

    }
} );

function jogar(id) {

    const espaco = document.getElementById(id);
    turno = checarTurma ? JOGADOR_X : JOGADOR_O;
    celula.textContent = turno;
    checarTurma = !checarTurno;
    checarVencedor(turno)
}

function checarVencedor(params) {
    
}