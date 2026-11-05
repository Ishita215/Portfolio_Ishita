const splitDescriptionIntoLines = element => {
  if (element.dataset.linesReady) return;

  const words = element.textContent.trim().split(/\s+/);
  element.textContent = '';
  const wordElements = words.map(word => {
    const wordElement = document.createElement('span');
    wordElement.className = 'descWord';
    wordElement.textContent = word;
    element.append(wordElement, ' ');
    return wordElement;
  });

  const lines = [];
  wordElements.forEach(wordElement => {
    const currentLine = lines[lines.length - 1];
    if (!currentLine || Math.abs(currentLine.top - wordElement.offsetTop) > 1) {
      lines.push({ top: wordElement.offsetTop, words: [wordElement] });
    } else {
      currentLine.words.push(wordElement);
    }
  });

  element.textContent = '';
  lines.forEach((line, index) => {
    const lineElement = document.createElement('span');
    lineElement.className = 'descLine';
    lineElement.style.setProperty('--line-index', index);
    line.words.forEach((wordElement, wordIndex) => {
      lineElement.append(wordElement);
      if (wordIndex < line.words.length - 1) lineElement.append(' ');
    });
    element.append(lineElement);
  });
  element.dataset.linesReady = 'true';
};

const observeDescriptions = () => {
  const process = () => document.querySelectorAll('.heroText .desc').forEach(splitDescriptionIntoLines);
  process();
  new MutationObserver(process).observe(document.body, { childList: true, subtree: true });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', observeDescriptions, { once: true });
} else {
  observeDescriptions();
}
