//Black-Jack !
// Fonction pour tirer une carte
function drawCard() {
    return Math.floor(Math.random() * 10) + 1;
}

alert("Let's play !"); //le jeu se lance et on découvre 2 cartes du joueur et 1 carte du dealer

// Le joueur pioche une première carte
const card1 = drawCard();
console.log('Vous avez pioché un : ' + card1);
// Le joueur pioche une seconde carte
const card2 = drawCard();
console.log('Vous avez pioché un : ' + card2);
// Valeur du jeu
let playerScore = card1 + card2;
console.log('Vous avez en jeu : ' + playerScore);

//Le dealer
const card3 = drawCard();
const card4 = drawCard();
let dealerScore = card3 + card4;
console.log('Le dealer a pioché un : ' + card4 + ' et une seconde carte inconnue');

// le player joue
while (playerScore < 21){

    const gamePlay = prompt('Piocher une carte ? oui / non');
    
    if (gamePlay === 'oui'){
        let card = drawCard();
        playerScore += card;
        console.log('Vous avez pioché : ' + card);
        console.log('Vous avez désormais en jeu : ' + playerScore);
    }
    else {
        console.log('Votre score : ' + playerScore);
        console.log('Le score du dealer : ' + dealerScore);
        break;   
    }
}

// le dealer joue
while (dealerScore < 17){
        card = drawCard();
        dealerScore += card;
        console.log('Le dealer pioche une carte');
        console.log('Votre score : ' + playerScore);
        console.log('Le score du dealer : ' + dealerScore);
}


if (playerScore > dealerScore && playerScore <= 21){ 
    console.log('Vous avez gagné !');
}else {  
    console.log('Vous avez perdu');
}
