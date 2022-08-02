import shiftBounds from ".";

const shiftBoundsDebug = (doc: Document): string => {
  let alertText: string = "FAIL: shiftBounds \r";

  const layer: Layer = doc.layers.add();
  layer.name = "test-shift-bounds-layer";

  const rect: PathItem = layer.pathItems.rectangle(0, 0, 300, 300);

  const test = shiftBounds(rect.geometricBounds, 20, 20);

  if (test[0] === 20 && test[1] === 20 && test[2] === 320 && test[3] === -280) {
    alertText = "PASS: shiftBounds \r";
  }

  return alertText;
};

export default shiftBoundsDebug;
