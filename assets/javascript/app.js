		//variables
		var correctCounter = 0;
		var incorrectCounter = 0;
		var unansweredCounter = 0;
		var countDisplay = 120;
		//holds setInterval
		var intervalId;

		$(document).ready(function(){
		$("#gameContainer").hide();
		$("#endGameContainer").hide();
		
		
//startCountDown();
//			return;
		$("#start").on("click", function() {
			//hides start container
			$("#startContainer").hide();
			//show game container
			$("#gameContainer").show();
			run();
			return;

		});


		function decrement(){
			countDisplay--;			
			$("#display").html(countDisplay + " Seconds");

			//$("#end").on("click", function() {
				//clearInterval(intervalId);
			//	count = 0;
			//	return;

			//$("#gameContainer").hide();
			//$("#endGameContainer").show();
			//stats();
		//});

			if(countDisplay == 0) {
			//$("#endGameContainer").show();
			stats();
			$("#gameContainer").hide();
			}
		
		}

		function run() {
			setInterval(decrement, 1000);

		}
		

		function stats(){
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();
		var Q11 = $('input:radio[name="q11"]:checked').val();
		
		if(Q1 == undefined) {
			unansweredCounter++;
		}
		else if(Q1 == "Chris Rock"){
			correctCounter++;
		}
		else{
			incorrectCounter++;
		}
		
		if(Q2 == undefined){
			unansweredCounter++;
		}
		else if(Q2 == "Hair cancer"){
			correctCounter++;
		}
		else{
			incorrectCounter++;
		}


		if(Q3 == undefined){
			unansweredCounter++;
		}
		else if(Q3 == "Flonkerton"){
			correctCounter++;
		}
		else{
			incorrectCounter++;
		}


		if(Q4 == undefined){
			unansweredCounter++;
		}
		else if(Q4 == "Big Tuna"){
			correctCounter++;
		}
		else{
			incorrectCounter++;
		}


		if(Q5 == undefined){
			unansweredCounter++;
		}
		else if(Q5 == "Phyllis"){
			correctCounter++;
		}
		else{
			incorrectCounter++;
		}


		if(Q6 == undefined){
			unansweredCounter++;
		}
		else if(Q6 == "Sprinkles"){
			correctCounter++;
		}
		else{
			incorrectCounter++;
		}


		if(Q7 == undefined){
			unansweredCounter++;
		}
		else if(Q7 == "Three"){
			correctCounter++;
		}
		else{
			incorrectCounter++;
		}


		if(Q8 == undefined){
			unansweredCounter++;
		}
		else if(Q8 == "Hank"){
			correctCounter++;
		}
		else{
			incorrectCounter++;
		}


		if(Q9 == undefined){
			unansweredCounter++;
		}
		else if(Q9 == "Scotch and Splenda"){
			correctCounter++;
		}
		else{
			incorrectCounter++;
		}

		if(Q10 == undefined){
			unansweredCounter++;
		}
		else if(Q10 == "Andy"){
			correctCounter++;
		}
		else{
			incorrectCounter++;
		}

		if(Q11 == undefined){
			unansweredCounter++;
		}
		else if(Q11 == "Recyclops"){
			correctCounter++;
		}
		else{
			incorrectCounter++;
		}

		$(".correctCounter").html(correctCounter);
		$(".incorrectCounter").html(incorrectCounter);
		$(".unansweredCounter").html(unansweredCounter);

		$("#endGameContainer").show();
		}	
			
		});

		//onclick game starts
		//onclick switched to game container
		//onlcick starts the countdown
		//botton or checkbox for users answers
		//users answer is recorded as correct, incorrect, or unanswered
		//if countdown ends, end game
		//when done button is clicked end game
		//end game container come up
		



