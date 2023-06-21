

async function getInfoCardSelected() {

    const auth = localStorage.getItem("authorization");
    const profile = localStorage.getItem("profileid");
    const type = localStorage.getItem("type");
    const language = 'pt';
    const devicesType = 'webos';

    switch(localStorage.getItem("type")) {

        case "TV":
            let startAt = localStorage.getItem("startAt");
            if(startAt == "undefined"){
                const channelStreamRequest = axios.post('https://hospitality.youcast.tv.br/getStreamChannelUrlV3', {
                    authorization: 'Bearer ' + auth,
                    includeData: true,
                    profileId: profile,
                    language: language,
                    devicesType: devicesType,
                    channelsId: parseInt(localStorage.getItem("idContent")),
                    timestamp: parseInt(new Date().getTime() / 1000),
                    live: true,
                    type: type
                }).then(function (response) {
                    shaka.polyfill.installAll();
    
                    var video = document.getElementById('video');
                    var player = new shaka.Player(video);
                
                    player.configure({
                        drm: {
                            servers: {
                                'com.widevine.alpha': 'https://mw.yplay.com.br/widevine_proxy',
                            }
                        }
                    });
                
                    var devices_type = 'webos';
                    var devices_identification = 'Windows 10 pro, chrome';
                    var devices_hash = '2545249073';
                    var customers_token = localStorage.getItem('authorization'); // CHANGE ME
                    var profiles_id = localStorage.getItem('profileid'); // CHANGE ME
                    var version = '1.0.12';
                    var timestamp = parseInt(new Date().getTime() / 1000);
                    var offset = response.data.response.offset;
                    var edges_id = response.data.response.edgesId;
                
                    player.getNetworkingEngine().registerRequestFilter(function(type, request) {
                        var StringUtils = shaka.util.StringUtils;
                        var Uint8ArrayUtils = shaka.util.Uint8ArrayUtils;
                
                        if (type == shaka.net.NetworkingEngine.RequestType.LICENSE) {
                            request.headers['Authorization'] = 'Bearer ' + customers_token;
                            request.headers['profilesId'] = btoa(profiles_id);
                            request.headers['devicesType'] = btoa(devices_type);
                            request.headers['version'] = btoa(version);
                            request.headers['browserType'] = btoa('chrome');
                            var wrapped = {};
                            wrapped.timestamp = timestamp;
                            wrapped.offset = offset;
                            wrapped.edges_id = edges_id;
                            wrapped.devices_identification = devices_identification;
                            wrapped.devices_hash = devices_hash;
                            wrapped.rawLicense =
                                Uint8ArrayUtils.toBase64(new Uint8Array(request.body), false);
                
                            var wrappedJson = JSON.stringify(wrapped);
                            request.body = StringUtils.toUTF8(wrappedJson);
                        }
                    });
                    player.getNetworkingEngine().registerResponseFilter(function(type, response) {
                        var StringUtils = shaka.util.StringUtils;
                        var Uint8ArrayUtils = shaka.util.Uint8ArrayUtils;
                
                        if (type == shaka.net.NetworkingEngine.RequestType.LICENSE) {
                            var wrappedString = StringUtils.fromUTF8(response.data);
                            var wrapped = JSON.parse(wrappedString);
                            var rawLicense = wrapped.rawLicense;
                            response.data = Uint8ArrayUtils.fromBase64(rawLicense);
                        }
                    });
                    console.log("o player", player)
                    player.load(response.data.response.url);
                    video.play();
            
                }).catch(function (response) {
            
                })
            }else {
                const channelStreamRequest = axios.post('https://hospitality.youcast.tv.br/getStreamChannelUrlV3', {
                    authorization: 'Bearer ' + auth,
                    includeData: true,
                    profileId: profile,
                    language: language,
                    devicesType: devicesType,
                    channelsId: parseInt(localStorage.getItem("idContent")),
                    timestamp: parseInt(startAt),
                    live: false,
                    type: type
                }).then(function (response) {
                    shaka.polyfill.installAll();
    
                    var video = document.getElementById('video');
                    var player = new shaka.Player(video);
                
                    player.configure({
                        drm: {
                            servers: {
                                'com.widevine.alpha': 'https://mw.yplay.com.br/widevine_proxy',
                            }
                        }
                    });
                
                    var devices_type = 'webos';
                    var devices_identification = 'Windows 10 pro, chrome';
                    var devices_hash = '2545249073';
                    var customers_token = localStorage.getItem('authorization'); // CHANGE ME
                    var profiles_id = localStorage.getItem('profileid'); // CHANGE ME
                    var version = '1.0.12';
                    var timestamp = startAt;
                    var offset = response.data.response.offset;
                    var edges_id = response.data.response.edgesId;
                
                    player.getNetworkingEngine().registerRequestFilter(function(type, request) {
                        var StringUtils = shaka.util.StringUtils;
                        var Uint8ArrayUtils = shaka.util.Uint8ArrayUtils;
                
                        if (type == shaka.net.NetworkingEngine.RequestType.LICENSE) {
                            request.headers['Authorization'] = 'Bearer ' + customers_token;
                            request.headers['profilesId'] = btoa(profiles_id);
                            request.headers['devicesType'] = btoa(devices_type);
                            request.headers['version'] = btoa(version);
                            request.headers['browserType'] = btoa('chrome');
                            var wrapped = {};
                            wrapped.timestamp = timestamp;
                            wrapped.offset = offset;
                            wrapped.edges_id = edges_id;
                            wrapped.devices_identification = devices_identification;
                            wrapped.devices_hash = devices_hash;
                            wrapped.rawLicense =
                                Uint8ArrayUtils.toBase64(new Uint8Array(request.body), false);
                
                            var wrappedJson = JSON.stringify(wrapped);
                            request.body = StringUtils.toUTF8(wrappedJson);
                        }
                    });
                    player.getNetworkingEngine().registerResponseFilter(function(type, response) {
                        var StringUtils = shaka.util.StringUtils;
                        var Uint8ArrayUtils = shaka.util.Uint8ArrayUtils;
                
                        if (type == shaka.net.NetworkingEngine.RequestType.LICENSE) {
                            var wrappedString = StringUtils.fromUTF8(response.data);
                            var wrapped = JSON.parse(wrappedString);
                            var rawLicense = wrapped.rawLicense;
                            response.data = Uint8ArrayUtils.fromBase64(rawLicense);
                        }
                    });
                    console.log("o player", player)
                    player.load(response.data.response.url);
                    video.play();
            
                }).catch(function (response) {
            
                })

            }

            break;
        case "VOD":
            const vodStreamRequest = axios.post('https://hospitality.youcast.tv.br/getStreamVodUrlV3', {
                authorization: 'Bearer ' + auth,
                includeData: true,
                profileId: profile,
                language: language,
                devicesType: devicesType,
                vodsId: parseInt(localStorage.getItem("idContent")),
                type: type
            }).then(function (response) {
                console.log("O RESPONSE", response)
                shaka.polyfill.installAll();

                var video = document.getElementById('video');
                var player = new shaka.Player(video);
            
                player.configure({
                    drm: {
                        servers: {
                            'com.widevine.alpha': 'https://mw.yplay.com.br/widevine_proxy',
                        }
                    }
                });
            
                var devices_type = 'webos';
                var devices_identification = 'Windows 10 pro, chrome';
                var devices_hash = '2545249073';
                var customers_token = localStorage.getItem('authorization'); // CHANGE ME
                var profiles_id = localStorage.getItem('profileid'); // CHANGE ME
                var version = '1.0.12';
                var timestamp = parseInt(new Date().getTime() / 1000);
                var offset = response.data.response.offset;
                var edges_id = response.data.response.edgesId;
            
                player.getNetworkingEngine().registerRequestFilter(function(type, request) {
                    var StringUtils = shaka.util.StringUtils;
                    var Uint8ArrayUtils = shaka.util.Uint8ArrayUtils;
            
                    if (type == shaka.net.NetworkingEngine.RequestType.LICENSE) {
                        request.headers['Authorization'] = 'Bearer ' + customers_token;
                        request.headers['profilesId'] = btoa(profiles_id);
                        request.headers['devicesType'] = btoa(devices_type);
                        request.headers['version'] = btoa(version);
                        request.headers['browserType'] = btoa('chrome');
                        var wrapped = {};
                        wrapped.timestamp = timestamp;
                        wrapped.offset = offset;
                        wrapped.edges_id = edges_id;
                        wrapped.devices_identification = devices_identification;
                        wrapped.devices_hash = devices_hash;
                        wrapped.rawLicense =
                            Uint8ArrayUtils.toBase64(new Uint8Array(request.body), false);
            
                        var wrappedJson = JSON.stringify(wrapped);
                        request.body = StringUtils.toUTF8(wrappedJson);
                    }
                });
                player.getNetworkingEngine().registerResponseFilter(function(type, response) {
                    var StringUtils = shaka.util.StringUtils;
                    var Uint8ArrayUtils = shaka.util.Uint8ArrayUtils;
            
                    if (type == shaka.net.NetworkingEngine.RequestType.LICENSE) {
                        var wrappedString = StringUtils.fromUTF8(response.data);
                        var wrapped = JSON.parse(wrappedString);
                        var rawLicense = wrapped.rawLicense;
                        response.data = Uint8ArrayUtils.fromBase64(rawLicense);
                    }
                });
                console.log("o player", player)
                player.load(response.data.response.url);
                video.play();
            }).catch(function (response) {
        
            })

            break;
    }

    //window.location='../player/player.html'

}

document.addEventListener('DOMContentLoaded', getInfoCardSelected());




