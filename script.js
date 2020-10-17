var submitButton = document.getElementById('submit');
var nameInput = document.getElementById('name');
var zweifelInput = document.getElementById('zweifel');
var form = document.getElementById('form-name');
var result = document.getElementById('result');

submitButton.onclick = (e) => {
  e.preventDefault();
  var name = nameInput.value;
    var zweifel = zweifelInput.value;
  
  if ( !name ) {
    return;
  }
  
    if ( !zweifel ) {
    return;
  }
  
  form.style.display = 'none';
  result.innerHTML = `<h1>Auflösung für ${name}</h1>Zweifel (zum Beispiel: ${zweifel}?) können Ansporn sein, <br>um Neues zu erkunden, Dich auszutauschen und Dir Offenheit zum Lernen zu bewahren.<br>Lass die Zweifel aber nicht so stark werden,<br> dass sie Dich kaputt machen und Du nur noch haderst.<br>Denn eines musst Du unbedingt wissen, ${name}:<br><strong>Du bist toll und ganz genau richtig, so wie Du bist!</strong></p><p>Und wenn Du immer noch an Dir zweifelst, dann <a href=https://memegen.link/custom/Zuviel_Zweifel_ist_nicht_gut/${name},_Du_bist_toll!.jpg?alt=https://ebildungslabor.github.io/zweifeltest/meme.jpg>klicke hier</a>`;
  result.style.display = 'block';
};
