//DEMANDER A L'UTILISATEUR SON NOM
var PlayerNameEntree = prompt("Entrer votre nom : ");
var PlayerName = document.getElementById("playerName");
PlayerName.innerHTML = PlayerNameEntree;
var cards = [2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10, 11, 12, 13];
var names = ["c","car","t","p"];
//start the game
//VARIABELS
var clear = document.getElementById("clear"),
    start = document.getElementById("start"),
    hit = document.getElementById("hit"),
    stand = document.getElementById("stand"),
    double = document.getElementById("double"),
    buttons_start = document.getElementsByClassName('buttons-start')[0],
    buttons_game = document.getElementsByClassName('buttons-game')[0],
    won = document.getElementById("winner"),
    partieGagner = document.getElementById('winning');
    NbPartieGagner = 0;
    cash = document.getElementById('cash');
    sommePlayer = document.getElementById("sommePlayer");
    sommeComputer = document.getElementById("sommeComputer");
    somme1 = 0;
    somme2 = 0;
//MISE
var oneDollar = document.getElementById('1$'),
    fiveDollar = document.getElementById('5$'),
    teenDollar = document.getElementById('10$'),
    tFiveDollar = document.getElementById('25$'),
    fiftyDollar = document.getElementById('50$'),
    hundredDollar = document.getElementById('100$');

//LISTENERS
start.addEventListener("click", distribution);
stand.addEventListener("click", returnCard);
//les mise
oneDollar.addEventListener('click', dollar1);
fiveDollar.addEventListener('click', dollar5);
teenDollar.addEventListener('click', dollar10);
tFiveDollar.addEventListener('click', dollar25);
fiftyDollar.addEventListener('click', dollar50);
hundredDollar.addEventListener('click', dollar100);
//le hit
hit.addEventListener('click', hitCard);
//LE DOUBLE
double.addEventListener('click', doubleCard);
//FUNCTIONS
//mise
var number = 100000;
function dollar1() {
    if(confirm('Vous avez misez 1$')){
        buttons_start.style.display = "block";
        cash.innerHTML = number - 1 +".0"+' $';
        oneDollar.disabled = true;
        fiveDollar.disabled = true;
        teenDollar.disabled = true;
        tFiveDollar.disabled = true;
        fiftyDollar.disabled = true;
        hundredDollar.disabled = true;
    };
}
function dollar5() {
    if(confirm('Vous avez misez 5$')){
        buttons_start.style.display = "block";
        cash.innerHTML = number - 5 +".0"+' $';
        oneDollar.disabled = true;
        fiveDollar.disabled = true;
        teenDollar.disabled = true;
        tFiveDollar.disabled = true;
        fiftyDollar.disabled = true;
        hundredDollar.disabled = true;
    };
}
function dollar10() {
    if(confirm('Vous avez misez 10$')){
        buttons_start.style.display = "block";
        cash.innerHTML = number - 10 +".0"+' $';
        oneDollar.disabled = true;
        fiveDollar.disabled = true;
        teenDollar.disabled = true;
        tFiveDollar.disabled = true;
        fiftyDollar.disabled = true;
        hundredDollar.disabled = true;
    };
}
function dollar25() {
    if(confirm('Vous avez misez 25$')){
        buttons_start.style.display = "block";
        cash.innerHTML = number - 25 +".0"+' $';
        oneDollar.disabled = true;
        fiveDollar.disabled = true;
        teenDollar.disabled = true;
        tFiveDollar.disabled = true;
        fiftyDollar.disabled = true;
        hundredDollar.disabled = true;
    };
}
function dollar50() {
    if(confirm('Vous avez misez 50$')){
        buttons_start.style.display = "block";
        cash.innerHTML = number - 50 +".0"+' $';
        oneDollar.disabled = true;
        fiveDollar.disabled = true;
        teenDollar.disabled = true;
        tFiveDollar.disabled = true;
        fiftyDollar.disabled = true;
        hundredDollar.disabled = true;
    };
}
function dollar100() {
    if(confirm('Vous avez misez 100$')){
        buttons_start.style.display = "block";
        cash.innerHTML = number - 100 +".0"+' $';
        oneDollar.disabled = true;
        fiveDollar.disabled = true;
        teenDollar.disabled = true;
        tFiveDollar.disabled = true;
        fiftyDollar.disabled = true;
        hundredDollar.disabled = true;
    };
}
sommePlayer.style.display = "none";
sommeComputer.style.display = "none";



var playerHand = [];
var dealerHand =[];

