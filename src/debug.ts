import { version } from "package";
import testSimilarBoundsDebug from "./functions/illustrator_specific/testSimilarBounds/debug";
import testBoundsIntersectionDebug from "./functions/illustrator_specific/testBoundsIntersection/debug";
import shiftBoundsDebug from "./functions/illustrator_specific/shiftBounds/debug";
import saveTextFileDebug from "./functions/illustrator_specific/saveTextFile/debug";
import readYamlConfigFileDebug from "./functions/illustrator_specific/readYamlConfigFile/debug";
import readTextFileDebug from "./functions/illustrator_specific/readTextFile/debug";
import readGitConfigFileDebug from "./functions/illustrator_specific/readGitConfigFile/debug";
import readFileDebug from "./functions/illustrator_specific/readFile/debug";
import objectOverlapsArtboardDebug from "./functions/illustrator_specific/objectOverlapsArtboard/debug";
import objectOverlapsAnArtboardDebug from "./functions/illustrator_specific/objectOverlapsAnArtboard/debug";
import getScriptDirectoryDebug from "./functions/illustrator_specific/getScriptDirectory/debug";
import folderExistsDebug from "./functions/illustrator_specific/folderExists/debug";
import fileExistsDebug from "./functions/illustrator_specific/fileExists/debug";
import deleteFileDebug from "./functions/illustrator_specific/deleteFile/debug";
import clearMatrixShiftDebug from "./functions/illustrator_specific/clearMatrixShift/debug";
import checkForOutputFolderDebug from "./functions/illustrator_specific/checkForOutputFolder/debug";

// Make a new document in which to run tests
const myDocument: Document = app.documents.add();

let alertText = "Passing tests:\r";

/* ---------------------- Get version from package.json --------------------- */

alertText += "PASS: version: " + version + " extracted from package.json.\r";

/* ---------------------------- testSimilarBounds --------------------------- */

alertText += testSimilarBoundsDebug(myDocument);

/* ------------------------- testBoundsIntersection ------------------------- */

alertText += testBoundsIntersectionDebug(myDocument);

/* ------------------------------- shiftBounds ------------------------------ */

alertText += shiftBoundsDebug(myDocument);

/* ---------------------------- saveTextFileDebug --------------------------- */

alertText += saveTextFileDebug();

/* --------------------------- readYamlConfigFile --------------------------- */

alertText += readYamlConfigFileDebug();

/* ------------------------------ readTextFile ------------------------------ */
alertText += readTextFileDebug();

/* ------------------------------ readGitConfigFile ------------------------------ */
alertText += readGitConfigFileDebug();

/* ------------------------------ readFile ------------------------------ */
alertText += readFileDebug();

/* ------------------------- objectOverlapsArtboard ------------------------- */
alertText += objectOverlapsArtboardDebug(myDocument);

/* ----------------------- objectOverlapsAnArtboard ------------------------- */
alertText += objectOverlapsAnArtboardDebug(myDocument);

/* --------------------------- getScriptDirectory --------------------------- */
alertText += getScriptDirectoryDebug();

/* ------------------------------ folderExists ------------------------------ */
alertText += folderExistsDebug();

/* ------------------------------- fileExists ------------------------------- */
alertText += fileExistsDebug();

/* -------------------------------- deleteFile ------------------------------- */
alertText += deleteFileDebug();

/* ------------------------------ clearMatrixShift ------------------------------ */
alertText += clearMatrixShiftDebug(myDocument);

/* --------------------------- checkForOutputFolder --------------------------- */
alertText += checkForOutputFolderDebug();

/* -------------------------------- FINISHED! ------------------------------- */

const layer: Layer = myDocument.layers.add();
layer.name = "alert-text-layer";

const text: TextFrame = layer.textFrames.add();
text.contents = alertText;

alert(alertText);
