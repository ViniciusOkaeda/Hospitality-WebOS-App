



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

//variavel auxiliar p navegação entre canais
var oneMoreChannelVertical = 0;
var oneMoreChannelHorizontal = 0;

//variaveis para acesso e navegação do menu lateral esquerdo
var firstDownKey = false;
var oneMoreMenu = 0;
var unlockLeftMenu = false;
var toAcessMenu = 1;
document.addEventListener('keydown', onKeyDown, function(e) {
    //oneMore++;
    //console.log("contagem", oneMore)
});
if(window.location.pathname == "/pages/catalog/catalog.html"){
    console.log("é o catalogo")
}
if(window.location.pathname == "/"){
    console.log("é o inicio")
}
console.log("o window", window.location);

function onKeyDown(event) {
    menu = document.querySelectorAll('.selectedMenu')
    campoMenu = document.querySelectorAll('.selectedMenuItem')

    campo = document.querySelectorAll('.selected')

    campoCategory = document.querySelectorAll('.selectedCategoryCard')
    
    switch (event.keyCode) {
        
        case KEYCODE.DOWN:
            switch(window.location.pathname) {

                
                case "/media/developer/apps/usr/palm/applications/com.hospitality.yplay.app/pages/channels/channels.html": 
                    console.log("keycode down");
                    moveDownSelectedChannels();
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
                    break;
                
                case "/pages/channels/channels.html": 
                    console.log("keycode down");
                    moveDownSelectedChannels();
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
                    break;
                

                case "/media/developer/apps/usr/palm/applications/com.hospitality.yplay.app/pages/catalog/catalog.html": 
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
                    break;
                
                case "/pages/catalog/catalog.html": 
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
                    break;
                
                case "/media/developer/apps/usr/palm/applications/com.hospitality.yplay.app/index.html":
                    moveDownLogin();

                    break;

                case "/media/developer/apps/usr/palm/applications/com.hospitality.yplay.app/pages/info-selected-content/selectedcontent.html":
                    moveDownSelectedContent();

                    break;

                case "/pages/info-selected-content/selectedcontent.html":
                    moveDownSelectedContent();

                    break;
            }

        event.preventDefault();
        break;
        case KEYCODE.UP:
            switch(window.location.pathname) {
                case "/media/developer/apps/usr/palm/applications/com.hospitality.yplay.app/pages/channels/channels.html": 
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
                    break;
                
                case "/pages/channels/channels.html": 
                    console.log("keycode up");
                    moveUpSelectedChannels();
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
                    break;
                

                case "/media/developer/apps/usr/palm/applications/com.hospitality.yplay.app/pages/catalog/catalog.html": 
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
                    break;
                
                case "/pages/catalog/catalog.html": 
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
                    break;
                
                case "/media/developer/apps/usr/palm/applications/com.hospitality.yplay.app/index.html":
                    moveUpLogin();
                    break;
                
                case "/media/developer/apps/usr/palm/applications/com.hospitality.yplay.app/pages/info-selected-content/selectedcontent.html":
                    moveUpSelectedContent();
    
                    break;

                case "/pages/info-selected-content/selectedcontent.html":
                    moveUpSelectedContent();
    
                    break;
            
            }



        event.preventDefault();
        break;
        case KEYCODE.LEFT:
            switch(window.location.pathname) {
                case "/media/developer/apps/usr/palm/applications/com.hospitality.yplay.app/pages/channels/channels.html": 
                console.log("keycode down");
                moveLeftSelectedChannels();
                //console.log("o indice é", indice)
                //aqui começa para acessar o menu lateral esquerdo

                break;
            
            case "/pages/channels/channels.html": 
                console.log("keycode up");
                moveLeftSelectedChannels();
                //console.log("o indice é", indice)
                //aqui começa para acessar o menu lateral esquerdo
                
                break;

                case "/media/developer/apps/usr/palm/applications/com.hospitality.yplay.app/pages/catalog/catalog.html": 
                    moveLeftHome();

                    //parte para acessar e navegar o menu lateral esquerdo
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
            
                        } 
            
                    //oneMore-=1;  
                    //indice2 = campo[oneMore]
            
            
                    //if(indice2 != null || indice2 != undefined) {
                    //    anterior = campo[-1];
                    //    indice2.focus();
                    //}

                break;
                
                case "/pages/catalog/catalog.html": 
                    moveLeftHome();

                    //parte para acessar e navegar o menu lateral esquerdo
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
            
                        } 
            
                    //oneMore-=1;  
                    //indice2 = campo[oneMore]
            
            
                    //if(indice2 != null || indice2 != undefined) {
                    //    anterior = campo[-1];
                    //    indice2.focus();
                    //}

                break;
                
                case "/media/developer/apps/usr/palm/applications/com.hospitality.yplay.app/pages/info-selected-content/selectedcontent.html":
                    moveLeftSelectedContent();

                    break;

                case "/pages/info-selected-content/selectedcontent.html":
                    moveLeftSelectedContent();
        
                    break;
            }


        event.preventDefault();
        break;
        case KEYCODE.RIGHT:
            switch(window.location.pathname) {
                case "/media/developer/apps/usr/palm/applications/com.hospitality.yplay.app/pages/channels/channels.html": 
                console.log("keycode down");
                moveRightSelectedChannels();
                //console.log("o indice é", indice)
                //aqui começa para acessar o menu lateral esquerdo

                break;
            
            case "/pages/channels/channels.html": 
                console.log("keycode up");
                moveRightSelectedChannels();
                //console.log("o indice é", indice)
                //aqui começa para acessar o menu lateral esquerdo
                
                break;
            

                case "/media/developer/apps/usr/palm/applications/com.hospitality.yplay.app/pages/catalog/catalog.html": 
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

                    break;
                
                case "/pages/catalog/catalog.html": 
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

                    break;
                
                case "/media/developer/apps/usr/palm/applications/com.hospitality.yplay.app/pages/info-selected-content/selectedcontent.html":
                    moveRightSelectedContent();
                    break; 

                case "/pages/info-selected-content/selectedcontent.html":
                    moveRightSelectedContent();
            
                    break;
            }
        event.preventDefault();
        break;
    }
  }

