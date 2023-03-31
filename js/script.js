printMessage('Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!');
var computerMove, randomNumber;
randomNumber = Math.floor(math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
    computerMove = 'Kamień';
} else {
    computerMove = 'Nieznany ruch';
}
if (randomNumber == '2') {
    computerMove = 'Papier';
} else {
    computerMove = 'Nieznany ruch';
}
if (randomNumber == '3') {
    computerMove = 'Nożyce';
} else {
    computerMove = 'Nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);





computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
var playerMove;
playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to kamień, to wygrywam!');
var randomNumber;
randomNumber = Math.floor(math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);
