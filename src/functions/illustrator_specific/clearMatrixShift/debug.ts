import clearMatrixShift from ".";
import { type ExtendedMatrix } from "src/types/global";

const clearMatrixShiftDebug = (doc: Document): string => {
  let alertText: string = "Fail: clearMatrixShift \r";

  const layer: Layer = doc.layers.add();
  layer.name = "test-clear-matrix-shift-layer";

  const text: TextFrame = layer.textFrames.add();
  text.contents = "Hello Mum";

  const shifted = clearMatrixShift(text.matrix as ExtendedMatrix);

  if (shifted instanceof Matrix) {
    alertText = "PASS: clearMatrixShift \r";
  }

  layer.remove();

  return alertText;
};

export default clearMatrixShiftDebug;
