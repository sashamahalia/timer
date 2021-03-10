const args = process.argv.slice(2);
let numArray = [];
for (const num of args) {
  const numNotString = parseInt(num);
  numArray.push(numNotString);
}

const sorted = numArray.sort((a, b) => a - b);
let delayTime = (sorted[0] * 1000);

for (num of sorted) {
  if (!(sorted.length === 0 || num < 0 || typeof num !== 'number')) {
  setTimeout(() => process.stdout.write('\x07'), num * 1000);
  }
}
