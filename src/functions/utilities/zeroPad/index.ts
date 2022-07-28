const zeroPad = (val: string | number, digits: number) => {
  let str = String(val);
  while (str.length < digits) {
    str = "0" + str;
  }
  return str;
};

export default zeroPad;
