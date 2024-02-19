sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.zhelloworld.controller.helloworld", {
            onInit: function () {

            },
            onClick : function(){
                alert('Greetings of the day!')
            }
        });
    });
