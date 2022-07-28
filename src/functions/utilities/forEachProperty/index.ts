const forEachProperty = <T>(
  object: T,
  callBack: (prop: T[keyof T], key: keyof T) => any
): void => {
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      callBack(object[key], key);
    }
  }
};

export default forEachProperty;
