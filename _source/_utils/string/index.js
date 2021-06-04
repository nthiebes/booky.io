import emojiRegex from 'emoji-regex/RGI_Emoji';

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
        decodedString =
          decodeURIComponent(shortenedString) +
          string.slice((i + 1) * -1, string.length);
      }
    }
  }

  return decodedString;
};

export const encodeEmoji = (string) => {
  const regex = emojiRegex();
  let match;
  let newString = string;

  // eslint-disable-next-line no-cond-assign
  while ((match = regex.exec(string))) {
    const emoji = match[0];

    newString = newString.replace(emoji, encodeURIComponent(emoji));
  }

  return newString;
};
