// Test if two rectangles are the same, to within a given tolerance
// a, b: two arrays containing AI rectangle coordinates
// maxOffs: maximum pixel deviation on any side
const testSimilarBounds = (a: Rect, b: Rect, maxOffs: number = 1): boolean => {
  for (let index = 0; index < 4; index++) {
    if (Math.abs(a[index] - b[index]) > maxOffs) {
      return false;
    }
  }
  return true;
};

export default testSimilarBounds;
