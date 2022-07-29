import clearMatrixShift from ".";

const clearMatrixShiftDebug = (doc: Document): string => {
  let alertText: string = "Fail: clearMatrixShift \r";

  const layer: Layer = doc.layers.add();
  layer.name = "clear-matrix-shift-layer";

  const text: TextFrame = layer.textFrames.add();
  text.contents = "Hello Mum";

  const shifted = clearMatrixShift(text.matrix);

  if (shifted instanceof Matrix) {
    alertText = "PASS: clearMatrixShift \r";
  }

  return alertText;
};

export default clearMatrixShiftDebug;
