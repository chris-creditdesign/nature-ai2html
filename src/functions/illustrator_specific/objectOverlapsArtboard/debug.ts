import objectOverlapsArtboard from ".";

const objectOverlapsArtboardDebug = (doc: Document): string => {
  let alertText: string = "FAIL: objectOverlapsArtboard \r";

  const layer: Layer = doc.layers.add();
  layer.name = "test-object-overlaps-artboard-layer";

  const rect_1: PathItem = layer.pathItems.rectangle(100, 0, 300, 100);
  const rect_2: PathItem = layer.pathItems.rectangle(-600, -600, 300, 300);

  // True if object overlaps artboard
  const should_be_true = objectOverlapsArtboard(rect_1, doc.artboards[0]);

  // False if object doesn't overlap artboard
  const should_be_false = objectOverlapsArtboard(rect_2, doc.artboards[0]);

  if (should_be_true && !should_be_false) {
    alertText = "PASS: objectOverlapsArtboard \r";
  }

  layer.remove();

  return alertText;
};

export default objectOverlapsArtboardDebug;
