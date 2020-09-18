function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  return fromN === toN ? toN : fromN + sum(++fromN, toN);
}

module.exports = sum;
