import readGitConfigFile from ".";
import getScriptDirectory from "../getScriptDirectory";

const readGitConfigFileDebug = () => {
  let alertText = "FAIL: readGitConfigFile \r";

  let folder = getScriptDirectory();

  let should_be_false = readGitConfigFile(
    folder.fullName + "/test/data/missing_file"
  );

  let should_be_parsed_config = readGitConfigFile(
    folder.fullName + "/test/data/config"
  );

  // 1. Check that a missing file returns null
  // 2. Check that the config file was parsed correctly
  if (
    !should_be_false &&
    typeof should_be_parsed_config !== "boolean" &&
    should_be_parsed_config.repositoryformatversion === "0" &&
    should_be_parsed_config.ignorecase === "true" &&
    should_be_parsed_config.url === "git@github.com:newsdev/ai2html.git" &&
    should_be_parsed_config.remote === "origin" &&
    should_be_parsed_config.merge === "refs/heads/master"
  ) {
    alertText = "PASS: readGitConfigFile \r";
  }

  return alertText;
};

export default readGitConfigFileDebug;
