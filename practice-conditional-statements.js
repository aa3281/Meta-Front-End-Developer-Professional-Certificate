var age = 10;

function AreYouOldEnough() {
	if (age >= 65) {
		console.log("You get your income from your pension.");
	}

	else if (age < 65 && age >= 18) {
		console.log("Each month you get a salary.");
	}

	else if (age < 18) {
		console.log("You get an allowance.");
	}

	else {
		console.log("The value of the age variable is not numerical.")
	}
};

AreYouOldEnough();

var day = "Sunday";

function DaysoftheWeek() {
	switch(day) {
		case "Monday":
			console.log("Do", day, "work");
			break;
		case "Tuesday":
			console.log("Do", day, "work");
			break;
		case "Wednesday":
			console.log("Do", day, "work");
			break;
		case "Thursday":
			console.log("Do", day, "work");
			break;
		case "Friday":
			console.log("Do", day, "work");
			break;
		case "Saturday":
			console.log("Don't do work. It's Shabbat");
			break;
		case "Sunday":
			console.log("Do", day, "work");
			break;
		default:
			console.log("There is no such day.");
	};
};

DaysoftheWeek();
