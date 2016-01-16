var scriptsManager = {
    loadScript : function(scriptName, gameObject, callBack) {
        if(!isScriptLoaded(scriptName)) {
            var script = document.createElement('script');
            
            var appendTo = document.getElementsByTagName('head')[0];

            if (script.readyState && !script.onload) {
                // IE, Opera
                script.onreadystatechange = function() {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        callBack(window['_get'+scriptName](gameObject));
                    }
                }
            }
            else {
                // Rest
                script.onload = function(){ 
                    callBack(window['_get'+scriptName](gameObject));
                };
            }

            script.src = 'engine/scripts/'+scriptName+'.js';
            appendTo.appendChild(script);
        }
        else {
            callBack(window['_get'+scriptName](gameObject));
        }
    }
}


function isScriptLoaded(scriptName) {
    var result = false;
    var list = document.getElementsByTagName('script')
    for (var i = 0; i < list.length; i++) {
       if(list[i].src.indexOf('engine/scripts/'+scriptName+'.js') > -1) {
            result = true;
        }
    }
    return result;
}