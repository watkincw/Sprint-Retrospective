// lucky number shhhhh
const luckyNumber = 7;
// guess counter
let counter = 0;

// lucky number check function
function checkNumber() {

    // get input value(user's guess)
    let number = Number(document.getElementById('guessedNumber').value);

    if (number > 10 || number < 0 || number == '') {
        // target the 'Bad Number' answer message
        let hidden = document.getElementById('hiddenBadNumber');

        // un-hide it
        hidden.classList.remove('hide');

        // after 3 seconds(3000 milliseconds), re-hide it
        setTimeout(function() {
            hidden.classList.add('hide');
        }, 3000);

    // if input number is the lucky number
    } else if (number == luckyNumber) {
        // target the 'Correct' answer message
        let hidden = document.getElementById('hiddenCorrect');
    
        // un-hide it
        hidden.classList.remove('hide');
        
        // after 3 seconds, re-hide it
        setTimeout(function() {
            hidden.classList.add('hide');
        }, 3000);

        // increment the guess counter
        counter++;

        // display new guess count
        document.getElementById('counter').innerHTML = counter;

    // if the input number is NOT the lucky number
    } else if (number != luckyNumber) {
        // target the 'Wrong' answer message
        let hidden = document.getElementById('hiddenWrong');

        // un-hide it
        hidden.classList.remove('hide');

        // after 3 seconds(3000 milliseconds), re-hide it
        setTimeout(function() {
            hidden.classList.add('hide');
        }, 3000);

        // increment the guess counter
        counter++;

        // display new guess count
        document.getElementById('counter').innerHTML = counter;

        console.log(counter);
        console.log(document.getElementById('counter').value);
    }
};