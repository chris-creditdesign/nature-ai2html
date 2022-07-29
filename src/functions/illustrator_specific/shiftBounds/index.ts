/**
 * shiftBounds
 *
 * @param bnds The original geometricBounds to shift
 * @param dx Distance to move in the x direction
 * @param dy Amount to move in the y direction
 * @returns The shifted bounds, an array of four numbers for left, top, right, bottom.
 */
const shiftBounds = (bnds: Rect, dx: number, dy: number): Rect => {
  return [bnds[0] + dx, bnds[1] + dy, bnds[2] + dx, bnds[3] + dy];
};

export default shiftBounds;
