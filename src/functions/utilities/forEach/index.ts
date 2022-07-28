const forEach = <T>(
  array: T[],
  callBack: (element: T, index: number) => any
): void => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    callBack(element, index);
  }
};

export default forEach;
