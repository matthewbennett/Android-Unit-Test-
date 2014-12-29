Android-Unit-Test
==================

### Android Unit Test written in Node.js
###facilitated by Appium


```
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
```
