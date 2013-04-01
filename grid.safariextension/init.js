function handleMessage(msgEvent) {
	var messageName = msgEvent.name;
	var messageData = msgEvent.message;
   
	if (messageName === "jqueried") {        
		var element2 = document.createElement("script");
		var grid = 'http://gridder.andreehansson.se/releases/latest/960.gridder.js';
		var src = safari.extension.baseURI + "grid.js";
		
		element2.setAttribute("src", src);
		document.body.insertBefore(element2, document.body.firstChild); 
	}
	
	// Insert CSS
    var css = document.createElement("link");

    var src = safari.extension.baseURI + "grid.css";
    
    css.setAttribute("type", "text/css");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("href", src);

    document.body.insertBefore(css, document.body.firstChild);
}

safari.self.addEventListener("message", handleMessage, false);