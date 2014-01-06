var newScript = document.createElement("script");
var redir = "steal.js?ontraport,development";
var scripts = document.getElementsByTagName("script");

for (var i=0;i<scripts.length;i++){
	var script = scripts[i];
	if (script.src.substr(-40) == "steal.production.js?ontraport,production"){
		script.remove();
	}
}
 
newScript.src = "js/steal/"+redir;
newScript.async = true;

document.body.appendChild( newScript );