/// <reference path="types/global.d.ts"/>
// This file exists to check that all of the Adobe Illustrator specific functions
// run as expected inside Adobe Illustrator

import { version } from "package";

// Make a new document in which to run tests
const myDocument: Document = app.documents.add();

let alertText = "Passing tests:\r";

/* ---------------------- Get version from package.json --------------------- */

alertText += "PASS: version: " + version + " extracted from package.json.\r";

/* -------------------------------- FINISHED! ------------------------------- */

const layer: Layer = myDocument.layers.add();
layer.name = "alert-text-layer";

const text: TextFrame = layer.textFrames.add();
text.contents = alertText;

alert(alertText);
