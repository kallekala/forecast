
function main() {
	$( "#submitName" ).on("click", function() {
		$("#prediction1Name").text("kala");
	});

	// alkaa nappi jolla filteröidään bokseja
	$("#predictionFilter").click(function(){
		alert("The paragraph was clicked.");
		console.log("kjj");
		$(".unResponded").toggleClass("hide");
	});


	//luot uuden ennustuksen
	$("#submitName").click(function(){
		var predictionName = $("input[name=Name]").val();
		$("#prediction1Name").text(predictionName);
		$(".predictions").append("<div class='predictionBox'>"+ predictionName+ "</div>");
		$("#names").append('<option value="kas">' + predictionName + "</option>");
	});

	// user inputs probability
	$("")




};

$(document).ready(main);




	/* scoring system. works

	var userP = //user input saved from form. 0-1
	var correctAnswer = //input from admin. 0 or 1
	var userScore
	function giveScore() {
	if (correctAnswer===1){
		userScore=(userP-1)**2 + (1-userP)**2
	} else {
		userScore=((userP-0)**2 + (0-userP)**2);
	}
	console.log(userScore);
	};
	giveScore()
	*/
