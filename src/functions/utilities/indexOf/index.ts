const indexOf = <T>(array: T[], searchElement: T, startIndex: number = 0) => {
  for (let index = startIndex; index < array.length; index++) {
    const element = array[index];
    if (element === searchElement) {
      return index;
    }
  }
  return -1;
};

export default indexOf;
