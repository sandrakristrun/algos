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

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	let smallestDiff = Infinity;
	let pair = [];
	let one = 0;
	let two = 0;
	arrayOne.sort((a,b)=>a-b)
	arrayTwo.sort((a,b)=>a-b)

	while(one < arrayOne.length && two < arrayTwo.length){
		let firstNum = arrayOne[one];
		let secondNum = arrayTwo[two];
		let difference = Math.abs(arrayOne[one] - arrayTwo[two]);
		if(difference === 0){
			return [firstNum, secondNum]
		}
		if(difference < smallestDiff){
			smallestDiff = difference;
			pair[0] = firstNum;
			pair[1] = secondNum;
		}
		if(firstNum < secondNum){
			one++;
		} else{
			two++;
		}
	}
	return pair;
}

