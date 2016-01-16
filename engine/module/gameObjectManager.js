var gameObjectManager = {
    idifer : 0,
    objectList : [],
    
    createObject : function() {
        var gameObject = {};
        
        gameObject.name = "Empty";
        gameObject.layer = 0;
        this.idifer += 1;
        gameObject.id =  this.idifer;
        
        gameObject.position = {};
        gameObject.position.x = 0;
        gameObject.position.y = 0;
        gameObject.width = 0;
        gameObject.height = 0;
        
        gameObject.static = false;
        gameObject.image = 0;
        
        gameObject.scriptsList = [];
        gameObject.addScript = function(scriptName){
            scriptsManager.loadScript(scriptName, this, function(script) {
                if(typeof script.start == "function"){
                    script.start();
                }
                gameObject.scriptsList.push(script);
            });
        }
        
        gameObject.addScript("_renderScript");
        
        this.objectList.push(gameObject);
        this.objectList.sort(function(a, b){return a.layer - b.layer});
        return gameObject;
    },
    
    /*Messages*/
    
    update: function() {        
        this.objectList.forEach(function(o, i, oarr) {
            o.scriptsList.forEach(function(s, n, sarr) {
                if(typeof s.update == "function") {
                    s.update();
                }
            });
        });
    },
    
    /*End Messages*/
    
    deleteGameObject : function(gameObject) {
        this.objectList.remove(this.objectList.indexOf(gameObject));
    }
};