//-------------------------
  function moveDownLogin() {
    if( oneMore < campo.length -1 ) {
        oneMore+=1;
        campo[oneMore].focus();
    }

  }
  function moveUpLogin() {
    if( oneMore > 0 ) {
        oneMore-=1;
        campo[oneMore].focus();
    }
  }


//-------------------------
  function moveDownHome() {
    if(auxDontCount == true){
        if(oneMore >= 0) {
        }
        if(oneMore < campo.length -1) {
            oneMore+=1;
            sessionStorage.setItem("indexCount", oneMore);
            oneMoreCard = 0;

        }
        indice = campo[oneMore];
        //console.log("o que tem no campo ao apertar DOWN", indice)
        //console.log("o que tem no length", campo.length)
        if(indice != null || indice != undefined) {
            //indice.focus();
            //indice.getElementsByClassName('selectedCategoryCard')[0].focus();
            var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
            //console.log("o add style", toAddStyle)
            //varia.scrollIntoView({
                //    inline: "center",
                //    behavior: "smooth"
            indice.scrollIntoView({block: "center"})
        
                //})
            toFocus.focus();
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
        }
        if(oneMore > 0) {
            oneMore-=1;
            sessionStorage.setItem("indexCount", oneMore);
            oneMoreCard = 0;
        }

        indice = campo[oneMore];
        if(indice != null || indice != undefined) {
            anterior = campo[-1];
            var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
            //console.log("o add style", toAddStyle)
            indice.scrollIntoView({block: "center"})
            toFocus.focus();
        }
    }

  }
  function moveRightHome() {
    if(oneMoreCard >= 0) {
        var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
        //toFocus.scrollTo(0, 1000)
        toFocus.scrollIntoView({ block: "center", inline: "center"});
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
            //toFocus.scrollTo(0, 1000)
            //toFocus.scrollIntoView({ inline: "left"});
            toFocus.focus();
            toFocus.scrollIntoView({ behavior: "auto", block: "center", inline: "start" }) ;
        }
    }

  }
  function moveLeftHome() {
    if(oneMoreCard >= 0) {
        var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
        //toFocus.scrollTo(0, 1000)
        //toFocus.scrollIntoView({ block: "center", inline: "center"});
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
            toFocus.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest"});
            toFocus.focus();
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
//-------------------------


function moveDownSelectedContent() {
    console.log("o campo", campo)

    if(oneMore < campo.length -1) {
        oneMore+=1;
        oneMoreCard = 0;

    }
    indice = campo[oneMore];
    //console.log("o que tem no campo ao apertar DOWN", indice)
    //console.log("o que tem no length", campo.length)
    if(indice != null || indice != undefined) {
        //indice.focus();
        //indice.getElementsByClassName('selectedCategoryCard')[0].focus();
        var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
        //console.log("o add style", toAddStyle)
        //varia.scrollIntoView({
            //    inline: "center",
            //    behavior: "smooth"
            //})
        if(oneMore > 0) {
            toFocus.scrollIntoView()

        }

        toFocus.focus();
        //varia.classList.add("cardStyle");
        //console.log("o varia", toFocus)
        //console.log("o indice dentro do if", indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard])
        //console.log("o campo category", campoCategory)
    }
}
function moveUpSelectedContent() {
    if(oneMore > 0) {
        oneMore-=1;
        oneMoreCard = 0;
    }

    indice = campo[oneMore];
    if(indice != null || indice != undefined) {
        anterior = campo[-1];
        var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
        //console.log("o add style", toAddStyle)
        toFocus.focus();
    }
}
function moveLeftSelectedContent() {

    indice = campo[oneMore];
    if(indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard] != null || indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard] != undefined){
        //campo[oneMore].getElementsByClassName('selectedCategoryCard')[oneMoreCard].classList.remove("teste");
        //console.log("o tamanho", campo[oneMore].getElementsByClassName('selectedCategoryCard').length)
        if(oneMoreCard > 0){
            oneMoreCard-=1;
            console.log("o onemorecard apertando o left", oneMoreCard)

        }
        if(oneMoreCard >= 0) {

            var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
            toFocus.focus();
            if(oneMore > 0) {
                toFocus.scrollIntoView({ behavior: "auto", inline: "start" }) ;

            }
        }

        //campo[oneMore].getElementsByClassName('selectedCategoryCard')[oneMoreCard].classList.add("teste").scrollIntoView({
        //    inline: "left",
      //      behavior: "smooth"
    //    });


    }
}
function moveRightSelectedContent() {

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

            var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
            toFocus.focus();
            if(oneMore > 0) {
                toFocus.scrollIntoView({ behavior: "auto", inline: "start" }) ;

            }
        }
    }
}

