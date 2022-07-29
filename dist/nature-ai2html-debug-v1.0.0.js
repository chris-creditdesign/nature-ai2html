(function () {
  'use strict';

  var version = "1.0.0";

  var myDocument = app.documents.add();
  var alertText = "Passing tests:\r";
  alertText += "PASS: version: " + version + " extracted from package.json.\r";
  var layer = myDocument.layers.add();
  layer.name = "alert-text-layer";
  var text = layer.textFrames.add();
  text.contents = alertText;
  alert(alertText);

})();
