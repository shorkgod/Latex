const NativeInput = document.getElementById("NativeTextarea");
const LatexInput = document.getElementById("LatexTextarea");

const Characters = {
  '0': "⏴", '1': "●", '2': "▬", '3': "▲", '4': "■", '5': "▱", '6': "◈", '7': "▩", '8': "▣", '9': "⏵",
  'a': "σ", 'b': "£", 'c': "Ǝ", 'd': "₳", 'e': "ε", 'f': "┘", 'g': "Γ", 'h': "μ", 'i': "∩", 'j': "ſ",
  'k': "≡", 'l': "Œ", 'm': "ß", 'n': "þ", 'o': "⌐", 'p': "Æ", 'q': "¶", 'r': "Ω", 's': "Φ", 't': "┼",
  'u': "↨", 'v': "‡", 'w': "w", 'x': "⋛", 'y': "¥", 'z': "√"
};

const InvertedCharacters = Object.fromEntries(
  Object.entries(Characters).map(([key, value]) => [value, key])
);

function TransformText(input, map) {
  return input.split('').map(char => map[char.toLowerCase()] || char).join('');
}

function NativeToLatex() {
  LatexInput.value = TransformText(NativeInput.value, Characters);
}

function LatexToNative() {
  NativeInput.value = TransformText(LatexInput.value, InvertedCharacters);
}

NativeInput.addEventListener('input', NativeToLatex);
LatexInput.addEventListener('input', LatexToNative);
