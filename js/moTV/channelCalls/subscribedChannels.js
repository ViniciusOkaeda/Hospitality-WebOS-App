const auth = localStorage.getItem("authorization");
const profile = localStorage.getItem("profileid");
const language = 'pt';
const devicesType = 'webos';
function adicionaZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
}
const timeGet = new Date();
const hours = timeGet.getHours();
const minutes = timeGet.getMinutes();
const seconds = timeGet.getMinutes();
const currentYear = timeGet.getFullYear();
const today = timeGet.getDate();
const currentMonth = timeGet.getMonth() + 1; 
const timezone = timeGet.getTime();

let getMonthFormated = (adicionaZero(timeGet.getMonth()+1).toString() );
let getDayFormated = (adicionaZero(timeGet.getDate().toString()) );
//console.log("mes formatado", getMonthFormated);
//console.log("dia formatado", getDayFormated);

const fullDate = currentYear + "-" + getMonthFormated + "-" + getDayFormated + "T" + hours + ":" + minutes + ":" + seconds
const fullDate2 = currentYear + "-" + getMonthFormated + "-" + getDayFormated + "T" + hours 
const fullDate3 = currentYear + "-" + getMonthFormated + "-" + getDayFormated
const stringDate = fullDate.toString();

//console.log ("o str date", stringDate)


async function getSubscribedChannels() {

    var loaded = document.getElementById("loadingContent");
    var load1 = false;

    showLoading();
    if(localStorage.getItem("catId") == null) {
        localStorage.setItem("catId", "null")
    }



    async function getSubscribedAndLockedChannels() {
        await axios.post('https://hospitality.youcast.tv.br/getSubscribedAndLockedChannels', {
        authorization: 'Bearer ' + auth,
        includeData: true,
        profileId: profile,
        language: language,
        devicesType: devicesType,
    }).then(function (response) {
        if(response.data.status == 1){
            var allChannels = response.data.response;

            async function getUpdateEpgEventsV2() {
                await axios.post('https://hospitality.youcast.tv.br/getEpgUpdatedEventsV2', {
                authorization: 'Bearer ' + auth,
                includeData: true,
                profileId: profile,
                language: language,
                devicesType: devicesType,
                timestamp: 0,
                from: stringDate,
                to: stringDate
            }).then(function (response) {
                if(response.data.status == 1){
                    var updateEpgEvents = response.data.response
                    //console.log("o getEpgInfo", updateEpgEvents)

                    async function getFavoriteChannels() {
                        await axios.post('https://hospitality.youcast.tv.br/getFavoriteChannels', {
                        authorization: 'Bearer ' + auth,
                        includeData: true,
                        profileId: profile,
                        language: language,
                        devicesType: devicesType,
                        timestamp: 0
                    }).then(function (response) {
                        if(response.data.status == 1){
                            load1 = true;
                            if(load1 == true ) {
                                loaded.style.display = "none";
                            }
                            //console.log("o getFavoriteChannels", response.data.response);
                            filterAllChannels(allChannels, updateEpgEvents, response.data.response);
        
                        }
                    }).catch(function (response) {
                        console.log("o response de erro", response)
                    })
                    } 
                    getFavoriteChannels();
        
                    //console.log("o getUpdateEpgEventsV2", response.data.response);

                }
            }).catch(function (response) {
                console.log("o response de erro", response)
            })
            }
            getUpdateEpgEventsV2() 

            //console.log("o getSubscribedAndLockedChannels", allChannels)

        }
    }).catch(function (response) {
        console.log("o response de erro", response)
    })
    }
    getSubscribedAndLockedChannels(); 





    const getChannelCategories = await axios.post('https://hospitality.youcast.tv.br/getChannelCategories', {
        authorization: 'Bearer ' + auth,
        includeData: true,
        profileId: profile,
        language: language,
        devicesType: devicesType,
        timestamp: 0
    }).then(function (response) {
        if(response.data.status == 1){
            
            showChannelCategories(response.data.response)
            //console.log("o getChannelCategories", response.data.response);
        }
    }).catch(function (response) {
        console.log("o response de erro", response)
    })

}

getSubscribedChannels();
showFocusedChannel();

function showLoading() {
    document.getElementById("loadingContent").innerHTML = 
    `
    <div class="loaderContent">
        <div class="loader">
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__ball"></div>      
        </div>

        <div><h3>Carregando...</h3></div>
    </div>
    `
}

