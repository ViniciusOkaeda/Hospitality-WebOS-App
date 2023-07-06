async function getSpecificEvent() {
    const auth = localStorage.getItem("authorization");
    const profile = localStorage.getItem("profileid");
    const type = localStorage.getItem("type");
    const event = localStorage.getItem("event");
    const content = localStorage.getItem("idContent");
    const language = 'pt';
    const devicesType = 'webos';

    switch(type){
        case "TV":
            console.log("foi tv")
            const getSpecificEventRequestTV = await axios.post('https://hospitality.youcast.tv.br/getUpdatedEventsV2', {
                authorization: 'Bearer ' + auth,
                includeData: true,
                profileId: profile,
                language: language,
                devicesType: devicesType,
                ids: [parseInt(event)],
                timestamp: 0
            }).then(function (response) {
                console.log("o response", response)
                if(response.data.status == 1){
                    console.log("o getUpdatedEventsV2", response.data.response);
                    showEventInitial(response.data.response);
                }
            }).catch(function (response) {
                console.log("o response de erro", response)
            })
        
            const getRecomendationEventRequestTV = await axios.post('https://hospitality.youcast.tv.br/getEventRecommendationRows', {
                authorization: 'Bearer ' + auth,
                includeData: true,
                profileId: profile,
                language: language,
                devicesType: devicesType,
                id: parseInt(event),
                type: type
            }).then(function (response) {
                console.log("o response", response)
                if(response.data.status == 1){
                    console.log("o EventRecomendations", response.data.response);
                    showEventRecomendations(response.data.response);
                }
            }).catch(function (response) {
                console.log("o response de erro", response)
            })

            break;
        case "VOD":

            const getSpecificEventRequestVod = await axios.post('https://hospitality.youcast.tv.br/getDataV2', {
                authorization: 'Bearer ' + auth,
                includeData: true,
                profileId: profile,
                language: language,
                devicesType: devicesType,
                vodsId: parseInt(event),
                timestamp: 0
            }).then(function (response) {
                console.log("o response getSpecificEventRequestVod", response)
                if(response.data.status == 1){
                    console.log("o getDataV2", response.data.response);
                    showEventInitial([response.data.response]);
                }
            }).catch(function (response) {
                console.log("o response de erro", response)
            })
        
            const getRecomendationEventRequestVod = await axios.post('https://hospitality.youcast.tv.br/getEventRecommendationRows', {
                authorization: 'Bearer ' + auth,
                includeData: true,
                profileId: profile,
                language: language,
                devicesType: devicesType,
                id: parseInt(event),
                type: type
            }).then(function (response) {
                console.log("o response getRecomendationEventRequestVod", response)
                if(response.data.status == 1){
                    console.log("o EventRecomendations", response.data.response);
                    showEventRecomendations(response.data.response);
                }
            }).catch(function (response) {
                console.log("o response de erro", response)
            })
            break;
        case "Category":

            const getSpecificEventRequestCategory = await axios.post('https://hospitality.youcast.tv.br/getCategory', {
                authorization: 'Bearer ' + auth,
                includeData: true,
                profileId: profile,
                language: language,
                devicesType: devicesType,
                ids: [parseInt(event)],
                timestamp: 0
            }).then(function (response) {
                console.log("o response", response)
                if(response.data.status == 1){
                    console.log("o getUpdatedEventsV2", response.data.response);
                    showEventInitial(response.data.response);
                }
            }).catch(function (response) {
                console.log("o response de erro", response)
            })
        
            const getRecomendationEventRequestCategory = await axios.post('https://hospitality.youcast.tv.br/getEventRecommendationRows', {
                authorization: 'Bearer ' + auth,
                includeData: true,
                profileId: profile,
                language: language,
                devicesType: devicesType,
                id: parseInt(event),
                type: type
            }).then(function (response) {
                console.log("o response", response)
                if(response.data.status == 1){
                    console.log("o EventRecomendations", response.data.response);
                    showEventRecomendations(response.data.response);
                }
            }).catch(function (response) {
                console.log("o response de erro", response)
            })
            break;

    }


        


}
getSpecificEvent();


