// MINHA SOLUÇÃO:
//let n = 5;
//
//for (index = 0; index <= n; index += 1) {
//   console.log('*****');
//}

// GABARITO:

let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};