//---------------------------------------
function moveDownSelectedChannels() {
    console.log("o campo", campo)
    //console.log("o oneMore é", oneMore)
    oneMoreChannelVertical +=1;
    console.log("o oneMoreChannel é", oneMoreChannelVertical)

    if(oneMore < 1) {
        oneMore+=1;
        oneMoreCard = 0;
        toAcessMenu = 1;
        oneMoreChannelHorizontal = 0;
        console.log("o oneMore", oneMore);
        indice = campo[oneMore];
        if(indice != null || indice != undefined) {
        
            var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
            toFocus.focus();
            //indice.focus();
            //indice.getElementsByClassName('selectedCategoryCard')[0].focus();
            //console.log("o add style", toAddStyle)
            //varia.scrollIntoView({
                //    inline: "center",
                //    behavior: "smooth"
                //})
    
    
            //varia.classList.add("cardStyle");
            //console.log("o varia", toFocus)
            //console.log("o indice dentro do if", indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard])
            //console.log("o campo category", campoCategory)
        }

    }

    if(oneMoreChannelVertical >= 3) {
        indice = campo[oneMore];
        if(indice != null || indice != undefined) {
            
            var limitNavigate = indice.getElementsByClassName('selectedCategoryCard').length;
            console.log("o teste", limitNavigate)
            if(limitNavigate - oneMoreCard >= 6) {
                oneMoreCard +=5;

            } else {
                oneMoreChannelVertical -=1;
            }
            var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
            toFocus.focus();
            //indice.focus();
            //indice.getElementsByClassName('selectedCategoryCard')[0].focus();
            //console.log("o add style", toAddStyle)
            //varia.scrollIntoView({
                //    inline: "center",
                //    behavior: "smooth"
                //})
    
    
            //varia.classList.add("cardStyle");
            //console.log("o varia", toFocus)
            //console.log("o indice dentro do if", indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard])
            //console.log("o campo category", campoCategory)
        }
        console.log("o oneMoreCard é", oneMoreCard)
    }
    //console.log("o que tem no campo ao apertar DOWN", indice)
    //console.log("o que tem no length", campo.length)

}
function moveUpSelectedChannels() {
    console.log("o campo", campo)
    //console.log("o oneMore é", oneMore)
    if(oneMoreChannelVertical > 0) {
        oneMoreChannelVertical -=1;

        console.log("o oneMoreChannel é", oneMoreChannelVertical)
    }

    if(oneMoreChannelVertical == 1) {
        oneMore-=1;
        oneMoreCard = 0;
        toAcessMenu = 1;
        console.log("o oneMore", oneMore);
        console.log("o oneMore", oneMoreChannelVertical);
        indice = campo[oneMore];
        if(indice != null || indice != undefined) {
        
            var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
            toFocus.focus();
            //indice.focus();
            //indice.getElementsByClassName('selectedCategoryCard')[0].focus();
            //console.log("o add style", toAddStyle)
            //varia.scrollIntoView({
                //    inline: "center",
                //    behavior: "smooth"
                //})
    
    
            //varia.classList.add("cardStyle");
            //console.log("o varia", toFocus)
            //console.log("o indice dentro do if", indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard])
            //console.log("o campo category", campoCategory)
        }

    }



    if(oneMoreChannelVertical >= 2) {
        indice = campo[oneMore];
        if(indice != null || indice != undefined) {
            
            var limitNavigate = indice.getElementsByClassName('selectedCategoryCard').length;
            console.log("o teste", limitNavigate)
            if(limitNavigate - oneMoreCard >= 6) {
                oneMoreCard -=5;

            }
            var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
            toFocus.focus();
            //indice.focus();
            //indice.getElementsByClassName('selectedCategoryCard')[0].focus();
            //console.log("o add style", toAddStyle)
            //varia.scrollIntoView({
                //    inline: "center",
                //    behavior: "smooth"
                //})
    
    
            //varia.classList.add("cardStyle");
            //console.log("o varia", toFocus)
            //console.log("o indice dentro do if", indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard])
            //console.log("o campo category", campoCategory)
        }
        console.log("o oneMoreCard é", oneMoreCard)
    }
    //console.log("o que tem no campo ao apertar DOWN", indice)
    //console.log("o que tem no length", campo.length)

}
function moveLeftSelectedChannels() {

    if(toAcessMenu > 0) {
        console.log("o to acess menu na left", toAcessMenu)





        indice = campo[oneMore];
        if(indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard] != null || indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard] != undefined){
            //campo[oneMore].getElementsByClassName('selectedCategoryCard')[oneMoreCard].classList.remove("teste");
            //console.log("o tamanho", campo[oneMore].getElementsByClassName('selectedCategoryCard').length)
            
            
            if(oneMore == 0) {
                console.log("tamanho", indice.getElementsByClassName('selectedCategoryCard').length)
                console.log("o acessMenu é", toAcessMenu)
                if(oneMoreCard > 0){
                    if(oneMoreChannelHorizontal >= -1) {
                        toAcessMenu-=1;
                        if (toAcessMenu == 0) {
                            console.log("o acessMenu é 2", toAcessMenu)
                            var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
                            toFocus.blur();
                                
                            indiceMenu = menu[1];
                            var toDisplay = document.getElementById('navigationToRemove');
                            var toDisplay2 = document.getElementById('navigationToRemove2');
                            console.log("o que tem no toDisplay", toDisplay)
                            toDisplay2.classList.remove("navigationNone");
                            toDisplay.classList.add("navigationNone");
                
                            var toFocusMenu = indiceMenu.getElementsByClassName('selectedMenuItem')[oneMoreMenu];
                            toFocusMenu.focus();
                            console.log("o que tem no indiceMenu", indiceMenu)
                        }
                    }

                    if(oneMoreChannelHorizontal > 0) {
                        oneMoreChannelHorizontal-=1;
                        oneMoreCard-=1;
                        var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
                        toFocus.focus();
                    }
                    console.log("o onemorecard apertando o left", oneMoreCard)
                }
            }
            
            
            if(oneMore == 1) {
                if(oneMoreCard > 0){
                    if(oneMoreChannelHorizontal > 0) {
                        oneMoreChannelHorizontal-=1;
                        oneMoreCard-=1;
                        toAcessMenu-=1;
                        var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
                        toFocus.focus();
                    }
                    console.log("o onemorecard apertando o left", oneMoreCard)
                }
    
            }



    }



        //campo[oneMore].getElementsByClassName('selectedCategoryCard')[oneMoreCard].classList.add("teste").scrollIntoView({
        //    inline: "left",
      //      behavior: "smooth"
    //    });


    }
}
function moveRightSelectedChannels() {


    if(toAcessMenu > 0) {
        indice = campo[oneMore];
        console.log("o to acess menu na right", toAcessMenu)
        if(indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard] != null || indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard] != undefined){
            //campo[oneMore].getElementsByClassName('selectedCategoryCard')[oneMoreCard].classList.remove("teste");
            console.log("o tamanho", campo[oneMore].getElementsByClassName('selectedCategoryCard').length)
            if(oneMore == 0) {
                console.log("tamanho", indice.getElementsByClassName('selectedCategoryCard').length)
                if(oneMoreCard < indice.getElementsByClassName('selectedCategoryCard').length -1){
                    if(oneMoreChannelHorizontal < indice.getElementsByClassName('selectedCategoryCard').length) {
                        oneMoreChannelHorizontal+=1;
                        oneMoreCard+=1;
                        toAcessMenu+=1;
                        var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
                        toFocus.focus();
    
                    }
                    console.log("o onemorecard apertando o right", oneMoreCard)
                }
            }
            
            
            if(oneMore == 1) {
                if(oneMoreCard < indice.getElementsByClassName('selectedCategoryCard').length -1){
                    if(oneMoreChannelHorizontal < 5) {
                        toAcessMenu+=1;
                    }
                    if(oneMoreChannelHorizontal < 4) {
                        oneMoreChannelHorizontal+=1;
                        oneMoreCard+=1;
                        var toFocus = indice.getElementsByClassName('selectedCategoryCard')[oneMoreCard];
                        toFocus.focus();
                    }
                    console.log("o onemorecard apertando o right", oneMoreCard)
                }
    
            }

    }

        //campo[oneMore].getElementsByClassName('selectedCategoryCard')[oneMoreCard].classList.add("teste").scrollIntoView({
        //    inline: "left",
      //      behavior: "smooth"
    //    });


    }
}


 
