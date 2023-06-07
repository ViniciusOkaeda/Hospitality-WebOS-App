 function navigationOptionsMenu() {



    document.getElementById('navigationOptions').innerHTML = 
    `
    <div class="navigationContainer ">
        <div class="navigationContent1 selectedMenu">
            <div class="navigationProfile">

                <div class="navigationProfileImage"
                style="background-image: url(${localStorage.getItem('profileimage')});"
                ></div>


                <div class="navigationProfileText">
                    <h3>${localStorage.getItem('profilename')}</h3>

                    <div class="navigationProfileDate">
                    <h4 id="horas">00</h4>
                    <h4>:</h4>
                    <h4 id="minutos">00</h4>
                    <h4>:</h4>
                    <h4 id="segundos">00</h4>
                    
                    </div>
                </div>
            </div>

            <a href="../channels/channels.html">
                <button class="navigationButton selectedMenuItem">
                    <div class="navigationButtonIcon">
                        <image src="../../images/magnifier.png"></image>
                    </div>
                    <div class="navigationButtonText">
                        <h3>Pesquisar</h3>
                    </div>
                </button>
            </a>

            <a href="../catalog/catalog.html">
            <button class="navigationButton selectedMenuItem">
                <div class="navigationButtonIcon">
                    <image src="../../images/home.png"></image>
                </div>
                <div class="navigationButtonText">
                    <h3>Home</h3>
                </div>
            </button>
            </a>

            <a href="../player/player.html">
            <button class="navigationButton selectedMenuItem">
                <div class="navigationButtonIcon">
                    <image src="../../images/watching-tv.png"></image>
                </div>
                <div class="navigationButtonText">
                    <h3>TV</h3>
                </div>
            </button>
            </a>

            <a href="../channels/channels.html">
            <button class="navigationButton selectedMenuItem">
                <div class="navigationButtonIcon">
                    <image src="../../images/bullet-list.png"></image>
                </div>
                <div class="navigationButtonText">
                    <h3>Programação</h3>

                </div>
            </button>
            </a>

            <a href="../channels/channels.html">
            <button class="navigationButton selectedMenuItem">
                <div class="navigationButtonIcon">
                    <image src="../../images/watch-movie.png"></image>
                </div>
                <div class="navigationButtonText">
                <h3>Filmes e Séries</h3>
                </div>
            </button>
            </a>

            <a href="../channels/channels.html">
            <button class="navigationButton selectedMenuItem">
                <div class="navigationButtonIcon">
                    <image src="../../images/fm.png"></image>
                </div>
                <div class="navigationButtonText">
                <h3>Radios</h3>
                </div>
            </button>
            </a>

            <a href="../channels/channels.html">
            <button class="navigationButton selectedMenuItem">
                <div class="navigationButtonIcon">
                    <image src="../../images/settings.png"></image>
                </div>
                <div class="navigationButtonText">
                <h3>Configurações</h3>
                </div>
            </button>
            </a>

        </div>
        <div class="navigationContent2"></div>
    </div>
    `

    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const segundos = document.getElementById('segundos');
    
    const relogio = setInterval(function time() {
        let dateToday = new Date();
        let hr = dateToday.getHours();
        let min = dateToday.getMinutes();
        let s = dateToday.getSeconds();
    
        if (hr < 10) hr = '0' + hr;
    
        if (min < 10) min = '0' + min;
    
        if (s < 10) s = '0' + s;

        horas.textContent = hr;
        minutos.textContent = min;
        segundos.textContent = s;
    
        //console.log("o relogio", hr)
        //console.log("o relogio", min)
        //console.log("o relogio", s)
    })

}

navigationOptionsMenu();
