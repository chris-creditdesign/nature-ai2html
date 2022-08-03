import fileExists from "../fileExists";
import parseYaml from "../../utilities/parseYaml";
import readTextFile from "../../illustrator_specific/readTextFile";

const readYamlConfigFile = (path: string) => {
  if (fileExists(path)) {
    return parseYaml(readTextFile(path) as string);
  }
  return false;
};

export default readYamlConfigFile;
