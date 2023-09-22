function isValidSubsequence(array, sequence) {
  let index = 0;
  let seqIndx = 0;
  if (array.length !== 0 && sequence.length === 0) {
    return false;
  }

  while (index < array.length && seqIndx < sequence.length) {
    if (array[index] === sequence[seqIndx]) {
      seqIndx++;
    } else {
      index++;
    }
  }
  return seqIndx === sequence.length;
}

// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));

module.exports = isValidSubsequence;
