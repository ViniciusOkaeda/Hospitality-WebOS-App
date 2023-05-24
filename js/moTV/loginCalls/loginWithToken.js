document.addEventListener('onclick', teste, function(e) {
    console.log("aqui e", e);

    //oneMore++;
    //console.log("contagem", oneMore)
});

function loginMotvWithToken()
{
    const token = localStorage.getItem("authorization");
    const customers_token = token;

    console.log("o token é", token)
    const loginRequest = axios.post('https://hospitality.youcast.tv.br/loginMoTVWithToken', {token, customers_token})
    .then(function (response) {
        console.log("o response", response.data.response)
        if(response.data.status == 1){

            let profiles = response.data.response.profiles;
            document.getElementById('myProfiles').innerHTML= profiles.map((item, idx) => 
            {
                `
                <ul class="catch selected">
                <button  onclick="teste()">click</button>
                <li><image src=${item.image}></image></li>
                <li>${item.profiles_name}</li>
                </ul>
                `;

                if(idx == 0){
                    console.log("aqui", item);
                    localStorage.setItem("profileid", item.profiles_id);
                    localStorage.setItem("profileimage", item.image);
                    localStorage.setItem("profilename", item.profiles_name
                    );
                    window.location.href = "../catalog/catalog.html";
                }

            }

            )

            //localStorage.setItem("authorization", response.data.response.customers_token);
        }
    }).catch(function (response) {
        console.log("o response de erro", response)
    })
}

function teste(event) {
    console.log("aqui", event);
    var value = document.querySelector("catch");
    console.log("o value", value)
}

loginMotvWithToken();