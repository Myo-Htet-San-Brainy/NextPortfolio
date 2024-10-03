export const trimText = (text, maxChar = 37) => {
  if (text.length <= maxChar) {
    return false;
  }
  return text.substring(0, maxChar);
};
