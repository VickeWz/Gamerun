const englishContent = document.getElementById('englishContent');
const swedishContent = document.getElementById('swedishContent');
const languageButton = document.getElementById('languageButton');
const englishFlag = document.getElementById('englishFlag');
const swedishFlag = document.getElementById('swedishFlag');

languageButton.addEventListener('click', () => {
  if (englishContent.style.display === 'block') {
    englishContent.style.display = 'none';
    swedishContent.style.display = 'block';
    englishFlag.style.display = 'none';
    swedishFlag.style.display = 'inline-block';
  } else {
    englishContent.style.display = 'block';
    swedishContent.style.display = 'none';
    englishFlag.style.display = 'inline-block';
    swedishFlag.style.display = 'none';
  }
});