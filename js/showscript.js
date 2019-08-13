window.onload = function() {
	var b64 = localStorage.getItem("base64");
	var canvLetter = `<img src="${b64}" alt="b64" width="13" height="15">`
	var upperCanvLetter = `<img src="${b64}" alt="b64" width="16" height="19">`
	var idLetter = localStorage.getItem('key letter');
	var inText = localStorage.getItem('text');

	var textArr = inText.split(' ');
	for(var i = 0; i < textArr.length; i++) {
		var wordArr = textArr[i].split('');
		for(var j = 0; j < wordArr.length; j++) {
			if(wordArr[j] == idLetter) {
				wordArr.splice([j], 1, canvLetter);
			} else if(wordArr[j] == idLetter.toUpperCase()) {
				wordArr.splice([j], 1, upperCanvLetter);
			}
		}
		textArr[i] = wordArr.join('');
	}
	var result = textArr.join(' ');

	document.querySelector('.result').innerHTML += result;
}