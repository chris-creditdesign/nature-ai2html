import find from ".";

test("expect find to behave like array.prototype.find", () => {
  // The find() method returns the value of the first element in
  // the provided array that satisfies the provided testing function.
  // If no values satisfy the testing function, undefined is returned.
  const array1 = [5, 12, 8, 130, 44];
  const callBack1 = (element: number) => element > 10;

  expect(find(array1, callBack1)).toBe(12);

  const callBack2 = (element: number) => element > 200;
  expect(find(array1, callBack2)).toBe(undefined);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

  // Find an object in an array by one of its properties
  const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];

  function isCherries(fruit: { name: string; quantity: number }) {
    return fruit.name === "cherries";
  }

  expect(find(inventory, isCherries)).toMatchObject({
    name: "cherries",
    quantity: 5,
  });

  // Find a prime number in an array

  function isPrime(element: number) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }

  expect(find([4, 6, 8, 12], isPrime)).toBe(undefined);
  expect(find([4, 5, 8, 12], isPrime)).toBe(5);
});
