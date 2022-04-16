
// 'a(b((cd))e((f)))'
function innerMost(string){

  let table = {};
  let count = 1;
  let current = ''
  for(let i = 0; i < string.length; i++){
    let letter = string[i];
    if(letter === '('){
      count++
      current = '';
    } else if(letter === ')'){
      if(table[count]){
        table[count].push(current)
      } else {
        table[count] = [current]
      }
      count--
      current = '';
    } else {
      current += letter
    }
  }
  let max = Math.max(...Object.keys(table))
  return table[max]
}

console.log(innerMost('a(b((cd))e((f)))'
))
