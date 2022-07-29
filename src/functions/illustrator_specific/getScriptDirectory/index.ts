function getScriptDirectory(): Folder {
  return new File($.fileName).parent;
}

export default getScriptDirectory;
