import testBoundsIntersection from "../testBoundsIntersection/index";

// TODO: Debug
const objectOverlapsArtboard = (obj: PageItem, ab: Artboard) => {
  return testBoundsIntersection(ab.artboardRect, obj.geometricBounds);
};

export default objectOverlapsArtboard;
