// ==UserScript==
// @name         R/slither
// @namespace    www.manific.tk
// @version      3
// @description  www.manific.tk
// @author       www.manific.tk
// @require      http://code.jquery.com/jquery-latest.js
// @match        http://slither.io/
// @run-at document-start
// @grant        gece altinda
// ==/UserScript==

var s = document.createElement('script');
s.src = 'https://code.jquery.com/jquery-1.12.3.min.js';
s.onload = function() {
	document.head.innerHTML += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">';
	var s = document.createElement('script');
	s.src = 'http://yourjavascript.com/56232026131/slitherplus.js';
	s.onload = function() {
		this.parentNode.removeChild(this);
	};
	(document.head || document.documentElement).appendChild(s);
};
(document.head || document.documentElement).appendChild(s);
