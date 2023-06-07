



const KEYCODE = {
    //principais
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40,
    UP: 38,
    ENTER: 13,

    //secundarios e opcionais
    INFO: 457,
    KEY1: 49,
    KEY2: 50,
    KEY3: 51,
    KEY4: 52,
    KEY5: 53,
    KEY6: 54,
    KEY7: 55,
    KEY8: 56,
    KEY9: 57,
    KEY0: 48,
    QVIEW: 1007,
    CHANNELMORE: 33,
    CHANNELANYLESS: 34,
    ONECIRCLE: 403,
    TWOCIRCLE: 404,
    THREECIRCLE: 405,
    FOURCIRCLE: 406,
    STOP: 413,
    RESUME: 415,
    PAUSE: 19,
    FORWARD: 417,
    BACKWARD: 412,
    CAPTION: 460
};

//variavel auxiliar p navegação normal
var oneMore = -1;
var auxDontCount = true;

//variaveis auxiliar p navegação da category cards
var oneMoreCard = 0;
var focusedCard = false;

//variaveis para acesso e navegação do menu lateral esquerdo
var firstDownKey = false;
var oneMoreMenu = 0;
var unlockLeftMenu = false;
var toAcessMenu = 1;
document.addEventListener('keydown', onKeyDown, function(e) {
    //oneMore++;
    //console.log("contagem", oneMore)
});

