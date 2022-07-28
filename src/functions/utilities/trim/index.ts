/**
 * Remove whitespace from beginning and end of a string
 */
const trim = (s: string) =>
  s.replace(/^[\s\uFEFF\xA0\x03]+|[\s\uFEFF\xA0\x03]+$/g, "");

export default trim;
