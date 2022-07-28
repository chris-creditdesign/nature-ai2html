const map = <T>(array: T[], callBack: (element: T, index: number) => any) => {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const newElement = callBack(element, index);
    newArray.push(newElement);
  }

  return newArray;
};

export default map;
