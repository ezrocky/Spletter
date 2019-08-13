document.getElementById('LS').onclick = function(event) {
	document.getElementById('next').removeAttribute('disabled'); 

	if(event.target.tagName != 'BUTTON') {
		return;
	} else {
		console.clear();
		localStorage.clear()

		var buttonArr = document.getElementsByTagName('button');
		for(var i = 0; i < buttonArr.length; i++) {
			buttonArr[i].style.outline = 'none';
			buttonArr[i].classList.remove('addedClass');
		}
		event.target.style.outline = "3px solid green";
		event.target.className += "addedClass"

		console.log(event.target.id);
		localStorage.setItem('key letter', event.target.id);
	}
}

document.getElementById('next').addEventListener('click', function() {
	var bArr = document.getElementsByTagName('button');

	for(var i = 0; i < bArr.length; i++) {
		if(bArr[i].className == 'addedClass') {
			console.log(bArr[i]);
			document.querySelector('.hidden').style.display = 'none';
			break;
		} else {
			document.querySelector('.hidden').style.display = 'block';
			document.getElementById('next').setAttribute('disabled', 'disabled'); 
		}
	}
});

var dataObj = {
	letter: null,
	image: null
}