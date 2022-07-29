import fileExists from "../fileExists";
import parseYaml from "../../utilities/parseYaml";
import readTextFile from "../../illustrator_specific/readTextFile";

const readYamlConfigFile = (path: string): any => {
  return fileExists(path) ? parseYaml(readTextFile(path)) : null;
};

export default readYamlConfigFile;
