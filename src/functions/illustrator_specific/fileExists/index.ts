const fileExists = (path: string): boolean => {
  return new File(path).exists;
};

export default fileExists;
