/// <reference path="types/global.d.ts"/>
// This file exists to check that all of the Adobe Illustrator specific functions
// run as expected inside Adobe Illustrator

import { AiDocument } from "./types/global";

// Make a new document in which to run tests
var myDocument: AiDocument = app.documents.add();

alert("Hello world!");
