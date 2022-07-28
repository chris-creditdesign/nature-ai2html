const replaceChars = (str: string, replacements: string[][]) => {
  for (let index = 0; index < replacements.length; index++) {
    let charCode = replacements[index];

    if (str.indexOf(charCode[0]) > -1) {
      str = str.replace(new RegExp(charCode[0], "g"), charCode[1]);
    }
  }

  return str;
};

export default replaceChars;
