const tryToDecode = (string) => {
  try {
    decodeURIComponent(string);
  } catch {
    return false;
  }

  return true;
};

export const decodeEmoji = (string) => {
  let decodedString;
  
  try {
    decodedString = decodeURIComponent(string);
  } catch {
    let shortenedString = string;
     
    for (let i = 0; i < string.length; i++) {
      shortenedString = shortenedString.slice(0, -1);
      const canBeDecoded = tryToDecode(shortenedString);

      if (canBeDecoded && !decodedString) {
        decodedString = decodeURIComponent(shortenedString);
      }
    }
  }
  
  return decodedString;
};

export const encodeEmoji = (string) => (encodeURIComponent(string));
