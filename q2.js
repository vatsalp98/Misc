first5k = 5000;


function architectFees(costBuilding){
	eightPercent = first5k * 0.08;
	remainingCost = costBuilding - first5k;

	if (remainingCost<80000){
		return Fees = eightPercent + (remainingCost*0.03);
	}
	else if (remainingCost > 80000){
		return Fees = eightPercent + (remainingCost*0.025);
	}
}

console.log(architectFees(80000.45));
