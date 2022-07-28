import filter from "../filter";
import indexOf from "../indexOf";

const find = <T>(
  array: T[],
  callBack: (element: T, index: number) => boolean
): T | undefined => {
  const filteredArray = filter(array, callBack);

  if (!filteredArray.length) {
    return undefined;
  }
  const indexOfFirstMatch = indexOf(array, filteredArray[0]);

  return array[indexOfFirstMatch];
};

export default find;
