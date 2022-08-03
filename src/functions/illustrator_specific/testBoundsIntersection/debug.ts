import testBoundsIntersection from ".";

const testBoundsIntersectionDebug = (doc: Document): string => {
  let alertText: string = "FAIL: testBoundsIntersection \r";

  const layer: Layer = doc.layers.add();
  layer.name = "test-bounds-intersection-layer";

  const rect_1: PathItem = layer.pathItems.rectangle(0, 0, 300, 100);
  const rect_2: PathItem = layer.pathItems.rectangle(150, 150, 10, 300);
  const rect_3: PathItem = layer.pathItems.rectangle(150, -150, 10, 300);

  // True if bounds overlap
  const should_be_true = testBoundsIntersection(
    rect_1.geometricBounds,
    rect_2.geometricBounds
  );

  // False if bounds don't overlap
  const should_be_false = testBoundsIntersection(
    rect_1.geometricBounds,
    rect_3.geometricBounds
  );

  if (should_be_true && !should_be_false) {
    alertText = "PASS: testBoundsIntersection \r";
  }

  layer.remove();

  return alertText;
};

export default testBoundsIntersectionDebug;
