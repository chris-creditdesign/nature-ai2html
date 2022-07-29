import { type ExtendedString } from "src/types/global";
type Replacements = Record<string, string>;

// Apply very basic string substitution to a template
const applyTemplate = (
  template: ExtendedString,
  replacements: Replacements
) => {
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

  const replace1: ExtendedString = template.replace(mustachePattern, replace);

  const replace2 = replace1.replace(ejsPattern, replace);

  return replace2;
};

export default applyTemplate;
