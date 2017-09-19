// Pseudocode!!!

// When page loads, have a start button that takes you to the questions

// Step 1 - create a timer that shows up under the title of the web page - set it to 30 seconds

// Step 2 - Create A Submit button that the user can click if they finish before the timer has run out

// Step 3 - Create if statements that will recognize if the answers chosen are correct or not

// Step 4 - once submit has been clicked or timer has run out, send user to new page that shows the results
// correct, incorrect and unanswered totals


// Countdown timer for trivia game

// on click for the start of the game/timer
$("#startClock").click(function() {
// sets amount of time to 30 seconds
var count = 30;

// creaters a variable called 'counter' that is given an interval of 1 second
var counter = setInterval(timer, 1000);
// creates a function called 'timer' that is told to count down by 1 sec
function timer() {
	count = count -1;
	if (count <= 0)
	{ 
	clearInterval(counter);
	return;
	}

	// inputs timer into the html so that it can be seen on the screen
	document.getElementById('timer').innerHTML = count + " Seconds Remaining";
  }

	timer();
	$("#form").removeClass("hideme");
	$("#timer").removeClass("hideme");	

	// how do you get the timer to stop when submit is clicked?
});

$('#submit').click(function() {
	$("#form").addClass("hideme");
	$("#timer").addClass("hideme");
	$("#results").removeClass("hideme");
	$("#startClock").addClass("hideme");
});

// create if statement that tallies whether right / wrong / or nothing was chosen and spits that out
// to the results page
$("#submit").click(function() {

// added to keep the default (page refresh?) from submit from happening
	event.preventDefault();

	var right = 0;
	var wrong = 0;
	var unanswered = 0;
	
	// If else statements to gather the right/wrong/unanswered information
	// Question 1
	var quest1 = $('input[name=jordan1]:checked').val(); 
	
	if (quest1 === "right") {
		right++;
	} else if (quest1 === "wrong") {
		wrong++;
	} else {
		unanswered++;
	};


	// Question 2
	var quest2 = $('input[name=jordan2]:checked').val();
	
	if (quest2 === "right") {
		right++;
	} else if (quest2 === "wrong") {
		wrong++;
	} else {
		unanswered++;
	};

	// Question 3
	var quest3 = $('input[name=jordan3]:checked').val();
	
	if (quest3 === "right") {
		right++;
	} else if (quest3 === "wrong") {
		wrong++;
	} else {
		unanswered++;
	};

	// Question 4
	var quest4 = $('input[name=jordan4]:checked').val();
	
	if (quest4 === "right") {
		right++;
	} else if (quest4 === "wrong") {
		wrong++;
	} else {
		unanswered++;
	};


	// Question 5
	var quest5 = $('input[name=jordan5]:checked').val();
	
	if (quest5 === "right") {
		right++;
	} else if (quest5 === "wrong") {
		wrong++;
	} else {
		unanswered++;
	};
	console.log(right);
	console.log(wrong);
	console.log(unanswered);

	// show results on web page
	$('#right').append(right);	
	$('#wrong').append(wrong);	
	$('#unanswered').append(unanswered);	

});









