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
  result.innerHTML = `Hallo ${name},<br>Zweifel wie z.B. - ${zweifel} - können Ansporn sein, <br>um Neues zu erkunden, Dich auszutauschen und Dir Offenheit zum Lernen zu bewahren<br>.Lass die Zweifel aber nicht so stark werden,<br> dass sie Dich kaputt machen.<p>Eines musst Du unbedingt wissen:<br><strong>Du bist toll und ganz genau richtig, so wie Du bist!</strong></p><p>Und wenn Du das nicht glaubst, dann <a href=https://memegen.link/custom/Zuviel_Zweifel_ist_nicht_gut/${name},_Du_bist_toll!.jpg?alt=https://github.com/eBildungslabor/zweifeltest/meme.jpg>klicke hier</a>`;
  result.style.display = 'block';
};
