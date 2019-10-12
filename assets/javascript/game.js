$(document).ready(function () {

    let wins = 0;
    let losses = 0;
    let randomnumber = (Math.floor(Math.random() * 10));
    let winningscore = document.getElementsByClassName('winningscore');
    let loser = document.getElementsByClassName('loser');
    let points = document.getElementsByClassName('points');

    $('#c1').on('click', (function c1() {
        let randomnumber = winningscore;
        console.log(c1());
    }));







    // console.log(displaynum);
    // initialize wins guesses losses
    // random number displayed for the random id
    // display total score in the score id
    // store point value for all four crystals, once clicked individually; all crystals will have different point value
    // create a reset function once the points go over the  goal div and also once the goal div and the total score div match
    // have computer choose a random number function for point values for each crystal and also for the value of the goal div
    // function for wins and losses
    // four on click events for crytals
    // review topics from week four or three 
});