//distribution des carte
function distribution() {
    // pour le son de batment des carte
    //var audio = new Audio('/audio/melange-card.m4a');
    //audio.play();
    for(var i = 0 ; i < 1 ; i++){
        var randomCard = cards[Math.floor(Math.random()* cards.length)];
        var randomName = names[Math.floor(Math.random()* names.length)];
        dealerHand.push(randomCard);
        somme1 = dealerHand[0];
        sommeComputer.innerHTML = somme1;
        document.getElementById("fliped").src = "/img/cards/dosCart/pack-test.png";
        document.getElementsByClassName('start-card')[i].src = 'img/cards/'+ randomCard + randomName +'.png';
    }
    /*
    switch(cards.value){
        case 11:
            return 10;
        case 12:
            return 10;
        case 13:
            return 10;
    }
    */
        for(var i = 1 ; i < 3; i++){
            var randomCard = cards[Math.floor(Math.random()* cards.length)];
            var randomName = names[Math.floor(Math.random()* names.length)];
            playerHand.push(randomCard);
            somme2 = playerHand[0] + playerHand[1];
            sommePlayer.innerHTML = somme2;
            document.getElementsByClassName('start-card')[i].src = 'img/cards/'+ randomCard + randomName +'.png';
            document.getElementsByClassName('start-card')[i].src = 'img/cards/'+ randomCard + randomName +'.png';
        }
    buttons_game.style.display = "block";
    sommePlayer.style.display = "block";
    sommeComputer.style.display = "block";
    buttons_start.style.display = "none";
    oneDollar.disabled = true;
    fiveDollar.disabled = true;
    teenDollar.disabled = true;
    fiftyDollar.disabled = true;
    hundredDollar.disabled = true;
};


var n = 0;
var standMax = 1;
var hitMax = 2;
//RETURN THE CARD
function returnCard() {
    setTimeout(function(){
        var randomCard = cards[Math.floor(Math.random()* cards.length)];
        var randomName = names[Math.floor(Math.random()* names.length)];
        document.getElementById("fliped").src =  'img/cards/'+ randomCard + randomName +'.png'; 
        dealerHand.push(randomCard);
        somme2 = dealerHand[0] + dealerHand[1];
        sommeComputer.innerHTML = somme2;
        document.getElementById("hit").disabled = true;
        document.getElementById("stand").disabled = true;
        document.getElementById("double").disabled = true;
        if(somme2 > 21){
            won.style.display = 'block';
            won.innerHTML = 'Le banquier as Ganger !';
        }else if(somme2 < 21){
            won.style.display = 'block';
            won.innerHTML = 'Vous avez Gagner';
            partieGagner.innerHTML = 1;
        }
    }, 1500);
};
//FONCTION QUI TIRE UNE CARTE
function hitCard() {
    setTimeout(function(){
        var randomCard = cards[Math.floor(Math.random()* cards.length)];
        var randomName = names[Math.floor(Math.random()* names.length)];
        var divSlot = document.getElementsByClassName('card-slot')[2];
        var img = document.createElement('img');
        img.classList.add('start-card-hit');
        img.setAttribute("id","card-tree");
        img.src = 'img/cards/'+ randomCard + randomName +'.png'; 
        divSlot.appendChild(img);
        playerHand.push(randomCard);
        somme1 =  playerHand[0] + playerHand[1] + playerHand[2] 
        sommePlayer.innerHTML = somme1;
        n++;
        if(n == hitMax){
            somme1 =  playerHand[0] + playerHand[1] + playerHand[2] + playerHand[3]
            sommePlayer.innerHTML = somme1;
            document.getElementById("hit").disabled = true;
            document.getElementById("stand").disabled = true;
            document.getElementById("double").disabled = true;
            returnCard();
        }
}, 500);
};
//FONCTION POUR DOUBLER LA MISE
var y = 0;
function doubleCard() {
    alert("Vous avez doubler votre mise !!!!");
    setTimeout(function(){
        var randomCard = cards[Math.floor(Math.random()* cards.length)];
        var randomName = names[Math.floor(Math.random()* names.length)];
        var divSlot = document.getElementsByClassName('card-slot')[2];
        var img = document.createElement('img');
        img.classList.add('start-card-hit');
        img.setAttribute("id","card-tree");
        img.src = 'img/cards/'+ randomCard + randomName +'.png'; 
        divSlot.appendChild(img);
        playerHand.push(randomCard);
        somme1 = playerHand[0] + playerHand[1] + playerHand[2];
        sommePlayer.innerHTML = somme1;
        if(playerHand.length-1 == 3){
            somme1 = playerHand[0] + playerHand[1] + playerHand[2] + playerHand[3];
            sommePlayer.innerHTML = somme1;
        }else{
            return;
        }
}, 500);
y++;
if(y==1){
    document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;
    document.getElementById("double").disabled = true;
    oneDollar.disabled = true;
    fiveDollar.disabled = true;
    teenDollar.disabled = true;
    fiftyDollar.disabled = true;
    hundredDollar.disabled = true;
    returnCard();
}
};