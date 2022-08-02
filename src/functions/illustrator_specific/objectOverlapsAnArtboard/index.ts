import objectOverlapsArtboard from "../objectOverlapsArtboard/index";
import forEachUsableArtboard from "../../ai2html_specific/forEachUsableArtboard";

const objectOverlapsAnArtboard = (obj: PageItem, doc: Document): boolean => {
  let hit = false;
  forEachUsableArtboard(function (ab) {
    hit = hit || objectOverlapsArtboard(obj, ab);
  }, doc);
  return hit;
};

export default objectOverlapsAnArtboard;
