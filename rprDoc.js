function rproc(guid) {
	console.log('rprDoc içine guid = "' + guid + '" için girildi');
	/*
		1805052002
		Şimdi MSI 'ın konsolundan aldığım kodları ters sırayla yazayım
		---
		newScr
		"function onLoadJS(fNameJS) {if (!document.getElementById(fNameJS)) {var s = document.createElement('script');s.id = fNameJS; /*'jQ001_001_init'; 1707301638 fNameJS olması gerekmez miydi? Değiştirdim.*^/s.type = 'text/javascript';s.src = 'https://rawgit.com/SyzraelGithub/Today16/master/' + fNameJS + '.js';document.head.appendChild(s)}};onLoadJS('onLoadInit');"
		---
		var newScr = conInLine(autLsynF(urlPF + 'onLoadnewDoc.js'));
		---
		tmpImp.body.getAttribute('onload')
		"function onLoadJS(fNameJS) {if (!document.getElementById(fNameJS)) {var s = document.createElement('script');s.id = fNameJS; /*'jQ001_001_init'; 1707301638 fNameJS olması gerekmez miydi? Değiştirdim.*^/s.type = 'text/javascript';s.src = 'https://rawgit.com/SyzraelGithub/Today16/master/' + fNameJS + '.js';document.head.appendChild(s)}};onLoadJS('onLoadInit');"
		---
		tmpImp.body
		---
		tmpImp
		---
		tmpImp.documentElement.innerHTML = objWizDoc.GetHtml()
		---
		var tmpImp = document.implementation.createHTMLDocument('');
		---
		document.implementation.createHTMLDocument('');
		---
		objWizDoc.GetHtml()
		---
		objWizDoc
		---
		( docQry : guid ) ile gelecek doc
	*/
}