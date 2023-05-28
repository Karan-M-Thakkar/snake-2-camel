export const getCamelString = (string) => {
  let returnStr = "";
  const words = string.split("_");
  if (words.length > 0) {
    returnStr += words[0];
    words.map((eachWord, index) => {
      if (index !== 0) {
        returnStr +=
          eachWord[0].toUpperCase() +
          eachWord.substring(1, eachWord.length).toLowerCase();
      }
    });
    return returnStr;
  }
  return string;
};

export const convertKeysSnakeToCamel = (object) => {
  const returnObj = {};
  Object.keys(object).map((eachKey) => {
    returnObj[getCamelString(eachKey)] = object[eachKey];
  });
  return returnObj;
};
