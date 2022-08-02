import readYamlConfigFile from ".";
import getScriptDirectory from "../getScriptDirectory";

const readYamlConfigFileDebug = () => {
  let alertText = "FAIL: readYamlConfigFile \r";

  let folder = getScriptDirectory();

  let should_be_false = readYamlConfigFile(
    folder.fullName + "/test/data/missing_file"
  );

  let should_be_parsed_yml = readYamlConfigFile(
    folder.fullName + "/test/data/config.yml"
  );

  // 1. Check that a missing file returns null
  // 2. Check that the config file was parsed correctly
  if (
    !should_be_false &&
    typeof should_be_parsed_yml !== "boolean" &&
    should_be_parsed_yml.project_type === "ai2html" &&
    should_be_parsed_yml.min_width === "300" &&
    should_be_parsed_yml.max_width === "600" &&
    should_be_parsed_yml.headline === "Elementary: Schools in District 3" &&
    should_be_parsed_yml.leadin === "" &&
    should_be_parsed_yml.credit === "'By The New York \"Times\"'" &&
    should_be_parsed_yml.show_in_compatible_apps === "yes" &&
    should_be_parsed_yml.constrain_width_to_text_column === "true"
  ) {
    alertText = "PASS: readYamlConfigFile \r";
  }

  return alertText;
};

export default readYamlConfigFileDebug;
