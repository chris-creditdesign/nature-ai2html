import forEachProperty from "../forEachProperty";

function extend(
  targetObject: Record<string, string | number>,
  ...sourceObjects: any[]
) {
  const sources: any[] = Array.prototype.slice.call(sourceObjects);

  const add = (v: string, k: any) => {
    targetObject[k] = v;
  };

  for (let index = 0; index < sources.length; index++) {
    const element = sources[index];
    forEachProperty(element, add);
  }

  return targetObject;
}

export default extend;
