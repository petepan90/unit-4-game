$(document).ready(function () {

    // let wins = 0 ;
    // let losses = 0;


    // random number object
    let randomnumber = (Math.floor(Math.random() * 10));
    // the score to win
    let winningnumber = document.getElementsByClassName('.winningnumber');
    // loses
    let losses = document.getElementsByClassName('losses');
    // wins
    let wins = document.getElementsByClassName('wins');

    let total = document.getElementById('#total');

    if (winningnumber = randomnumber) {
        $('.winningnumber').html(randomnumber);
    };

    // $('img').bind('click', function () {
    // total = randomnumber;


    // ('#c1').on('click', (function click1() {
    // $('#total').html(randomnumber);





    // 1 .There will be four crystals displayed as buttons on the page.
    // 2.The player will be shown a random number at the start of the game.
    // 3.When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
    // 4.Your game will hide this amount until the player clicks a crystal.// 
    // 5.When they do click one, update the player's score counter.
    // 6.The player wins if their total score matches the random number from the beginning of the game.
    // 7.The player loses if their score goes above the random number.
    // 8.The game restarts whenever the player wins or loses.
    // 9.// When the game begins again, the player should see a new random number. 
    //10.Also, all the crystals will have four new hidden values. 
    //11.Of course, the user's score (and score counter) will reset to zero.
    //The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.












    //once diamond is clicked it adds to the total
    // console.log(displaynum);
    // create wins guesses losses
    // random number displayed for the random id
    // display total score in the score id
    // store point value for all four crystals, once clicked individually; all crystals will have different point value
    // create a reset function once the points go over the  goal div and also once the goal div and the total score div match
    // have computer choose a random number function for point values for each crystal and also for the value of the goal div
    // function for wins and losses
    // four on click events for crytals
    // review topics from week four or three 
});