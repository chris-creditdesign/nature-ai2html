import testBoundsIntersection from "../testBoundsIntersection/index";

// TODO: Debug
const objectOverlapsArtboard = (obj, ab: Artboard) => {
  return testBoundsIntersection(ab.artboardRect, obj.geometricBounds);
};

export default objectOverlapsArtboard;
