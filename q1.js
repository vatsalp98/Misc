var letters = /^[A-Za-z]+$/;


function hotelRoomPrice(persons, members, payment){
	var persons = window.prompt("Please enter the number of persons staying (1-6) ?", "1");
	var members = window.prompt("Are you a AAA member (y) or (n) ?", "y");
	var payment = window.prompt("How would you like to pay check(ck) or Credit card(cc) ?", "ck");
	var numberNights = window.prompt("How many nights are you staying ?", "2");

	if (persons == 0 || persons > 6) throw "No or Too many people for a room !";
	if (persons.value.match(letters)) throw "Not numeric!";

	if (members == "Y" || members == "y"){
		if(persons <= 2){
			priceNight = 50 - (50*0.15);
		}
		else if(persons == 3 || persons == 4){
			priceNight = 60 - (60*0.10);
		}
		else if(persons == 5 || persons == 6){
			priceNight = 70 - (70*0.05);
		}
	}

	else if(members == "N" || members == "n"){
		if(persons <= 2){
			priceNight = 50;
		}
		else if(persons == 3 || persons == 4){
			priceNight = 60;
		}
		else if(persons == 5 || persons == 6){
			priceNight = 70;
		}
	}

	else if(payment == "cc"){
		priceNight = priceNight + (priceNight*0.04);
	}

	return "Your total price is $" + priceNight * numberNights;
}

console.log(hotelRoomPrice(1,"y","ck"));