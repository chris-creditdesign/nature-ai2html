const makeKeyword = (str: string) => str.replace(/[^A-Za-z0-9_-]+/g, "_");

export default makeKeyword;
