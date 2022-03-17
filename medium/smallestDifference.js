function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	let smallestDiff = Infinity;
	let numbers = [null, null]
	for(let i = 0; i < arrayOne.length; i++){
		for(let j = 0; j < arrayTwo.length; j++){
			let difference = Math.abs(arrayOne[i] - arrayTwo[j]);
			if(difference < smallestDiff){
				console.log(smallestDiff)
				smallestDiff = difference;
				numbers[0] = arrayOne[i];
				numbers[1] = arrayTwo[j];
			}
		}
	}
	return numbers;
}
