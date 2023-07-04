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

            <a href="../search/search.html">
            <button class="navigationButton selectedMenuItem">
                <div class="navigationButtonIcon">
                    <image src="../../images/search2.png"></image>
                </div>
                <div class="navigationButtonText">
                    <h3>Pesquisar</h3>
                </div>
            </button>
            </a>

        

            <a href="../catalog/catalog.html">
            <button class="navigationButton selectedMenuItem">
                <div class="navigationButtonIcon">
                    <image src="../../images/home5.png"></image>
                </div>
                <div class="navigationButtonText">
                    <h3>Home</h3>
                </div>
            </button>
            </a>

            <a href="../channels/channels.html">
            <button class="navigationButton selectedMenuItem">
                <div class="navigationButtonIcon">
                    <image src="../../images/tv3.png"></image>
                </div>
                <div class="navigationButtonText">
                    <h3>TV</h3>
                </div>
            </button>
            </a>

            <a href="../guide/guide.html">
            <button class="navigationButton selectedMenuItem">
                <div class="navigationButtonIcon">
                    <image src="../../images/list3.png"></image>
                </div>
                <div class="navigationButtonText">
                    <h3>Programação</h3>

                </div>
            </button>
            </a>

            <a href="../movies/movies.html">
            <button class="navigationButton selectedMenuItem">
                <div class="navigationButtonIcon">
                    <image src="../../images/movie5.png"></image>
                </div>
                <div class="navigationButtonText">
                <h3>Filmes e Séries</h3>
                </div>
            </button>
            </a>

            <a href="../channels/channels.html">
            <button class="navigationButton selectedMenuItem">
                <div class="navigationButtonIcon">
                    <image src="../../images/radio4.png"></image>
                </div>
                <div class="navigationButtonText">
                <h3>Radios</h3>
                </div>
            </button>
            </a>

            <a href="../channels/channels.html">
            <button class="navigationButton selectedMenuItem">
                <div class="navigationButtonIcon">
                    <image src="../../images/gear.png"></image>
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
