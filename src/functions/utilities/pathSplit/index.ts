// Split a full path into directory and filename parts
const pathSplit = (path: string): [string, string] => {
  let parts = path.split("/");
  let filename = parts.pop();
  return [parts.join("/"), filename];
};

export default pathSplit;
