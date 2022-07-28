const filter = <T>(
  array: T[],
  callBack: (element: T, index: number) => boolean
) => {
  var filtered = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (callBack(element, index)) {
      filtered.push(element);
    }
  }

  return filtered;
};

export default filter;
