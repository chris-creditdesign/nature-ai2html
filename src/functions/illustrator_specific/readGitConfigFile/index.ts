import stringToLines from "src/functions/utilities/stringToLines";
import trim from "../../utilities/trim/index";

// TODO: improve
// (currently ignores bracketed sections of the config file)
const readGitConfigFile = (path: string) => {
  let file = new File(path);
  let o: false | Record<string, string> = false;
  let parts;
  if (file.exists) {
    o = {};
    file.open("r");
    while (!file.eof) {
      parts = file.readln().split("=");
      if (parts.length > 1) {
        o[trim(parts[0])] = trim(parts[1]);
      }
    }
    file.close();
  }
  return o;
};

export default readGitConfigFile;
