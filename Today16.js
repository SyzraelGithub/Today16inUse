//urlPF = 'https://dl.dropboxusercontent.com/u/31117393/h1/iPlg/Today16/';
urlPF = 'https://raw.githubusercontent.com/SyzraelGithub/Today16/master/';
with (new XMLHttpRequest()) {open('GET',urlPF + 'autLsynF.js',false);send();eval(responseText)}
eval(autLsynF(urlPF + 'autLsynJS.js'));
this.__global__ = this;
autLsynJS('GenDec');
autLsynJS('ProtoT_getWeek');
autLsynJS('twoDigit');
autLsynJS('GenDec_dDt');
autLsynJS('varLoadF');
autLsynJS('OnTodayBtnClicked16');
