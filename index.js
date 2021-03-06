// lucky number shhhhh
function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(100);
  return Math.floor(Math.random() * (100 - 1) + 1); //The maximum is exclusive and the minimum is inclusive
}
let luckyNumber = getRandomInt();

// guess counter
let counter = 0;

// lucky number check function
function checkNumber() {
  // get input value(user's guess)
  let number = Number(document.getElementById("guessedNumber").value);

  if (number > 100 || number < 0 || number == "") {
    // target the 'Bad Number' answer message
    let hidden = document.getElementById("hiddenBadNumber");

    // un-hide it
    hidden.classList.remove("hide");

    // after 3 seconds(3000 milliseconds), re-hide it
    setTimeout(function () {
      hidden.classList.add("hide");
    }, 3000);

    // if input number is the lucky number
  } else if (number == luckyNumber) {
    // target the 'Correct' answer message
    let hidden = document.getElementById("hiddenCorrect");

    // increment the guess counter
    counter++;

    // display new guess count
    document.getElementById('counter').innerHTML = counter;

    // reset counter value, not updating the value on the page yet
    counter = 0;

    // un-hide it
    hidden.classList.remove("hide");

        // Tell the user they guessed the correct number and reset counter after 3 seconds
        setTimeout(function() {
        // display correct answer message
        hidden.classList.add('hide');

        // update the displayed count value on the page
        document.getElementById('counter').innerHTML = counter;

        // clear input value
        document.getElementById('guessedNumber').value = '';
    }, 3000);

    // generates a new random number for the next game
    luckyNumber = getRandomInt();

    // if the input number is NOT the lucky number
  } else if (number != luckyNumber) {
    if (number > luckyNumber) {
      let hiddenHigh = document.getElementById("hiddenHigh");
      hiddenHigh.classList.remove("hide");

      // after 3 seconds(3000 milliseconds), re-hide it
      setTimeout(function () {
        hiddenHigh.classList.add("hide");
      }, 3000);
    } else {
      let hiddenLow = document.getElementById("hiddenLow");
      hiddenLow.classList.remove("hide");

      // after 3 seconds(3000 milliseconds), re-hide it
      setTimeout(function () {
        hiddenLow.classList.add("hide");
      }, 3000);
    }

    // increment the guess counter
    counter++;

    // display new guess count
    document.getElementById("counter").innerHTML = counter;

    console.log(luckyNumber);
  }
}
