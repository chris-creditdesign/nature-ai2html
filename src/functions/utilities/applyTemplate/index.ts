// type Replacements<T> = {
//   [Tprop in keyof T]: T[Tprop];
// };

type Replacements = Record<string, string>;

// Apply very basic string substitution to a template
const applyTemplate = (template: string, replacements: Replacements) => {
  const keyExp = "([_a-zA-Z][\\w-]*)";

  const mustachePattern = new RegExp(
    "\\{\\{\\{? *" + keyExp + " *\\}\\}\\}?",
    "g"
  );

  const ejsPattern = new RegExp("<%=? *" + keyExp + " *%>", "g");

  const replace = (match: string, name: keyof typeof replacements) => {
    var lcname = name.toString().toLowerCase();

    if (name in replacements) {
      return replacements[name];
    } else if (lcname in replacements) {
      return replacements[lcname];
    } else {
      return match;
    }
  };

  return template
    .replace(mustachePattern, replace)
    .replace(ejsPattern, replace);
};

export default applyTemplate;
