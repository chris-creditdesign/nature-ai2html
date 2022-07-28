interface ArrayLike<T> {
  readonly length: number;
  readonly [n: number]: T;
}

const toArray = <T>(arrayLike: ArrayLike<T>): T[] => {
  const newArray = [];
  for (let i = 0, n = arrayLike.length; i < n; i++) {
    newArray[i] = arrayLike[i]; // about 2x faster than push() (apparently)
  }
  return newArray;
};

export default toArray;
