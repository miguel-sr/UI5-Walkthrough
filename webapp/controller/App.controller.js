sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/core/syncStyleClass",
  ],
  function (Controller, Fragment, syncStyleClass) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onInit: function () {
        this.getView().addStyleClass(
          this.getOwnerComponent().getContentDensityClass()
        );
      },

      onLanguageSelectDialogPress: function () {},
    });
  }
);
