import indexOf from "../indexOf";

const contains = (arr: string[], elem: string): boolean => {
  return indexOf(arr, elem) >= 0;
};

export default contains;
