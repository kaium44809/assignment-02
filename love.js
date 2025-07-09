const words = ["ice", "moon", "infinity", "sunshine", "silence", "universe"];
const code = words.map(w => w[0]).join(""); // i, m, i, s, s, u

let message = "";

for (let i = 0; i < code.length; i++) {
  const char = code[i];
  switch (char) {
    case 'i':
      message += 'i';
      break;
    case 'm':
      message += ' ';
      message += 'miss';
      break;
    case 's':
      if (!message.endsWith('ss')) message += 's';
      break;
    case 'u':
      message += ' u';
      break;
    default:
      message += '';
  }
}

console.log(message.trim());
