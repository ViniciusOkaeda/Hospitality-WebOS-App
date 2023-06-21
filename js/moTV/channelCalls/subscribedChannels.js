async function getSubscribedChannels() {
    const auth = localStorage.getItem("authorization");
    const profile = localStorage.getItem("profileid");
    const language = 'pt';
    const devicesType = 'webos';
    
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
        console.log("o response", response)
        if(response.data.status == 1){
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
        console.log("o response", response)
        if(response.data.status == 1){
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
        console.log("o response getChannelCategories", response)
        if(response.data.status == 1){
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
        console.log("o response getFavoriteChannels", response)
        if(response.data.status == 1){
            console.log("o getFavoriteChannels", response.data.response);
            //showEventInitial(response.data.response);
        }
    }).catch(function (response) {
        console.log("o response de erro", response)
    })

}


getSubscribedChannels();
