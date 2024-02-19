/*global QUnit*/

sap.ui.define([
	"comsap/zhelloworld/controller/helloworld.controller"
], function (Controller) {
	"use strict";

	QUnit.module("helloworld Controller");

	QUnit.test("I should test the helloworld controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
