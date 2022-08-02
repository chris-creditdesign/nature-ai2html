(function () {
  'use strict';

  var version = "1.0.0";

  var testSimilarBounds = function (a, b, maxOffs) {
      if (maxOffs === void 0) { maxOffs = 1; }
      for (var index = 0; index < 4; index++) {
          if (Math.abs(a[index] - b[index]) > maxOffs) {
              return false;
          }
      }
      return true;
  };

  var testSimilarBoundsDebug = function (doc) {
      var alertText = "FAIL: testSimilarBounds \r";
      var layer = doc.layers.add();
      layer.name = "test-similar-bounds-layer";
      var rect_1 = layer.pathItems.rectangle(310, 10, 300, 300);
      var rect_2 = layer.pathItems.rectangle(310, 10, 300, 300);
      var rect_3 = layer.pathItems.rectangle(810, 800, 300, 300);
      var should_be_true = testSimilarBounds(rect_1.geometricBounds, rect_2.geometricBounds);
      var should_be_false = testSimilarBounds(rect_1.geometricBounds, rect_3.geometricBounds);
      if (should_be_true && !should_be_false) {
          alertText = "PASS: testSimilarBounds \r";
      }
      return alertText;
  };

  var testBoundsIntersection = function (a, b) {
      return a[2] >= b[0] && b[2] >= a[0] && a[3] <= b[1] && b[3] <= a[1];
  };

  var testBoundsIntersectionDebug = function (doc) {
      var alertText = "FAIL: testBoundsIntersection \r";
      var layer = doc.layers.add();
      layer.name = "test-bounds-intersection-layer";
      var rect_1 = layer.pathItems.rectangle(0, 0, 300, 100);
      var rect_2 = layer.pathItems.rectangle(150, 150, 10, 300);
      var rect_3 = layer.pathItems.rectangle(150, -150, 10, 300);
      var should_be_true = testBoundsIntersection(rect_1.geometricBounds, rect_2.geometricBounds);
      var should_be_false = testBoundsIntersection(rect_1.geometricBounds, rect_3.geometricBounds);
      if (should_be_true && !should_be_false) {
          alertText = "PASS: testBoundsIntersection \r";
      }
      return alertText;
  };

  var shiftBounds = function (bnds, dx, dy) {
      return [bnds[0] + dx, bnds[1] + dy, bnds[2] + dx, bnds[3] + dy];
  };

  var shiftBoundsDebug = function (doc) {
      var alertText = "FAIL: shiftBounds \r";
      var layer = doc.layers.add();
      layer.name = "test-shift-bounds-layer";
      var rect = layer.pathItems.rectangle(0, 0, 300, 300);
      var test = shiftBounds(rect.geometricBounds, 20, 20);
      if (test[0] === 20 && test[1] === 20 && test[2] === 320 && test[3] === -280) {
          alertText = "PASS: shiftBounds \r";
      }
      return alertText;
  };

  var saveTextFile = function (dest, contents) {
      var fd = new File(dest);
      fd.open("w", "TEXT", "TEXT");
      fd.lineFeed = "Unix";
      fd.encoding = "UTF-8";
      fd.writeln(contents);
      fd.close();
  };

  function getScriptDirectory() {
      return new File($.fileName).parent;
  }

  var fileExists = function (path) {
      return new File(path).exists;
  };

  var readFile = function (path) {
      var content = false;
      var file = new File(path);
      if (file.exists) {
          file.open("r");
          content = file.read();
          file.close();
      }
      return content;
  };

  var readTextFile = function (path) {
      return readFile(path) || false;
  };

  var deleteFile = function (path) {
      var file = new File(path);
      if (file.exists) {
          file.remove();
          return true;
      }
      return false;
  };

  var saveTextFileDebug = function () {
      var alertText = "FAIL: saveTextFile \r";
      var folder = getScriptDirectory();
      var dest = folder.fullName + "/test/data/test.txt";
      var content = "Hello World";
      saveTextFile(dest, content);
      var file_exists = fileExists(dest);
      var file_conent = readTextFile(dest);
      var file_content_matches = file_conent === content + "\n";
      var file_deleted = deleteFile(dest);
      if (file_exists && file_content_matches && file_deleted) {
          alertText = "PASS: saveTextFile \r";
      }
      return alertText;
  };

  var trim = function (s) {
      return s.replace(/^[\s\uFEFF\xA0\x03]+|[\s\uFEFF\xA0\x03]+$/g, "");
  };

  var json2 = function () {
      var JSON = {};
      var rx_one = /^[\],:{}\s]*$/;
      var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
      var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
      var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
      var rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
      var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
      function f(n) {
          return n < 10 ? "0" + n : n;
      }
      function this_value() {
          return this.valueOf();
      }
      if (typeof Date.prototype.toJSON !== "function") {
          Date.prototype.toJSON = function () {
              return isFinite(this.valueOf())
                  ? this.getUTCFullYear() +
                      "-" +
                      f(this.getUTCMonth() + 1) +
                      "-" +
                      f(this.getUTCDate()) +
                      "T" +
                      f(this.getUTCHours()) +
                      ":" +
                      f(this.getUTCMinutes()) +
                      ":" +
                      f(this.getUTCSeconds()) +
                      "Z"
                  : null;
          };
          Boolean.prototype.toJSON = this_value;
          Number.prototype.toJSON = this_value;
          String.prototype.toJSON = this_value;
      }
      var gap;
      var indent;
      var meta;
      var rep;
      function quote(string) {
          return rx_escapable.test(string)
              ? '"' +
                  string.replace(rx_escapable, function (a) {
                      var c = meta[a];
                      return typeof c === "string"
                          ? c
                          : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                  }) +
                  '"'
              : '"' + string + '"';
      }
      function str(key, holder) {
          var i;
          var k;
          var v;
          var length;
          var mind = gap;
          var partial;
          var value = holder[key];
          if (value &&
              typeof value === "object" &&
              typeof value.toJSON === "function") {
              value = value.toJSON(key);
          }
          if (typeof rep === "function") {
              value = rep.call(holder, key, value);
          }
          switch (typeof value) {
              case "string":
                  return quote(value);
              case "number":
                  return isFinite(value) ? String(value) : "null";
              case "boolean":
                  return String(value);
              case "object":
                  if (!value) {
                      return "null";
                  }
                  gap += indent;
                  partial = [];
                  if (Object.prototype.toString.apply(value, {}) === "[object Array]") {
                      length = value.length;
                      for (i = 0; i < length; i += 1) {
                          partial[i] = str(i, value) || "null";
                      }
                      v =
                          partial.length === 0
                              ? "[]"
                              : gap
                                  ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]"
                                  : "[" + partial.join(",") + "]";
                      gap = mind;
                      return v;
                  }
                  if (rep && typeof rep === "object") {
                      length = rep.length;
                      for (i = 0; i < length; i += 1) {
                          if (typeof rep[i] === "string") {
                              k = rep[i];
                              v = str(k, value);
                              if (v) {
                                  partial.push(quote(k) + (gap ? ": " : ":") + v);
                              }
                          }
                      }
                  }
                  else {
                      for (k in value) {
                          if (Object.prototype.hasOwnProperty.call(value, k)) {
                              v = str(k, value);
                              if (v) {
                                  partial.push(quote(k) + (gap ? ": " : ":") + v);
                              }
                          }
                      }
                  }
                  v =
                      partial.length === 0
                          ? "{}"
                          : gap
                              ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}"
                              : "{" + partial.join(",") + "}";
                  gap = mind;
                  return v;
          }
      }
      if (typeof JSON.stringify !== "function") {
          meta = {
              "\b": "\\b",
              "\t": "\\t",
              "\n": "\\n",
              "\f": "\\f",
              "\r": "\\r",
              '"': '\\"',
              "\\": "\\\\"
          };
          JSON.stringify = function (value, replacer, space) {
              var i;
              gap = "";
              indent = "";
              if (typeof space === "number") {
                  for (i = 0; i < space; i += 1) {
                      indent += " ";
                  }
              }
              else if (typeof space === "string") {
                  indent = space;
              }
              rep = replacer;
              if (replacer &&
                  typeof replacer !== "function" &&
                  typeof replacer !== "object") {
                  throw new Error("JSON.stringify");
              }
              return str("", { "": value });
          };
      }
      if (typeof JSON.parse !== "function") {
          JSON.parse = function (text, reviver) {
              var j;
              function walk(holder, key) {
                  var k;
                  var v;
                  var value = holder[key];
                  if (value && typeof value === "object") {
                      for (k in value) {
                          if (Object.prototype.hasOwnProperty.call(value, k)) {
                              v = walk(value, k);
                              if (v !== undefined) {
                                  value[k] = v;
                              }
                              else {
                                  delete value[k];
                              }
                          }
                      }
                  }
                  return reviver.call(holder, key, value);
              }
              text = String(text);
              if (rx_dangerous.test(text)) {
                  text = text.replace(rx_dangerous, function (a) {
                      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                  });
              }
              if (rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) {
                  j = eval("(" + text + ")");
                  return typeof reviver === "function" ? walk({ "": j }, "") : j;
              }
              throw new Error("JSON.parse");
          };
      }
      return JSON;
  };

  var parseKeyValueString = function (str, myObject) {
      if (myObject === void 0) { myObject = {}; }
      var JSON = json2();
      var dqRxp = /^"(?:[^"\\]|\\.)*"$/;
      var parts = str.split(":");
      var k;
      var v;
      if (parts.length > 1) {
          k = trim(parts.shift());
          v = trim(parts.join(":"));
          if (dqRxp.test(v)) {
              v = JSON.parse(v);
          }
          myObject[k] = v;
      }
      return myObject;
  };

  var filter = function (array, callBack) {
      var filtered = [];
      for (var index = 0; index < array.length; index++) {
          var element = array[index];
          if (callBack(element, index)) {
              filtered.push(element);
          }
      }
      return filtered;
  };

  var stringToLines = function (str) {
      var empty = /^\s*$/;
      var newLineCharacter = /[\r\n\x03]+/;
      var removeEmptyLines = function (line) { return !empty.test(line); };
      var splitIntoLines = str.split(newLineCharacter);
      var withoutEmptyLines = filter(splitIntoLines, removeEmptyLines);
      return withoutEmptyLines;
  };

  var parseYaml = function (str) {
      var o = {};
      var lines = stringToLines(str);
      for (var i = 0; i < lines.length; i++) {
          o = parseKeyValueString(lines[i], o);
      }
      return o;
  };

  var readYamlConfigFile = function (path) {
      if (fileExists(path)) {
          return parseYaml(readTextFile(path));
      }
      return false;
  };

  var readYamlConfigFileDebug = function () {
      var alertText = "FAIL: readYamlConfigFile \r";
      var folder = getScriptDirectory();
      var should_be_false = readYamlConfigFile(folder.fullName + "/test/data/missing_file");
      var should_be_parsed_yml = readYamlConfigFile(folder.fullName + "/test/data/config.yml");
      if (!should_be_false &&
          typeof should_be_parsed_yml !== "boolean" &&
          should_be_parsed_yml.project_type === "ai2html" &&
          should_be_parsed_yml.min_width === "300" &&
          should_be_parsed_yml.max_width === "600" &&
          should_be_parsed_yml.headline === "Elementary: Schools in District 3" &&
          should_be_parsed_yml.leadin === "" &&
          should_be_parsed_yml.credit === "'By The New York \"Times\"'" &&
          should_be_parsed_yml.show_in_compatible_apps === "yes" &&
          should_be_parsed_yml.constrain_width_to_text_column === "true") {
          alertText = "PASS: readYamlConfigFile \r";
      }
      return alertText;
  };

  var readTextFileDebug = function () {
      var alertText = "FAIL: readTextFile \r";
      var folder = getScriptDirectory();
      var should_be_string = readTextFile(folder.fullName + "/test/data/config.yml");
      var should_be_false = readTextFile("nonsense");
      if (typeof should_be_string === "string" && !should_be_false) {
          alertText = "PASS: readTextFile \r";
      }
      return alertText;
  };

  var readGitConfigFile = function (path) {
      var file = new File(path);
      var o = false;
      var parts;
      if (file.exists) {
          o = {};
          file.open("r");
          while (!file.eof) {
              parts = file.readln().split("=");
              if (parts.length > 1) {
                  o[trim(parts[0])] = trim(parts[1]);
              }
          }
          file.close();
      }
      return o;
  };

  var readGitConfigFileDebug = function () {
      var alertText = "FAIL: readGitConfigFile \r";
      var folder = getScriptDirectory();
      var should_be_false = readGitConfigFile(folder.fullName + "/test/data/missing_file");
      var should_be_parsed_config = readGitConfigFile(folder.fullName + "/test/data/config");
      if (!should_be_false &&
          typeof should_be_parsed_config !== "boolean" &&
          should_be_parsed_config.repositoryformatversion === "0" &&
          should_be_parsed_config.ignorecase === "true" &&
          should_be_parsed_config.url === "git@github.com:newsdev/ai2html.git" &&
          should_be_parsed_config.remote === "origin" &&
          should_be_parsed_config.merge === "refs/heads/master") {
          alertText = "PASS: readGitConfigFile \r";
      }
      return alertText;
  };

  var readFileDebug = function () {
      var alertText = "FAIL: readFile \r";
      var folder = getScriptDirectory();
      var should_be_string = readFile(folder.fullName + "/test/data/config.yml");
      var should_be_false = readFile("nonsense");
      if (typeof should_be_string === "string" && !should_be_false) {
          alertText = "PASS: readFile \r";
      }
      return alertText;
  };

  var objectOverlapsArtboard = function (obj, ab) {
      return testBoundsIntersection(ab.artboardRect, obj.geometricBounds);
  };

  var objectOverlapsArtboardDebug = function (doc) {
      var alertText = "FAIL: objectOverlapsArtboard \r";
      var layer = doc.layers.add();
      layer.name = "test-object-overlaps-artboard-layer";
      var rect_1 = layer.pathItems.rectangle(100, 0, 300, 100);
      var rect_2 = layer.pathItems.rectangle(-600, -600, 300, 300);
      var should_be_true = objectOverlapsArtboard(rect_1, doc.artboards[0]);
      var should_be_false = objectOverlapsArtboard(rect_2, doc.artboards[0]);
      if (should_be_true && !should_be_false) {
          alertText = "PASS: objectOverlapsArtboard \r";
      }
      return alertText;
  };

  var forEachUsableArtboard = function (callback, doc) {
      for (var i = 0; i < doc.artboards.length; i++) {
          var ab = doc.artboards[i];
          if (!/^-/.test(ab.name)) {
              callback(ab, i);
          }
      }
  };

  var objectOverlapsAnArtboard = function (obj, doc) {
      var hit = false;
      forEachUsableArtboard(function (ab) {
          hit = hit || objectOverlapsArtboard(obj, ab);
      }, doc);
      return hit;
  };

  var objectOverlapsAnArtboardDebug = function (doc) {
      var alertText = "FAIL: objectOverlapsAnArtboard \r";
      var newArtBoardLeft = 1000;
      var newArtBoardTop = 1000;
      var newArtBoardRight = 2000;
      var newArtBoardBottom = 0;
      var newArtboardRect = [
          newArtBoardLeft,
          newArtBoardTop,
          newArtBoardRight,
          newArtBoardBottom,
      ];
      var artboard_2 = doc.artboards.add(newArtboardRect);
      artboard_2.name = "-test-object-overlaps-an-artboard-artboard-2";
      var layer = doc.layers.add();
      layer.name = "test-object-overlaps-an-artboard-layer";
      var rect_1 = layer.pathItems.rectangle(100, 0, 300, 100);
      var rect_2 = layer.pathItems.rectangle(810, 800, 300, 300);
      var should_be_true = objectOverlapsAnArtboard(rect_1, doc);
      var should_be_false = objectOverlapsAnArtboard(rect_2, doc);
      if (should_be_true && !should_be_false) {
          alertText = "PASS: objectOverlapsAnArtboard \r";
      }
      return alertText;
  };

  var getScriptDirectoryDebug = function () {
      var alertText = "FAIL: getScriptDirectory \r";
      var folder = getScriptDirectory();
      var path = folder.path;
      if (path.split("/")[0] === "~") {
          alertText = "PASS: getScriptDirectory \r";
      }
      return alertText;
  };

  var folderExists = function (path) {
      return new Folder(path).exists;
  };

  var folderExistsDebug = function () {
      var alertText = "FAIL: folderExists \r";
      var folder = getScriptDirectory();
      var should_be_true = folderExists(folder.fullName + "/test/data/text");
      var should_be_false = folderExists("nonsense");
      if (should_be_true && !should_be_false) {
          alertText = "PASS: folderExists \r";
      }
      return alertText;
  };

  var fileExistsDebug = function () {
      var alertText = "FAIL: fileExists \r";
      var folder = getScriptDirectory();
      var should_be_true = fileExists(folder.fullName + "/test/data/config.yml");
      var should_be_false = fileExists("nonsense");
      if (should_be_true && !should_be_false) {
          alertText = "PASS: fileExists \r";
      }
      return alertText;
  };

  var deleteFileDebug = function () {
      var alertText = "FAIL: deleteFile \r";
      var folder = getScriptDirectory();
      var original_path = folder.fullName + "/test/data/text/oneline_cr.txt";
      var copy_path = folder.fullName + "/test/data/text/copy.txt";
      var original_file = new File(original_path);
      original_file.copy(copy_path);
      if (fileExists(copy_path)) {
          var file_deleted = deleteFile(copy_path);
          if (file_deleted) {
              alertText = "PASS: deleteFile \r";
          }
      }
      return alertText;
  };

  var clearMatrixShift = function (m) {
      var deltaX = m.mValueTX;
      var deltaY = m.mValueTX;
      return app.concatenateTranslationMatrix(m, -deltaX, -deltaY);
  };

  var clearMatrixShiftDebug = function (doc) {
      var alertText = "Fail: clearMatrixShift \r";
      var layer = doc.layers.add();
      layer.name = "test-clear-matrix-shift-layer";
      var text = layer.textFrames.add();
      text.contents = "Hello Mum";
      var shifted = clearMatrixShift(text.matrix);
      if (shifted instanceof Matrix) {
          alertText = "PASS: clearMatrixShift \r";
      }
      return alertText;
  };

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
          }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
  }

  var JSON = json2();
  var concatMessages = function (args) {
      var msg = "";
      var arg;
      for (var i = 0; i < args.length; i++) {
          arg = args[i];
          if (msg.length > 0)
              msg += " ";
          if (typeof arg == "object") {
              try {
                  msg += JSON.stringify(arg);
              }
              catch (e) {
                  msg += String(arg);
              }
          }
          else {
              msg += arg;
          }
      }
      return msg;
  };

  function message(newMessages, messages) {
      if (messages === void 0) { messages = []; }
      if (typeof newMessages === "string") {
          return __spreadArray(__spreadArray([], messages, true), [newMessages], false);
      }
      else if (newMessages.length) {
          return __spreadArray(__spreadArray([], messages, true), [concatMessages(newMessages)], false);
      }
  }

  function warn(msg, warnings) {
      if (warnings === void 0) { warnings = []; }
      var newWarnings = __spreadArray(__spreadArray([], warnings, true), [msg], false);
      return newWarnings;
  }

  var checkForOutputFolder = function (folderPath, nickname, messages, warnings) {
      if (nickname === void 0) { nickname = "output folder"; }
      if (messages === void 0) { messages = []; }
      if (warnings === void 0) { warnings = []; }
      var folderAlreadyExists = folderExists(folderPath);
      var newFolderCreated = false;
      if (!folderAlreadyExists) {
          var new_output_folder = new Folder(folderPath);
          newFolderCreated = new_output_folder.create();
          if (newFolderCreated) {
              messages = message("The ".concat(nickname, " folder did not exist, so the folder was created."));
          }
          else {
              warnings = warn("The ".concat(nickname, " folder did not exist and could not be created."));
          }
      }
      return { folderAlreadyExists: folderAlreadyExists, newFolderCreated: newFolderCreated, messages: messages, warnings: warnings };
  };

  var checkForOutputFolderDebug = function () {
      var alertText = "FAIL: checkForOutputFolder \r";
      var folder = getScriptDirectory();
      var should_be_true = checkForOutputFolder(folder.fullName + "/test/data/text").folderAlreadyExists;
      var should_be_false = checkForOutputFolder(folder.fullName + "/test/data/nonsense").folderAlreadyExists;
      var temp_folder = new Folder(folder.fullName + "/test/data/nonsense");
      temp_folder.remove();
      if (should_be_true && !should_be_false) {
          alertText = "PASS: folderExists \r";
      }
      return alertText;
  };

  var myDocument = app.documents.add();
  var alertText = "Passing tests:\r";
  alertText += "PASS: version: " + version + " extracted from package.json.\r";
  alertText += testSimilarBoundsDebug(myDocument);
  alertText += testBoundsIntersectionDebug(myDocument);
  alertText += shiftBoundsDebug(myDocument);
  alertText += saveTextFileDebug();
  alertText += readYamlConfigFileDebug();
  alertText += readTextFileDebug();
  alertText += readGitConfigFileDebug();
  alertText += readFileDebug();
  alertText += objectOverlapsArtboardDebug(myDocument);
  alertText += objectOverlapsAnArtboardDebug(myDocument);
  alertText += getScriptDirectoryDebug();
  alertText += folderExistsDebug();
  alertText += fileExistsDebug();
  alertText += deleteFileDebug();
  alertText += clearMatrixShiftDebug(myDocument);
  alertText += checkForOutputFolderDebug();
  var layer = myDocument.layers.add();
  layer.name = "alert-text-layer";
  var text = layer.textFrames.add();
  text.contents = alertText;
  alert(alertText);

})();
