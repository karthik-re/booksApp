//Capitalize first letter of the word
export const capitalizeString = (str) => {
  if (typeof str !== "string") {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
