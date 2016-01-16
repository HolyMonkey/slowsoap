function _get_renderScript(gameObject)
{
    var script = {
        localGameObject : gameObject,
        
        start : function() {
        },
        
        update : function() {
            if(this.localGameObject.image != 0) {
                var image = engine.imageStorage.getImageFromID(this.localGameObject.image);
                if(typeof image != 'undefined'){
                    engine.render.drawImage(image, this.localGameObject.position.x, this.localGameObject.position.y, 
                                            this.localGameObject.width, this.localGameObject.height);
                }
            }
        }
    }
    return script;
}