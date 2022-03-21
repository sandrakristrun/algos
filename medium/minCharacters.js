function minimumCharactersForWords(words) {
  // Write your code here.
	let maxCharacter = {};
	for(const word of words){
		let maxFreq = 0;
		let characters = {};

		for(let i = 0; i < word.length; i++){
			let char = word[i];
			if(characters[char]){
				characters[char]++;
			} else {
				characters[char] = 1;
			}

			if(maxCharacter[char]){
				maxCharacter[char] = Math.max(maxCharacter[char], characters[char])
			} else {
				maxCharacter[char] = characters[char]
			}
		}
	}

  let letters = []
	for(let char in maxCharacter){
		while(maxCharacter[char]){
			letters.push(char)
			maxCharacter[char]--
		}
	}
  return letters;
}
