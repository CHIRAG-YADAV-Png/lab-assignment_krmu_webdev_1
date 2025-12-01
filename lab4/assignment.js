(function runConsoleQuiz(){

	const questions = [
		{ q: "What is the capital of India?", a: "delhi" },
		{ q: "Which language is primarily used for web styling?", a: "css" },
		{ q: "Which planet is known for its ring?", a: "saturn" },
		{ q: "What is the only metal that is liquid at room temperature?", a: "mercury" },
		{ q: "How many bones human body have?", a: "206" },
		{ q: "Name the women's world cup winning team.", a: "india" },
        {q: "Which is the largest desert in the  world?", a:"sahara"}
	];

	let score = 0;

	alert("Welcome to the quiz!");
alert("You will be asked " + questions.length + " questions.");

	for (let i = 0; i < questions.length; i++) {

		const userInput = prompt((i + 1) + ". " + questions[i].q);

		if (userInput === null) {
			break;
		}

		const answer = userInput.trim().toLowerCase();
		const validAnswers = Array.isArray(questions[i].a) ? questions[i].a : [questions[i].a];

		if (validAnswers.map(function(a){ return a.toLowerCase(); }).includes(answer)) {
			score++;
			alert("Correct!");
		} else {
			alert("Incorrect. Correct answer: " + validAnswers[0]);
		}
	}

	alert("Quiz Complete! Score: " + score + " / " + questions.length);
	console.log("Quiz Score: " + score + " / " + questions.length);

})();
