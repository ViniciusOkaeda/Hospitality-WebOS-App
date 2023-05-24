function getHomepageV2()
{
    const auth = localStorage.getItem("authorization");
    const profile = localStorage.getItem("profileid");
    const language = 'pt';
    const devicesType = 'webos';



    const loginRequest = axios.post('https://hospitality.youcast.tv.br/getHomepageV2', {
        authorization: 'Bearer ' + auth,
        includeData: true,
        profileId: profile,
        language: language,
        devicesType: devicesType
    })
    .then(function (response) {
        console.log("o response", response)
        if(response.data.status == 1){
            console.log("a home", response.data.response);
            showSliderInitial(response.data.response);
            //showBannerInitial(response.data.response);
            showCategoriesCards(response.data.response);
            //bloco para gerar imagem e informações do banner 

            //fim do bloco do banner





           document.getElementById('slideshow').innerHTML =
           `
           ${category.map((e, idx) => {

            return(`
                <div class="mySlides fade" >
                    <div 
                    style=" background-image: 
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(29, 32, 33, 1) 85%), 
                    url(${e.image_widescreen}) ">
                    

                    </div>

                    <span class="dot"></span> 
                </div>`
            );
           })}
           `


            //document.getElementById('myHomepageP').innerHTML = titleSelected.title;
            
            console.log("o array", titleSelected)
            console.log("o array", titleSelected.title)

        }
    }).catch(function (response) {
        console.log("o response de erro", response)
        
    })
}

getHomepageV2();



function showSliderInitial(response) {
    const sliderScreen = response.map(e => e.data.filter(e => e.image_widescreen !== null && e.type === 'TV')).filter(e => e.length > 0) ;
    const numero = Math.floor(Math.random() * sliderScreen.length);
    const categorySelected = sliderScreen[numero];
    //console.log("o que tem no slider", sliderScreen);
    //console.log("o que tem no numero", numero);
    //console.log("o que tem no slider filtrado", sliderScreen[numero]);
    //console.log("o que tem no categoryselected ", categorySelected);
    document.getElementById('mySliderInitial').innerHTML = 
    `
    <div data-slide="slide" class="slide">
        <div class="slide-items">
    ${categorySelected.map((slide, idx) => { 
        
        return(`
            <div style=" display: block;
            transform: translateY(-20px);
            transition: 800ms ease-out;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(29, 32, 33, 1) 85%), url(${slide.image_widescreen}); width: 101%; height: 100%; background-size: cover"
            >
                <div class="bannerInfo">
                    <div>
                        <image src="${slide.channels_logo}" style="width: 160px; margin-left: 30px; background-color: rgba(30, 30, 30, 0.6); border-radius: 5px"></image>
                    </div>

                    <div class="bannerInfoTitle">
                        <div class="genresAndSeasonAndDuration">
                            <div class="genres">
                                <h6>Categoria: ${slide.genres}</h6>
                            </div>

                            <h6>${slide.episode !== null ? "|" : ""}</h6>
                            <div class="${slide.episode !== null ? "season" : ""}">                             
                            <h6>${slide.episode !== null ? slide.episode : ""}</h6>
                            </div>

                            <h6>${slide.duration !== null ? "|" : ""}</h6>
                            <div class="duration">                             
                            <h6>Duração: ${slide.duration / 60}m</h6>
                            </div> 
                        </div>

                        <h1>${slide.title}</h1>
                        <h4>${slide.subtitle !== null ? slide.subtitle + ': ' : ""}${slide.description}</h4>
                    </div>

                    <div class="bannerRatingButton">
                        <div class="bannerButton">
                            <button>Assistir Agora!</button>
                        </div>

                        <div class="bannerRating
                        ${slide.rating < 10 ? "bannerRatingL" : ''} 
                        ${slide.rating == 10 ? "bannerRating10" : ''} 
                        ${slide.rating == 12 ? "bannerRating12" : ''} 
                        ${slide.rating == 14 ? "bannerRating14" : ''} 
                        ${slide.rating == 16 ? "bannerRating16" : ''} 
                        ${slide.rating == 18 ? "bannerRating18" : ''} 
                        ">
                            <h2>${slide.rating == 0 ? "L" : slide.rating}</h2>
                        </div>
                    </div>

                </div>
            </div>
            `)
        })}
        </div>
        
        <nav class="slide-nav">
            <div class="slide-thumb"></div>
        </nav>
    </div>
    `

    class SlideStories {
        constructor(id) {
            this.slide = document.querySelector(`[data-slide="${id}"]`)
            this.active = 0;
            this.init()
        }

        activeSlide(index) {
            this.active = index;
            this.items.forEach((item) => item.classList.remove('active'));
            this.items[index].classList.add('active');
            this.thumbItems.forEach((item) => item.classList.remove('active'));
            this.thumbItems[index].classList.add('active');
            this.autoSlide();
        }

        prev() {
            if (this.active > 0) {
                this.activeSlide(this.active - 1);
              } else {
                this.activeSlide(this.items.length - 1);
              }
        }

        next() {
            if (this.active < this.items.length - 1) {
                this.activeSlide(this.active + 1);
              } else {
                this.activeSlide(0);
              }
        }

        addNavigation() {
            const nextBtn = this.slide.querySelector('.slide-next');
            const prevBtn = this.slide.querySelector('.slide-prev');
            //nextBtn.addEventListener('click', this.next);
           // prevBtn.addEventListener('click', this.prev);
        }

        addThumbItems() {
            this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
            this.thumbItems = Array.from(this.thumb.children);
        }

        autoSlide() {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(this.next, 9000);
          }

        init() {
            this.next = this.next.bind(this);
            this.prev = this.prev.bind(this);
            this.items = this.slide.querySelectorAll('.slide-items > *');
            this.thumb = this.slide.querySelector('.slide-thumb');
            this.addThumbItems();
            this.activeSlide(0);
            this.addNavigation();
        }
    }
    
    
    new SlideStories('slide');
}

