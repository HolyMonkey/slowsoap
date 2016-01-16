var engine = {
    isInit : false,
    render : render,

    Init : function (rootElemID, width, height) {
        this.areaID = rootElemID;  
        this.render.createView(engine.areaID, height, width);
        this.render.clear();

        var logo = gameObjectManager.createObject();
        logo.name = "MonkeyLogo";
        logo.image = this.imageStorage.getImageID('./resources/monkeyLogomini.png');
        logo.width = logo.height = 177;
        setTimeout(function() {
            gameObjectManager.deleteGameObject(logo);
            var root = gameObjectManager.createObject();
            root.addScript('_initScript');
            root.name = "root";
        }, 2500);

        setInterval(this.tick, 1000 / 50);
        
        this.sInit = true;
    },

    tick : function()
    {
        var newTime = Date.now();
        engine.time.deltaTime = (newTime - engine.time.time) / 1000;
        engine.time.time = Date.now();
        engine.render.clear();
        gameObjectManager.update();
    },
    
    time : {
        deltaTime : 0,
        time : 0,
        startTime : Date.now()
    },
    
    imageStorage : {
        loadedList : [],
        idifer : 0,
        
        getImageID : function(imagePath) {
            var retimg;
            this.loadedList.forEach(function(img, i) {
                if(img.src.indexOf(imagePath) > -1) {
                    retimg = img;
                }
            });
            
            if(typeof retimg == 'undefined')
                return this.addImage(imagePath).ID;
            else
                return retimg;
        },
        
        getImageFromID : function(imageID) {
            var retimg;
            
            this.loadedList.forEach(function(img, i) {
                if(img.ID == imageID) {
                    retimg = img;
                }
            });
            
            return retimg;
        },
        
        addImage : function(imagePath){
            var newImage = new Image();
            newImage.src = imagePath;
            this.idifer += 1;
            newImage.ID = this.idifer;
            this.loadedList.push(newImage);
            return newImage;
        }
    }
};



/*HELPERS*/
Array.prototype.remove = function(from, to) { 
  var rest = this.slice((to || from) + 1 || this.length); 
  this.length = from < 0 ? this.length + from : from; 
  return this.push.apply(this, rest); 
};  
