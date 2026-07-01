const button = document.getElementById('reveal-button');
const letter = document.getElementById('letter');
const typedText = document.getElementById('typed-text');

const loveMessage = `My dearest Bebii,

From the moment our paths crossed, every ordinary day became brighter.
Your laughter is my favorite sound, and your smile is the light I carry with me.

I love you more than words can say, and this little letter is a gentle reminder that you are cherished, adored, and always loved.

Forever yours,
Your Bebii loves`;

function typeLetter(text, element, speed = 35) {
  let index = 0;
  element.textContent = '';
  const interval = setInterval(() => {
    element.textContent += text[index];
    index += 1;
    if (index >= text.length) {
      clearInterval(interval);
    }
  }, speed);
}

button.addEventListener('click', () => {
  button.disabled = true;
  button.textContent = 'Sending love...';
  setTimeout(() => {
    letter.classList.remove('hidden');
    button.classList.add('hidden');
    typeLetter(loveMessage, typedText);
  }, 500);
});
