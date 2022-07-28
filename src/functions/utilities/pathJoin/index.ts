import forEach from "../forEach";

function pathJoin(...paths: string[]) {
  let path = "";
  const args: string[] = Array.prototype.slice.call(paths);

  forEach(args, function (arg) {
    if (!arg) return;
    arg = String(arg);
    arg = arg.replace(/^\/+/, "").replace(/\/+$/, "");
    if (path.length > 0) {
      path += "/";
    }
    path += arg;
  });

  return path;
}

export default pathJoin;
