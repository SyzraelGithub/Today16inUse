autLsynF = function(urlF) {
	with (new XMLHttpRequest()) {open('GET',urlF,false);send();return responseText}
}

getPF = function() {
	if (typeof urlPF != 'undefined') {
		return urlPF
	} else {
		return 'https://dl.dropboxusercontent.com/u/31117393/h1/iPlg/Today16/'
	}
}