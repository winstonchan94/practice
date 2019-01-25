//jgiven a string and a shift increment return an encoded stringssssss
//given a string and a shift increment return an encoded stringsssssss

const caesarCipher = (str, shift) => {
  let alpha = Array.from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));
  let encoded = "";
  let currChar;
  for (let i = 0; i < str.length; i++) {
    currChar = str.charAt(i);
    if (currChar == " ") {
      encoded = encoded + " ";
    } else {
      encoded = encoded + alpha[(alpha.indexOf(currChar) + shift) % 26];
    }
  }
  return encoded;
};
