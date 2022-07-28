/**
 * Check if the Illustrator version is CC 2014 through to 2021 by default.
 */
const isTestedIllustratorVersion = (version: string, min = 18, max = 25) => {
  const majorNum = parseInt(version, 10);
  const testedIllustratorVersion = majorNum >= min && majorNum <= max;
  return testedIllustratorVersion;
};

export default isTestedIllustratorVersion;
