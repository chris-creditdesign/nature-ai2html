import firstBy from ".";

test("Array to be sorted with firstBy functions", () => {
  const continents = [
    "asia",
    "africa",
    "north america",
    "south america",
    "antarctica",
    "europe",
    "australia",
  ];

  expect(
    continents.sort(
      firstBy(function (v1, v2) {
        return v1.length - v2.length;
      })
    )
  ).toMatchObject([
    "asia",
    "africa",
    "europe",
    "australia",
    "antarctica",
    "north america",
    "south america",
  ]);

  // Sort first by length of name
  // Then size of population
  // Then by id

  const data = [
    { name: "12", population: 2, id: 3 },
    { name: "1", population: 1, id: 1 },
    { name: "12", population: 1, id: 1 },
    { name: "1", population: 1, id: 2 },
    { name: "1", population: 2, id: 3 },
    { name: "12", population: 1, id: 2 },
    { name: "1", population: 2, id: 4 },
    { name: "12", population: 2, id: 4 },
  ];

  expect(
    data.sort(
      firstBy(function (v1, v2) {
        return v1.name.length - v2.name.length;
      })
        .thenBy(function (v1, v2) {
          return v1.population - v2.population;
        })
        .thenBy(function (v1, v2) {
          return v1.id - v2.id;
        })
    )
  ).toMatchObject([
    { name: "1", population: 1, id: 1 },
    { name: "1", population: 1, id: 2 },
    { name: "1", population: 2, id: 3 },
    { name: "1", population: 2, id: 4 },
    { name: "12", population: 1, id: 1 },
    { name: "12", population: 1, id: 2 },
    { name: "12", population: 2, id: 3 },
    { name: "12", population: 2, id: 4 },
  ]);
});