function showFocusedChannel() {

    if(event == undefined) {
        document.getElementById("focusedChannel").innerHTML = 
        `
        <div class="focusedContainer">
            <div class="focusedTextInfo">
                <div class="focusedLogoContent">
                    <div class="focusedLogoImage2">
                        <div class="focusedShowLogo" style="background-image: url(${"../../images/logo-accorinvest-branco.png"})"></div>
                    </div>

                    <div class="focusedLogoName"></div>
                </div>

                <div class="focusedDetailsContainer">
                    <div class="focusedShowDescription">
                    <h3>Assista seus canais favoritos agora mesmo!</h3>
                    </div>
                </div>
            </div>

            <div class="focusedImageInfo"
            style="
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(29, 32, 33, 1) 100%), url(${"../../images/bgd_channels.png"})
            "
            >
                <div class="shadowLeft"></div>
            
            </div>
        </div>
        `
    }else if(event.target.dataset != undefined){
        const eventDetails = event.target.dataset
        //const formatedDate = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short' }).format(eventDetails.channels_start).toISOString()
        //console.log("formatou", formatedDate)
        //console.log("formatou", eventDetails.channels_start.toLocaleDateString('pt-BR'))
        //console.log("tem epg2", event.target.dataset)
        const dataCriada = new Date(eventDetails.channels_start);
        const formatedDate = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short' }).format(dataCriada);
        //console.log("data formatada", dataFormatada)
        localStorage.setItem("selectedChannel", event.target.dataset.channels_id)
        document.getElementById("focusedChannel").innerHTML = 
        `
        <div class="focusedContainer">
            <div class="focusedTextInfo">
                <div class="focusedLogoContent">
                    <div class="focusedLogoImage">
                        <div class="focusedShowLogo" style="background-image: url(${eventDetails.channels_logo})"></div>
                    </div>

                    <div class="focusedLogoName"><h2>${eventDetails.channels_name}</h2></div>
                </div>

                <div class="focusedDetailsContainer">
                    <div class="focusedShowGenresAndDuration">
                        <h6>Gênero: ${eventDetails.channels_genre}</h6>
                        <h6>|</h6>
                        ${eventDetails.channels_season_and_ep !== "null" ? `<h6>${eventDetails.channels_season_and_ep}</h6>` : ''}
                        ${eventDetails.channels_season_and_ep !== "null" ? `<h6>|</h6>` : ''}
                        <h6>Início em: ${formatedDate}</h6>
                    </div>

                    <div class="focusedShowDescription">
                        <h3>Hoje: ${eventDetails.channels_title}</h3>
                        <h4>${eventDetails.channels_description}</h4>
                    </div>

                    <div class="focusedShowGenresAndDuration">
                    <h6>Duração: ${parseInt(eventDetails.channels_duration) / 60}m</h6>
                    </div>
                </div>
            </div>

            <div class="focusedImageInfo"

            style="
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(29, 32, 33, 1) 100%), url(${eventDetails.channels_image_widescreen !== "null" ? eventDetails.channels_image_widescreen : eventDetails.channels_image})
            "
            >
                <div class="shadowLeft"></div>
            
            </div>
        </div>
        `

    }


}




function showChannelCategories(channelCategories) {
    document.getElementById("channelCategories").innerHTML = 
    `
    <div class="channelCategoriesContent selected">
        <button data-category-id="null" onclick="selectCategory()" class="channelButton selectedCategoryCard">Todos</button>
        <button data-category-id="4294967294" onclick="selectCategory()" class="channelButton selectedCategoryCard">Favoritos</button>
        <span class="Bar">|</span>
        ${channelCategories.filter(e => e.channels_categories_name != "Favoritos").map((e, idx) => {

            return(`
            <button data-category-id="${e.channels_categories_id}" onclick="selectCategory()" class="channelButton selectedCategoryCard">${e.channels_categories_name}</button>
            
            `);
        })}
    </div>
    
    `
}

function selectCategory() {
    if(event.target.dataset.categoryId == null) {
        localStorage.setItem("catId", "null");
    }else if(event.target.dataset.categoryId != null) {
        localStorage.setItem("catId", event.target.dataset.categoryId)
        getSubscribedChannels();
    }

}

function filterAllChannels(subscribedChannels, epgEvents, favoriteChannels) {
const category = localStorage.getItem("catId");
    if(category == "null"){
        showChannels(subscribedChannels, epgEvents);

    }else if (category != "null" && category != "4294967294"){
        //console.log("o teste", subscribedChannels.filter(e => e.channels_categories.filter(e => e == 5) == 5 ) )
        const filteredChannels = subscribedChannels.filter(e => e.channels_categories.filter(e => e == parseInt(category)) == parseInt(category) );
       // console.log("o resultado", filteredChannels);
        showChannels(filteredChannels, epgEvents)

    }else if (category == "4294967294") {
        const filteredFavoriteChannels = subscribedChannels.filter(id => favoriteChannels.map(e => e).includes(id.channels_id))
        //console.log("os canais favoritos são", filteredFavoriteChannels)
        showChannels(filteredFavoriteChannels, epgEvents);
    }
}

async function showChannels(channels, epgEvents) {

//console.log("os canais são", channels)
const filteredChannels = channels;
//console.log("o testes", testes.map(e => e))

//console.log("o que tem no testes", filteredChannels)

document.getElementById("allChannels").innerHTML = 
`
<div class="allChannelsContainer">

    <div class="allChannelsContent selected">
        ${filteredChannels.map((item, idx) => {

            const obj = epgEvents.filter(e => e.start.includes(fullDate2) ? e.start.includes(fullDate2) : e.start.includes(fullDate3));

            return(`
            <div class="channelContainer">
                <button class="channelButtonShow selectedCategoryCard"
                onclick="showFocusedChannel()"
                data-channels_id="${item.channels_id}"
                data-channels_name="${item.channels_name}"
                data-channels_logo="${item.channels_logo}"

                data-channels_description="${obj.filter(e => e.channels_id == item.channels_id )[0].description}"
                data-channels_title="${obj.filter(e => e.channels_id == item.channels_id )[0].title}"
                data-channels_subtitle="${obj.filter(e => e.channels_id == item.channels_id )[0].subtitle}"
                data-channels_start="${obj.filter(e => e.channels_id == item.channels_id )[0].start}"
                data-channels_end="${obj.filter(e => e.channels_id == item.channels_id )[0].end}"
                data-channels_image="${obj.filter(e => e.channels_id == item.channels_id )[0].image}"
                data-channels_image_widescreen="${obj.filter(e => e.channels_id == item.channels_id )[0].image_widescreen}"
                data-channels_genre="${obj.filter(e => e.channels_id == item.channels_id )[0].genres}"
                data-channels_duration="${obj.filter(e => e.channels_id == item.channels_id )[0].duration}"
                data-channels_season_and_ep="${obj.filter(e => e.channels_id == item.channels_id )[0].episode}"
                >
                    <div class="channelImageShow" style="background-image: url(${item.channels_logo})"></div>
                </button>
            </div>
            `)
        })}
    </div>


</div>
`


}


