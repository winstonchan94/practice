//find the response rate of a business to user messages...
const findResponseRate = (bizOwnerId, allMessages) => {
  let responseHash = {};
  let totalConvos = 0;
  let twoWays = 0;
  for (let message in allMessages) {
    let messId = message[conversationId];
    let senderId = message[sender];
    if (!responseHash[messId]) {
      responseHash[messId] = 0;
      totalConvos++;
    } else if (senderId === bizOwnerId) {
      responseHash[messId] = 1;
    }
  }
  for (const messId in responseHash) {
    let response = responseHash[messId];
    if (response == 1) {
      twoWays++;
    }
  }
  let answer = (twoWays / totalConvos) * 100;
  return answer;
};
