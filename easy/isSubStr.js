function isSubsequence(str1, str2) {
  let first = 0;
  let second = 0;
  while(second < str2.length){
      console.log(first)
      if(first === str1.length - 1) return true
      if(str1[first] === str2[second]){
          first++;
          second++
      } else {
          second++
      }
  }
  return false
}

console.log(isSubsequence('sing', 'sting'))
