import testSimilarBounds from ".";

const testSimilarBoundsDebug = (doc: Document): string => {
  let alertText: string = "FAIL: testSimilarBounds \r";

  const layer: Layer = doc.layers.add();
  layer.name = "test-similar-bounds-layer";

  const rect_1: PathItem = layer.pathItems.rectangle(310, 10, 300, 300);
  const rect_2: PathItem = layer.pathItems.rectangle(310, 10, 300, 300);
  const rect_3: PathItem = layer.pathItems.rectangle(810, 800, 300, 300);

  const should_be_true = testSimilarBounds(
    rect_1.geometricBounds,
    rect_2.geometricBounds
  );

  const should_be_false = testSimilarBounds(
    rect_1.geometricBounds,
    rect_3.geometricBounds
  );

  if (should_be_true && !should_be_false) {
    alertText = "PASS: testSimilarBounds \r";
  }

  layer.remove();

  return alertText;
};

export default testSimilarBoundsDebug;
