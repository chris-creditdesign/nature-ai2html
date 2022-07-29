const forEachProperty = (
  object: Record<string, string | number>,
  callBack: (prop: string | number, key: string) => unknown
): void => {
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      callBack(object[key], key);
    }
  }
};

export default forEachProperty;
