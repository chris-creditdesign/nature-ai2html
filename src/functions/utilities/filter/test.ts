import filter from ".";

test("expect filter to behave like array.protoype.filter", () => {
  const testArray = ["one", "two", "three", "four"];
  const callBack = (_d: any, i: number) => i !== 1;
  expect(filter(testArray, callBack)).toMatchObject(["one", "three", "four"]);

  /* ------------------------ MDN array filter examples ----------------------- */

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

  // Filtering out all small values
  function isBigEnough(value: number) {
    return value >= 10;
  }

  expect(filter([12, 5, 8, 130, 44], isBigEnough)).toMatchObject([12, 130, 44]);

  // Find all prime numbers in an array
  const primeArray = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  function isPrime(num: number) {
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  }

  expect(filter(primeArray, isPrime)).toMatchObject([2, 3, 5, 7, 11, 13]);

  // Filtering invalid entries from JSON
  let jsonArray = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
  ];

  let invalidEntries = 0;

  function filterByID(item: { id: number }) {
    if (
      item.id !== 0 &&
      item.id !== null &&
      !isNaN(item.id) &&
      item.id !== undefined
    ) {
      return true;
    }
    invalidEntries++;
    return false;
  }

  expect(filter(jsonArray, filterByID)).toMatchObject([
    { id: 15 },
    { id: -1 },
    { id: 3 },
    { id: 12.2 },
  ]);
  expect(invalidEntries).toBe(5);

  // Searching in array

  let fruits = ["apple", "banana", "grapes", "mango", "orange"];

  /**
   * Filter array items based on search criteria (query)
   */
  function filterItems(arr: string[], query: string) {
    return filter(arr, function (el: string) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  }

  expect(filterItems(fruits, "ap")).toMatchObject(["apple", "grapes"]);
  expect(filterItems(fruits, "an")).toMatchObject([
    "banana",
    "mango",
    "orange",
  ]);
});
