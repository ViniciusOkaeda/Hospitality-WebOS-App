async function getSubscribedChannels() {
    const auth = localStorage.getItem("authorization");
    const profile = localStorage.getItem("profileid");
    const language = 'pt';
    const devicesType = 'webos';

    var loaded = document.getElementById("loadingContent");
    var load1 = false;
    var load2 = false;
    var load3 = false;
    var load4 = false;
    showLoading();

    const test = Date.now()
    const timeGet = new Date();
    const hours = timeGet.getHours();
    const minutes = timeGet.getMinutes();
    const seconds = timeGet.getMinutes();
    const currentYear = timeGet.getFullYear();
    const today = timeGet.getDate();
    const currentMonth = timeGet.getMonth() + 1; 
    const timezone = timeGet.getTime();
    console.log("o teste", timeGet.getTimezoneOffset());
    const fullDate = currentYear + "-" + currentMonth + "-" + today + "T" + hours + ":" + minutes + ":" + seconds
    const stringDate = fullDate.toString();
    console.log ("o str date", stringDate)

    const getSubscribedAndLockedChannels = await axios.post('https://hospitality.youcast.tv.br/getSubscribedAndLockedChannels', {
        authorization: 'Bearer ' + auth,
        includeData: true,
        profileId: profile,
        language: language,
        devicesType: devicesType,
    }).then(function (response) {
        if(response.data.status == 1){
            load1 = true
            console.log("o getSubscribedAndLockedChannels", response.data.response);
            //showEventInitial(response.data.response);
        }
    }).catch(function (response) {
        console.log("o response de erro", response)
    })

    const getUpdateEpgEventsV2 = await axios.post('https://hospitality.youcast.tv.br/getEpgUpdatedEventsV2', {
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
            load2 = true
            console.log("o getUpdateEpgEventsV2", response.data.response);
            //showEventInitial(response.data.response);
        }
    }).catch(function (response) {
        console.log("o response de erro", response)
    })

    const getChannelCategories = await axios.post('https://hospitality.youcast.tv.br/getChannelCategories', {
        authorization: 'Bearer ' + auth,
        includeData: true,
        profileId: profile,
        language: language,
        devicesType: devicesType,
        timestamp: 0
    }).then(function (response) {
        if(response.data.status == 1){
            load3 = true;
            showChannelCategories(response.data.response)
            console.log("o getChannelCategories", response.data.response);
            //showEventInitial(response.data.response);
        }
    }).catch(function (response) {
        console.log("o response de erro", response)
    })

    const getFavoriteChannels = await axios.post('https://hospitality.youcast.tv.br/getFavoriteChannels', {
        authorization: 'Bearer ' + auth,
        includeData: true,
        profileId: profile,
        language: language,
        devicesType: devicesType,
        timestamp: 0
    }).then(function (response) {
        if(response.data.status == 1){
            load4 = true;
            console.log("o getFavoriteChannels", response.data.response);
            //showEventInitial(response.data.response);
        }
    }).catch(function (response) {
        console.log("o response de erro", response)
    })

if(load1 == true && load2 == true && load3 == true && load4 == true) {
    loaded.style.display = "none";
}

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

    document.getElementById("focusedChannel").innerHTML = 
    `
    <div class="focusedContainer">
        <div class="focusedTextInfo"></div>
        <div class="focusedImageInfo"></div>
    </div>
    `
}

function showChannelCategories(channelCategories) {
    console.log("o channel", channelCategories)
    document.getElementById("channelCategories").innerHTML = 
    `
    <div class="channelCategoriesContent">
    <button data-category-name="${null}" onclick="selectCategory()" class="channelButton">Todos</button>
    <button data-category-name="Favoritos" onclick="selectCategory()" class="channelButton">Favoritos</button>
    <span class="Bar">|</span>
    ${channelCategories.filter(e => e.channels_categories_name != "Favoritos").map((e, idx) => {

        return(`
        <button data-category-name="${e.channels_categories_name}" onclick="selectCategory()" class="channelButton">${e.channels_categories_name}</button>
        
        `);
    })}

    </div>
    
    `
}
function selectCategory() {
    if(event.target.dataset.categoryName == "Todos") {
        localStorage.removeItem("catName");
    }else if(event.target.dataset.categoryName != "Todos") {
        localStorage.setItem("catName", event.target.dataset.categoryName)
    }

}

function showAllChannels() {
const category = localStorage.getItem("catName");
console.log("o sei la", category)
switch(category){

    case null: 
        console.log("deu nulo ou Todos")
        break;
    case "null": 
        console.log("deu nulo ou Todos")
        break;
    case "null": 
        console.log("deu nulo ou Todos")
        break;
}
}
showAllChannels();