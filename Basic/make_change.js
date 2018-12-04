function makeChange(total, coins) {
  let answers = new Array(total + 1);
  answers.fill(0);
  answers[0] = 1;
  for (let coin in coins) {
    for (let i = 0; i < total + 1; i++) {
      if (coin <= i) {
        answers[i] += answers[i - coin];
      }
    }
  }
  return answers[total];
}
//
