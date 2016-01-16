var temptestmario;

function _getmario(gameObject) {
    var script = {
        localGameObject : gameObject,
        
        start : function() {
            window.addEventListener( "keypress", this.onkeypress, true)
            temptestmario = this.localGameObject;
        },
        
        update : function() {
        },
        
        onkeypress: function(e){
            var key = getChar(e);
            if (key == 'w') {
                temptestmario.position.y -=  2;
            }

            if (key == 's') {
                temptestmario.position.y +=  2;
            }

            if (key == 'a') {
                temptestmario.position.x -=  2;
            }

            if (key == 'd') {
                temptestmario.position.x += 2;
            }
        }
    }
    return script;
}

// event.type должен быть keypress
function getChar(event) {
  if (event.which == null) {  // IE
    if (event.keyCode < 32) return null; // спец. символ
    return String.fromCharCode(event.keyCode) 
  } 

  if (event.which!=0 && event.charCode!=0) { // все кроме IE
    if (event.which < 32) return null; // спец. символ
    return String.fromCharCode(event.which); // остальные
  } 

  return null; // спец. символ
}
