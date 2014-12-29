"use strict";

var wd = require("wd"),
    chai = require("chai"),
    async = require('async'),
    chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

var desired = {
	"appium-version": "1.0",
	platformName: "Android",
	platformVersion: "4.4",
	deviceName: "015d2d42255bfc16",
	app: "/Users/mbennett/Downloads/adt-bundle-mac-x86_64-20140702/sdk/platform-tools/test.apk",
	"app-package": "",
	"app-activity": ""
};

var browser = wd.promiseChainRemote("0.0.0.0", 4723);

async.waterfall([
    //start app and get browser object  
    function(callback){
        browser.init(desired).then(function() {
            callback(null, browser);
            return browser
        }).done();
    },
    //first unit test
    function(browser, callback){
        setTimeout(function(){
           browser
           .elementByXPath("//android.view.View[1]/android.widget.FrameLayout[2]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.Button[1]").click()
           .elementByXPath("//android.view.View[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.Button[1]").click()
           .fin(function() {
            return browser.quit();
          });
        },10000);
        callback(null, browser);
    },
    //second unit test
    function(browser, callback){

        callback(null, 'done');
    }
], function (err, result) {
   // result now equals 'done'    
});
