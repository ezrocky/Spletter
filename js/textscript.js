document.getElementById('next').addEventListener('click', function() {
	var text = document.getElementById('area').value;
	localStorage.setItem('text', text);
});

document.getElementById('area').addEventListener('input', function(event) {
	if(event.target.value == null || event.target.value == '') {
		document.getElementById('next').setAttribute('disabled', 'disabled'); 
	} else {
		document.getElementById('next').removeAttribute('disabled');
	}
})
/*
function textConverter(str) {
	var strText = str;
}
*/
/*var b64 = localStorage.getItem("base64");
document.querySelector('.result').innerHTML = `<img src="${b64}" alt="b64" width="50" height="50">`*/