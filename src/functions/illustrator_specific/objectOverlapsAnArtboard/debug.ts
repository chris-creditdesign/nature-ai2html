import objectOverlapsAnArtboard from ".";

const objectOverlapsAnArtboardDebug = (doc: Document): string => {
  let alertText: string = "FAIL: objectOverlapsAnArtboard \r";

  const newArtBoardLeft = 1000;
  const newArtBoardTop = 1000;
  const newArtBoardRight = 2000;
  const newArtBoardBottom = 0;

  const newArtboardRect: Rect = [
    newArtBoardLeft,
    newArtBoardTop,
    newArtBoardRight,
    newArtBoardBottom,
  ];

  let artboard_2 = doc.artboards.add(newArtboardRect);

  // This artboard's name begins with a dash, so it should be ignored
  artboard_2.name = "-test-object-overlaps-an-artboard-artboard-2";

  const layer: Layer = doc.layers.add();
  layer.name = "test-object-overlaps-an-artboard-layer";

  const rect_1: PathItem = layer.pathItems.rectangle(100, 0, 300, 100);
  const rect_2: PathItem = layer.pathItems.rectangle(810, 800, 300, 300);

  // True if object overlaps artboard
  const should_be_true = objectOverlapsAnArtboard(rect_1, doc);

  // False, although the object is overlapping the artboard
  // it is ignored because it's name begins with a dash
  const should_be_false = objectOverlapsAnArtboard(rect_2, doc);

  if (should_be_true && !should_be_false) {
    alertText = "PASS: objectOverlapsAnArtboard \r";
  }

  layer.remove();
  doc.artboards.remove(1);

  return alertText;
};

export default objectOverlapsAnArtboardDebug;
