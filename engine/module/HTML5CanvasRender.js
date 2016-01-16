var render = {
    
    createView : function (elemID, height, width) {
        this.canvas = document.getElementById(elemID).appendChild(document.createElement("canvas"));
        this.canvas.setAttribute("id", "HTML5CanvasRender");
        this.canvas.setAttribute("height", height);
        this.canvas.setAttribute("width", width);
        this.ctx =  this.canvas.getContext('2d');
        this.height = height;
        this.width = width;
    },
    
    clear : function () {
        this.ctx.fillStyle = "#6699FF";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    
    drawImageFromPath : function (imagePath, x, y, width, height) {
        var pic = new Image(); 
        pic.src = imagePath; 
        pic.onload = function () {  
            if(typeof width != 'undefined' && typeof height != 'undefined')
                this.ctx.drawImage(pic, x, y, width, height);  
            else
                this.ctx.drawImage(pic, x, y);
        };
    },
    
    drawImage : function (image, x, y, width, height) {
        if(typeof width != 'undefined' && typeof height != 'undefined')
            this.ctx.drawImage(image, x, y, width, height);  
        else
            this.ctx.drawImage(image, x, y);
    }
};