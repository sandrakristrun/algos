Write a function medianSort() that accepts one argument: an array. The elements of this array can be either numbers or arrays of numbers. The function should return the initial array sorted by the numbers or the median values of the arrays of numbers.
For example:
medianSort([3, [-2, 4, 9]]) à [3, [-2, 4, 9]]
The median of [-2, 4, 9] is 4, so we should sort that array after the 3.
medianSort([[12, 9, 1, 25], 4]) à [4, [12, 9, 1, 25]] The median of [12, 9, 1, 25] is 10.5, and 10.5 is greater than 4.
medianSort([[2.4, 0.2, 9.8], 0, [-1], [-9, -4]]) à [[-9, -4], [-1], 0, [2.4, 0.2, 9.8]]
The median of [2.4, 0.2, 9.8] is 2.4. The median of [-1] is -1. The median of [-9, -4] is -6.5. Therefore, the sorted order of these medians is [-6.5, -1, 0, 2.4]


function medianSort(arr){
  let swap = true;
	let counter = 0;
	while(swap){
		swap = false;
		for(let i = 0; i < arr.length - 1 - counter; i++){ //i = 0
			if(findMedian(arr[i]) > findMedian(arr[i + 1])){
				[arr[i], arr[i + 1]] = [arr[i+1], arr[i]]
				swap = true;
			}
		}
		counter++;
	}
	return arr;
}

function findMedian(elem){
  let median = 0;
  if(elem.length === 1){
     return elem[0]
  } else if(Array.isArray(elem)){
    for(let i = 0; i < elem.length; i++){
      median += elem[i]
    }
    return median / elem.length
  } else {
    return elem
  }
}

console.log(medianSort([[2.4, 0.2, 9.8], 0, [-1], [-9, -4]]))





mixPotions([
  {volume: 100,
ingredients: { ingredient1: 50, ingredient2: 20, ingredientA: 500 }}, {volume: 300,
ingredients: { ingredient1: 150, ingredientA: 300, ingredientB: 950 }}, ])
The above should return:
{ volume: 400,
ingredients: { ingredient1: 125, ingredient2: 5, ingredientA: 350,
ingredientB: 712.5 } }
The result's volume is 400 because 100 + 300 = 400.
The result's concentration of ingredient1 is 125. We can determine this because first potion has 50 units of concentration in 100 units of volume and the second potion has 125 units of concentration in 300 units of volume, and (50*100 + 150*300)/(100 + 300) = 125.
Only one of the potions has any of ingredient2, Using the same math, but with 0 for the concentration of ingredient2 in the second potion, we get (20*100 + 0*300)/(100 + 300) = 5.

function mixPotions(arr){
  let output = { volume : 0, ingredients: {}}
  for(let potion of arr){
    output.volume += potion.volume
  }
  for(let potion of arr){
    let keys = Object.keys(potion.ingredients)
    for(let key of keys){
      if(output.ingredients[key]){
        output.ingredients[key] += ((potion.ingredients[key] * potion.volume)/output.volume)
      } else {
        output.ingredients[key] = ((potion.ingredients[key] * potion.volume)/output.volume)
      }
    }
  }
  return output
//   return Object.keys(arr).reduce(function (previous, key) {
//     previous.value += arr[key].value;
//     return previous;
// }, { });
}
console.log( mixPotions([
    {volume: 100,
  ingredients: { ingredient1: 50, ingredient2: 20, ingredientA: 500 }}, {volume: 300,
  ingredients: { ingredient1: 150, ingredientA: 300, ingredientB: 950 }}, ]))




  function ticTacToe(string){
    let grid = new Array(3).fill().map(()=>Array(3).fill())
    let idx = 0
    let newStr = ''
    for(let i = 0; i < string.length; i++){
      if(string[i] === 'X'|| string[i] === 'O' || string[i] === ' ') newStr += string[i]

    }
    console.log(newStr.length)
    for(let i = 0; i < 3; i++){
      for(let j = 0; i < 3; j++){
        grid[i][j] = string[idx]
        idx++
      }
    }
    //next find empty spaces


    console.log(grid)
  }
  function dfs(grid, i, j){


  }

  console.log(ticTacToe("X X\n OO\nXOO"))
