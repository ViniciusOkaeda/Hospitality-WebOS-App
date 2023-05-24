const KEYCODE = {
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40,
    UP: 38
};

var oneMore = 0;
document.addEventListener('keydown', onKeyDown, function(e) {
    //oneMore++;
    //console.log("contagem", oneMore)
});

function onKeyDown(event) {
    campo = document.querySelectorAll('.selected')
    
    switch (event.keyCode) {
        case KEYCODE.DOWN:
        oneMore+=1;
        indice = campo[oneMore];
        console.log("o indice é", indice)
        console.log("o documento")

        if(indice != null || indice != undefined) {
                anterior = campo[+1];
                indice.focus();
        }
        event.preventDefault();
        break;
      case KEYCODE.UP:
    	 oneMore-=1;  
        indice2 = campo[oneMore]
        if(indice2 != null || indice2 != undefined) {
            anterior = campo[-1];
            indice2.focus();
        }
        event.preventDefault();
        break;
    }
  }



 