function showBannerInitial(response) {
    //console.log("tem response", response);
    const haveImgWidescreen = response.map(e => e.data.filter(e => e.image_widescreen !== null && e.type === 'TV')).filter(e => e.length > 0) ;
    const numero = Math.floor(Math.random() * haveImgWidescreen.length)
    //console.log("a have imgcom numero", haveImgWidescreen[numero]);
    const category = haveImgWidescreen[numero];
    //console.log("a have cat", category.map(e => e));
    const numero2 = Math.floor(Math.random() * category.length)
    const titleSelected = category[numero2]
    
    document.getElementById('myHomepage').innerHTML = 
    `
    <div class="containerDestaque" 
     style=" background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(29, 32, 33, 1) 85%), url(${titleSelected.image_widescreen !== "null" ? titleSelected.image_widescreen : titleSelected.image});     background-size: cover;
     ">
     <div class="bannerInfo">
         <div>
             <image src="${titleSelected.channels_logo}" style="width: 160px; margin-left: 30px; background-color: rgba(30, 30, 30, 0.6); border-radius: 5px"></image
         </div>

         <div class="bannerInfoTitle">
             <div class="genresAndSeasonAndDuration">
                 <div class="genres">
                     <h6>Categoria: ${titleSelected.genres}</h6>

                 </div> 

                 <h6>${titleSelected.episode !== null ? "|" : ""}</h6>
                 <div class="${titleSelected.episode !== null ? "season" : ""}">                             
                 <h6>${titleSelected.episode !== null ? titleSelected.episode : ""}</h6>
                 </div> 

                 <h6>${titleSelected.duration !== null ? "|" : ""}</h6>
                 <div class="duration">                             
                 <h6>Duração: ${titleSelected.duration / 60}m</h6>
                 </div> 
             
             </div>
             <h1>${titleSelected.title}</h1>
             <h4>${titleSelected.subtitle !== null ? titleSelected.subtitle + ': ' : ""}${titleSelected.description}</h4>
         </div>

         <div></div>

         <div class="bannerRatingButton">
             <div class="bannerButton">
                 <button>Assistir Agora!</button>
             </div>
             <div class="bannerRating 
             ${titleSelected.rating < 10 ? "bannerRatingL" : ''} 
             ${titleSelected.rating == 10 ? "bannerRating10" : ''} 
             ${titleSelected.rating == 12 ? "bannerRating12" : ''} 
             ${titleSelected.rating == 14 ? "bannerRating14" : ''} 
             ${titleSelected.rating == 16 ? "bannerRating16" : ''} 
             ${titleSelected.rating == 18 ? "bannerRating18" : ''} 
             
             
             ">
                 <h2>${titleSelected.rating == 0 ? "L" : titleSelected.rating}</h2>
             </div>
         </div>
    </div>
     </div>
    `;

}

function showCategoriesCards(response) {


    document.getElementById('contentCategories').innerHTML =
    `
    ${response.filter(e => e.type == 'category selection').map((e, idx) => {
        //console.log("o e", e)
        return(`
            <div class="containerCategories">
                <div class="contentCategories">
            
                    <div class="cardTitle">
                        <h2>${e.title}</h2>
                    </div>

                        <div class="cardFlex">
                        ${e.data.map(e => {

                            return(`
                            <div class="cardContainer">
                                <div class="cardButton">
                                    <button style="
                                        background-image: url(${e.image}); 
                                        background-size: cover; 
                                        background-repeat: no-repeat;
                                        background-position: top center;
                                        "></button>
                                </div>
                                <div class="cardInfo">
                                <h3>${e.title}</h3>
                                </div>
                            </div>
                            
                            `)
                        })}

                        
                        </div>


                </div>
            </div>
            `)
    })}

    `
}


let slideIndex = 0;

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

