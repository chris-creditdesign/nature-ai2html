import fileExists from "../fileExists";
import parseYaml from "../../utilities/parseYaml";
import readTextFile from "../../illustrator_specific/readTextFile";

const readYamlConfigFile = (path: string): boolean | Record<string, string> => {
  if (fileExists(path)) {
    return parseYaml(readTextFile(path));
  }
  return false;
};

export default readYamlConfigFile;
