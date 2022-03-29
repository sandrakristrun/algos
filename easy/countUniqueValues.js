function countUniqueValues(array){
  let left = 0;
  let right = 1;
  if(!array.length) return 0;
  while(right < array.length){
      if(array[left] !== array[right]){
        left++
        right++
      } else {
        array[left + 1] = array[right]
        right++;
      }
  }

  return left + 1;
}
console.log(countUniqueValues([1,2,2,3,3,3,4]))
