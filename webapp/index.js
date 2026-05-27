// sap.ui.define(["sap/m/Text"], function (Text) {
//   "use strict";

//   new Text({ text: "Hello World from js" }).placeAt("content");

// });

// USING XML VIEW

// sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
//   "use strict";

//   XMLView.create({
//     id: "App",
//     viewName: "sap.training.exc.view.App"
//   }).then(function (oView) {
//     oView.placeAt("content");
//   });

// });

// USING COMPONENT CONTAINER

sap.ui.define(["sap/ui/core/ComponentContainer"], function (ComponentContainer) {
  "use strict";

  var oContainer = new ComponentContainer({
      id: "container",
      name: "sap.training.exc",
      manifest: true,
      async: true,
      settings: {
        id: "sap.training.exc"
      }
  });
  oContainer.placeAt("content");

});



