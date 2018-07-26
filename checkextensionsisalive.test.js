var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');
var firefox_url = 'https://addons.mozilla.org/en-US/firefox/addon/shopback-cashback-button/';
var extension_version = '3.1.0.3';


test('extension still exists on firefox',(done)=>{
	request(firefox_url,function(e,r,b){
		if(e || !b){
			console.log(e);
		}
		var $ = cheerio.load(b);
    	var version = $('dd.Definition-dd.AddonMoreInfo-version').text();
		expect(version).toBe(extension_version);
		done();
	});

});