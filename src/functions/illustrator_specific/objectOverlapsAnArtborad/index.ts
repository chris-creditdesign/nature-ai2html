import objectOverlapsArtboard from "../objectOverlapsArtboard/index";
import forEachUsableArtboard from "../../ai2html_specific/forEachUsableArtboard";

function objectOverlapsAnArtboard(obj, doc: Document): boolean {
  var hit = false;
  forEachUsableArtboard(function (ab) {
    hit = hit || objectOverlapsArtboard(obj, ab);
  }, doc);
  return hit;
}

export default objectOverlapsAnArtboard;
