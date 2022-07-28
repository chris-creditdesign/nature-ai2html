// multiple key sorting function based on https://github.com/Teun/thenBy.js
// first by length of name, then by population, then by ID
// data.sort(
//     firstBy(function (v1, v2) { return v1.name.length - v2.name.length; })
//     .thenBy(function (v1, v2) { return v1.population - v2.population; })
//     .thenBy(function (v1, v2) { return v1.id - v2.id; });
// );

type compareFunction = (a: any, b: any) => number;

interface ExtendedCompareFunction extends compareFunction {
  thenBy?: (f: compareFunction) => ExtendedCompareFunction;
}

const firstBy = (f1: ExtendedCompareFunction, f2?: ExtendedCompareFunction) => {
  var compare: ExtendedCompareFunction = f2
    ? function (a: any, b: any) {
        return f1(a, b) || f2(a, b);
      }
    : f1;

  compare.thenBy = function (f: ExtendedCompareFunction) {
    return firstBy(compare, f);
  };

  return compare;
};

export default firstBy;
