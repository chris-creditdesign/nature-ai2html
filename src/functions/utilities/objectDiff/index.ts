/**
 * Return object containing properties of a that are missing or different in b.
 * Return null if output object would be empty
 */
const objectDiff = (a: Record<string, any>, b: Record<string, any>) => {
  let diff: any = null;
  for (var key in a) {
    if (a[key] !== b[key] && a.hasOwnProperty(key)) {
      diff = diff || {};
      diff[key] = a[key];
    }
  }
  return diff;
};

export default objectDiff;
