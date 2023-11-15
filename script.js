let NativeInput=document.getElementById("Native");
let LatexInput=document.getElementById("Latex");
let Characters = {
  '0': "⏴",
  '1': "●",
  '2': "▬",
  '3': "▲",
  '4': "■",
  '5': "▱",
  '6': "◈",
  '7': "▩",
  '8': "▣",
  '9': "⏵",
  'a': "σ",
  'b': "£",
  'c': "Ǝ",
  'd': "₳",
  'e': "ε",
  'f': "┘",
  'g': "Γ",
  'h': "μ",
  'i': "∩",
  'j': "ſ",
  'k': "≡",
  'l': "Œ",
  'm': "ß",
  'n': "þ",
  'o': "⌐",
  'p': "Æ",
  'q': "¶",
  'r': "Ω",
  's': "Φ",
  't': "┼",
  'u': "↨",
  'v': "‡",
  'w': "w",
  'x': "⋛",
  'y': "¥",
  'z': "√",
};
let invertedCharacters = {};
for (let key in Characters) {
  invertedCharacters[Characters[key]] = key;
}

function normalizeText(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function Native() {
  let input = NativeInput.value;
  if (typeof input === "string") {
    input = normalizeText(input);
    let result = "";
    for (letter of input) {
      result += Characters[letter] ? Characters[letter] : letter;
    }
    LatexInput.value = result;
  }
}

function Latex() {
  let input = LatexInput.value;
  if (typeof input === "string") {
    let result = "";
    for (letter of input) {
      result += invertedCharacters[letter] ? invertedCharacters[letter] : letter;
    }
    NativeInput.value = result;
  }
}

NativeInput.addEventListener('input', Native);
LatexInput.addEventListener('input', Latex);