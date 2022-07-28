/**
 * @jest-environment jsdom
 */

import toArray from ".";

test("Expect elements of an array-like object to returned within a new array", () => {
  // Set up our document body
  document.body.innerHTML =
    "<div>" + "  <p>One</p>" + "  <p>Two</p>" + "  <p>Three</p>" + "</div>";

  const nodeList = document.querySelectorAll("p");
  const nodeArray = toArray(nodeList);

  expect(Array.isArray(nodeList)).toBe(false);
  expect(Array.isArray(nodeArray)).toBe(true);
  expect(nodeList.length).toEqual(nodeArray.length);
  expect(nodeList[0]).toEqual(nodeArray[0]);
});
