(function() {
  const nativeInput = document.getElementById("NativeTextarea");
  const latexInput = document.getElementById("LatexTextarea");
  const copyButton = document.getElementById("copyButton");

  const characters = {
    '0': "⏴", '1': "●", '2': "▬", '3': "▲", '4': "■", '5': "▱", '6': "◈", '7': "▩", '8': "▣", '9': "⏵",
    'a': "σ", 'b': "£", 'c': "Ǝ", 'd': "₳", 'e': "ε", 'f': "┘", 'g': "Γ", 'h': "μ", 'i': "∩", 'j': "ſ",
    'k': "≡", 'l': "Œ", 'm': "ß", 'n': "þ", 'o': "⌐", 'p': "Æ", 'q': "¶", 'r': "Ω", 's': "Φ", 't': "┼",
    'u': "↨", 'v': "‡", 'w': "w", 'x': "⋛", 'y': "¥", 'z': "√"
  };

  const invertedCharacters = Object.fromEntries(
    Object.entries(characters).map(([key, value]) => [value, key])
  );

  function toLatex(input, map) {
    return input.split('').map(char => map[char.toLowerCase()] || char).join('');
  }

  function toNative(input, map) {
    return input.split('').map(char => map[char] || char).join('');
  }

  function nativeToLatex() {
    latexInput.value = toLatex(nativeInput.value, characters);
  }

  function latexToNative() {
    nativeInput.value = toNative(latexInput.value, invertedCharacters);
  }

  function copyLatexToClipboard() {
    navigator.clipboard.writeText(latexInput.value).then(() => {
      copyButton.textContent = 'Latex Copied to Clipboard!';
      setTimeout(() => {
        copyButton.textContent = 'Copy Latex to Clipboard';
      }, 1000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  nativeInput.addEventListener('input', nativeToLatex);
  latexInput.addEventListener('input', latexToNative);
  copyButton.addEventListener('click', copyLatexToClipboard);
})();
