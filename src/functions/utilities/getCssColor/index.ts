import roundTo from "../roundTo";

const getCssColor = (r: number, g: number, b: number, opacity = 100) => {
  let col: string;
  let o: number;
  if (opacity > 0 && opacity < 100) {
    o = roundTo(opacity / 100, 2);
    col = "rgba(" + r + "," + g + "," + b + "," + o + ")";
  } else {
    col = "rgb(" + r + "," + g + "," + b + ")";
  }
  return col;
};

export default getCssColor;
