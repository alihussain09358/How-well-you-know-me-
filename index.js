var readlineSync = require('readline-sync');
var score = 0;
console.log("Answer 'y' or 'n' only and enter");
function play(ques, ans) {
	var userAnswer = readlineSync.question(ques);
	if (userAnswer == ans) {
		score++;
		console.log('You are right!!!!');
		console.log('Your score is ' + score + '.');
	} else {
		score--;
		console.log('Your score is ' + score + '.');
	}
	if (score == 5) {
		console.log('Wow!! you have scored maximum.');
	}
}
var ques1 = 'Am I older than 25 ? ';
var ans1 = 'n';
play(ques1, ans1);

var ques2 = 'Do I like tea ? ';
var ans2 = 'y';
play(ques2, ans2);

var ques3 = 'Am I from mumbai ? ';
var ans3 = 'y';
play(ques3, ans3);

var ques4 = 'Do I like ironman ? ';
var ans4 = 'y';
play(ques4, ans4);

var ques5 = 'Am I foodie ? ';
var ans5 = 'n';
play(ques5, ans5);
