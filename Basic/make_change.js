function makeChange(total, coins) {
  let answers = new Array(total + 1);
  answers.fill(0);
  for (let coin in coins) {
    for (let i = 0; i < total + 1; i++) {
      if (coin <= i) {
        answers[i] += answers[i - coin];
      }
    }
  }
  return answers[total];
}
