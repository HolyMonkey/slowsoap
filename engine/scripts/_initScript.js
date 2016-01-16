function _get_initScript(gameObject)
{
    var script = {
        localGameObject : gameObject,
        
        start : function() {
            var background = gameObjectManager.createObject();
            background.name = 'background';
            background.layer = 0;
            background.image = engine.imageStorage.getImageID('./resources/sky1.png');
            background.width = engine.render.width;
            background.height = engine.render.height;
            
            for(i = 0; i < 15; i++) {
                var block = gameObjectManager.createObject();
                block.name = 'ground'+i;
                block.image = engine.imageStorage.getImageID('./resources/blockLapis.png');
                block.position.x = i * 75;
                block.position.y = engine.render.height - 75;
                block.width = 75;
                block.height = 75;
                block.layer = 6;
            }
            
            var mario = gameObjectManager.createObject();
            mario.name = 'player';
            mario.layer = 5;
            mario.image = engine.imageStorage.getImageID('./resources/mario.png');
            mario.width = 96;
            mario.height = 128;
            mario.addScript('mario');
            
        },
        
        update : function() {
           
        }
    }
    return script;
}