function showEventInitial(response) {
    document.getElementById("myInitialInfo").innerHTML =
    `
    ${response.map((e, idx) => {
        return(`
            <div class="initial" >
                <div class="initialImageBackground" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(29, 32, 33, 1) 90%), url(${e.image_widescreen == null ? e.image : e.image_widescreen})"></div>
                <div class="initialInfoContent">
                    <div class="initialInfo">
                        <div class="initialInfoTitle">
                            <div class="infoTitle">
                                <h1>${e.title}</h1>
                            </div>

                            <div class="infoRating
                            ${e.rating < 10 ? "bannerRatingL" : ''} 
                            ${e.rating == 10 ? "bannerRating10" : ''} 
                            ${e.rating == 12 ? "bannerRating12" : ''} 
                            ${e.rating == 14 ? "bannerRating14" : ''} 
                            ${e.rating == 16 ? "bannerRating16" : ''} 
                            ${e.rating == 18 ? "bannerRating18" : ''}
                            ">
                                <h2>${e.rating == 0 ? "L" : e.rating}</h2>

                            </div>
                        </div>


                        <div class="initialInfoDetails">
                            <div class="initialInfoLogo">
                                <img src="${e.channels_logo}" class="infoChannelLogo"></img>
                            </div>

                            <div class="initialInfoTime">
                                <h4>Duração: ${e.duration / 60}m</h4>
                            </div>

                            <div class="initialInfoGenres">
                            <h4>Categoria: ${e.genres}</h4>
                            </div>
                        </div>

                        <div class="initialInfoButtons selected">
                            <div class="infoButtonPlay">
                                <button class="selectedCategoryCard" onclick="showEvent()">Assistir Agora!</button>
                            </div>
                            <div class="infoButtonMyList">
                                <button class="selectedCategoryCard">Adicionar em Minha Lista</button>
                            </div>
                        </div>

                        <div class="initialInfoDescription">
                            <div class="infoDescription">
                                <h3>${e.description}</h3>
                            </div>

                            <div class="infoDirectors">
                                <h4>Direção: ${e.directors}</h4>
                            </div>

                            <div class="shadow"></div>
                        </div>
                    </div>
                </div>
            </div>
        `)
    })}
    `
}




function showEventRecomendations(response) {
    document.getElementById("mySliderRecomendation").innerHTML =
    `
    ${response.map((e, idx) => {

        return(`
            <div class="eventRecomendationCards">
                <div class="cardsInfoContainer">
                    <div class="cardsInfoTitle">
                        <h2>${e.title}</h2>
                    </div>

                    <div class="cardsInfoList selected">
                        ${e.data.map((card, idx) => {

                            return(`
                                <div class="cardsInfo">
                                    <button
                                    class="selectedCategoryCard"
                                    onfocus="showFocusedCardInfo()"
                                    onclick="showAnotherEvent()"
                                    data-id=" ${card.id}"
                                    data-duration="${card.duration}"
                                    data-type="${card.type}"
                                    data-channelId="${card.channels_id}"
                                    data-start="${card.start}"
                                    data-title="${card.title}"
                                    data-description="${card.description}"
                                    data-rating="${card.rating}"
                                    data-end="${card.end}"
                                    data-logo="${card.channels_logo}"
                                    data-episode="${card.episode}"
                                    data-subtitle="${card.subtitle}"

                                    style="
                                    background-image: url(${card.image}); 
                                    background-size: cover; 
                                    background-repeat: no-repeat;
                                    background-position: top center;
                                    object-fit: cover
                                    ">
                                    
                                    </button>
                                </div>
                            
                            `)
                        })}
                    </div>


                    <div id="focusedCard" class="cardsInfoDescription">

                    </div>
                </div>
            </div>
        `)
    })}
    `
}

function showFocusedCardInfo() {
    console.log("o event", event.target.dataset)
    //const dataCriada = new Date(event.target.dataset.start);
    //const formatedDate = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short' }).format(dataCriada);
    document.getElementById("focusedCard").innerHTML = 
    
    `
    <div class="focusedCardContent">
        <div class="focusedCardTitle">
            <h3>${event.target.dataset.title}</h3>
        </div>

        <div class="${event.target.dataset.episode !== "null" ? "focusedCardEpisode" : "focusedNone"}">
            <h3>${event.target.dataset.episode}</h3>
        </div>

        <div class="focusedCardRating
            ${event.target.dataset.rating < 10 ? "bannerRatingL" : ''} 
            ${event.target.dataset.rating == 10 ? "bannerRating10" : ''} 
            ${event.target.dataset.rating == 12 ? "bannerRating12" : ''} 
            ${event.target.dataset.rating == 14 ? "bannerRating14" : ''} 
            ${event.target.dataset.rating == 16 ? "bannerRating16" : ''} 
            ${event.target.dataset.rating == 18 ? "bannerRating18" : ''}
        "><h3>${event.target.dataset.rating == 0 ? "L" : event.target.dataset.rating}</h3>
        </div>
    </div>

    <div class="${event.target.dataset.logo != "undefined" || event.target.dataset.duration != "undefined" ? "focusedCardContent2" : "focusedNone"}">
        <div 
        class="${event.target.dataset.logo != "undefined" ? "focusedCardLogo" : "focusedNone"}" 
        style="background-image: url(${event.target.dataset.logo}); height: 100%;"
        ></div>

        <div class="focusedCardDuration">
            <h4>Duração: ${event.target.dataset.duration / 60}m</h4>
        </div>

        <div class="${event.target.dataset.start != "undefined" ? "focusedCardStart" : "focusedNone"}">
            <h4>${event.target.dataset.start}</h4>
        </div>
    </div>

    <div class="focusedCardDescription">
        <h4>${event.target.dataset.description}</h4>
    </div>
    `

}

function showEvent() {
    window.location.href = '../../pages/player/player.html'
}

function showAnotherEvent() {

    localStorage.setItem("idContent", event.target.dataset.channelid)
    localStorage.setItem("event", event.target.dataset.id)
    localStorage.setItem("type", event.target.dataset.type)
    window.location.href = '../../pages/info-selected-content/selectedcontent.html'

}