function onKeyDown(event) {
    menu = document.querySelectorAll('.selectedMenu')
    campoMenu = document.querySelectorAll('.selectedMenuItem')

    campo = document.querySelectorAll('.selected')

    campoCategory = document.querySelectorAll('.selectedCategoryCard')
    
    
    switch (event.keyCode) {
        
        case KEYCODE.DOWN:
        console.log("keycode down");
        moveDownHome();




        //console.log("o indice é", indice)
        //aqui começa para acessar o menu lateral esquerdo
        firstDownKey = true
        if(firstDownKey == true) {
            unlockLeftMenu = true;
        }

        if(toAcessMenu == 0 && unlockLeftMenu == true) {
            if(oneMoreMenu < campoMenu.length -1) {
                auxDontCount = false;
                oneMoreMenu+=1;
                console.log("o que tem no campo menu", campoMenu);
                console.log("o onemore no down", oneMoreMenu);
                indiceMenu = campoMenu[oneMoreMenu];
                if(indiceMenu != null || indiceMenu != undefined && oneMoreMenu <7) {
                    console.log("o indicemenu", indiceMenu)
                    indiceMenu.focus();
                }
            }
        }
        event.preventDefault();
        break;
        case KEYCODE.UP:

        moveUpHome();



        //parte para acessar e navegar o menu lateral esquerdo
        if(toAcessMenu == 0) {
            if(oneMoreMenu > 0) {
                oneMoreMenu-=1;
                console.log("o oneMoreMenu no UP", oneMoreMenu)
                indiceMenu = campoMenu[oneMoreMenu];
                console.log("o que tem no indiceMenu do UP", indiceMenu)
                if(indiceMenu != null || indiceMenu != undefined) {
                    anterior = campo[+1];
                    indiceMenu.focus();
                }
            }
        }
        event.preventDefault();
        break;
        case KEYCODE.LEFT:

        moveLeftHome();


        //parte para acessar e navegar o menu lateral esquerdo
        {/*
            if(unlockLeftMenu == true) {
                console.log("keycode left")
                //console.log("o meu access menu é", toAcessMenu)
                    //menu[0].focus();
                if(toAcessMenu > 0) {
                    toAcessMenu-=1;
                    if(toAcessMenu == 0) {
                        console.log("o menu", menu[0]);
                        indiceMenu = campoMenu[0];
                        indiceMenu.focus();
                        console.log("o indice do menu é", indiceMenu);
                    }
                    console.log("to acess menu ", toAcessMenu)
                }

            } */}

    	 //oneMore-=1;  
        //indice2 = campo[oneMore]


        //if(indice2 != null || indice2 != undefined) {
        //    anterior = campo[-1];
        //    indice2.focus();
        //}
        event.preventDefault();
        break;
        case KEYCODE.RIGHT:

            moveRightHome();
        //var indice = campoCategory.getElementsByClassName('selectedCategoryCard')[oneMoreCard]

        //console.log("o que tem no indice", campo[oneMore].getElementsByClassName('selectedCategoryCard')[oneMoreCard])
        //console.log("o que tem no category", campoCategory)

        if(toAcessMenu >= 0 && toAcessMenu <1) {
            toAcessMenu+=1;
            indice = campo[oneMore]
            if(indice != null || indice != undefined) {
                auxDontCount = true;
                indice.focus();
            }
            //console.log("o que tem no campo ", campo)
            //console.log("o to acessMenu right", toAcessMenu)
        }
        console.log("keycode right")
    	// oneMore-=1;  
        //indice2 = campo[oneMore]
        //if(indice2 != null || indice2 != undefined) {
        //    anterior = campo[-1];
        //    indice2.focus();
        //}
        event.preventDefault();
        break;
    }
  }


  function moveDownHome() {
    if(auxDontCount == true){
        if(oneMore >= 0) {
            campo[oneMore].getElementsByClassName('cardDetails')[oneMoreCard].style.display = "none";
        }
        if(oneMore < campo.length -1) {
            oneMore+=1;

        }
        indice = campo[oneMore];
        //console.log("o que tem no campo ao apertar DOWN", indice)
        //console.log("o que tem no length", campo.length)
        if(indice != null || indice != undefined) {
            //indice.focus();
            //indice.getElementsByClassName('selectedCategoryCard')[0].focus();
            var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
            var toAddStyle = indice.getElementsByClassName('cardDetails')[oneMoreCard];
            //console.log("o add style", toAddStyle)
            //varia.scrollIntoView({
                //    inline: "center",
                //    behavior: "smooth"
                //})
            toFocus.focus();
            toAddStyle.style.display = "block";
            //varia.classList.add("cardStyle");
            //console.log("o varia", toFocus)
            //console.log("o indice dentro do if", indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard])
            //console.log("o campo category", campoCategory)
        }
    }

  }
  function moveUpHome() {
    if(auxDontCount == true) {
        if(oneMore > 0) {
            campo[oneMore].getElementsByClassName('cardDetails')[oneMoreCard].style.display = "none";
        }
        if(oneMore > 0) {
            oneMore-=1;
        }

        indice = campo[oneMore];
        if(indice != null || indice != undefined) {
            anterior = campo[-1];
            var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
            var toAddStyle = indice.getElementsByClassName('cardDetails')[oneMoreCard];
            //console.log("o add style", toAddStyle)
            toFocus.focus();
            toAddStyle.style.display = "block";
        }
    }

  }

  function moveRightHome() {
    if(oneMoreCard >= 0) {
        campo[oneMore].getElementsByClassName('cardDetails')[oneMoreCard].style.display = "none";
    }

    indice = campo[oneMore];
    if(indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard] != null || indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard] != undefined){
        //campo[oneMore].getElementsByClassName('selectedCategoryCard')[oneMoreCard].classList.remove("teste");
        console.log("o tamanho", campo[oneMore].getElementsByClassName('selectedCategoryCard').length)
        if(oneMoreCard < indice.getElementsByClassName('selectedCategoryCard').length -1){
            oneMoreCard+=1;
            console.log("o onemorecard apertando o right", oneMoreCard)
        }
        //campo[oneMore].getElementsByClassName('selectedCategoryCard')[oneMoreCard].classList.add("teste").scrollIntoView({
        //    inline: "left",
      //      behavior: "smooth"
    //    });

        if(oneMoreCard >= 0) {

            if(toAcessMenu <= indice.getElementsByClassName('selectedCategoryCard').length -1) {
                toAcessMenu+=1;
                console.log("o to acess menu right", toAcessMenu)
            }
            var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
            var toAddStyle = indice.getElementsByClassName('cardDetails')[oneMoreCard];
    
            toFocus.focus();
            toAddStyle.style.display = "block";
        }
    }

  }
  function moveLeftHome() {
    if(oneMoreCard >= 0) {
        campo[oneMore].getElementsByClassName('cardDetails')[oneMoreCard].style.display = "none";
    }

    indice = campo[oneMore];
    if(indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard] != null || indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard] != undefined){
        //campo[oneMore].getElementsByClassName('selectedCategoryCard')[oneMoreCard].classList.remove("teste");
        //console.log("o tamanho", campo[oneMore].getElementsByClassName('selectedCategoryCard').length)
        if(oneMoreCard > 0){
            oneMoreCard-=1;
            console.log("o onemorecard apertando o left", oneMoreCard)

        }
        if(oneMoreCard >= 0) {
            if(toAcessMenu > 0) {
                toAcessMenu-=1;
                console.log("to acess menu left", toAcessMenu);
            }
            var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
            var toAddStyle = indice.getElementsByClassName('cardDetails')[oneMoreCard];
      
            toFocus.focus();
            toAddStyle.style.display = "block";
        }

        if(toAcessMenu == 0) {
            unlockLeftMenu = true;
            if(unlockLeftMenu == true) {
                indiceMenu = campoMenu[0];
                indiceMenu.focus();
            }
        }
        //campo[oneMore].getElementsByClassName('selectedCategoryCard')[oneMoreCard].classList.add("teste").scrollIntoView({
        //    inline: "left",
      //      behavior: "smooth"
    //    });


    }

  }



 
