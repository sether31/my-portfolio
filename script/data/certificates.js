const certificates = [
    {
        tags: 'award',
        image: '../../assets/logo/urs_logo.png',
        title: 'FIRST PLACE IN WEB DESIGN',
        who: 'University of Rizal System',
        when: 'April 2024',
        what: 'Awarded for best responsive web design using html5 and vanilla css.'
    },
    {
        tags: 'award',
        image: '../../assets/logo/djymnhs_logo.png',
        title: 'BEST IN WORK IMMERSION (TVL)',
        who: 'DJYMNHS',
        when: 'July 2023',
        what: 'Awarded for best WIP student in technical vocational livelihood track.'
    },
    {
        tags: 'certificates',
        image: '../../assets/logo/urs_logo.png',
        title: 'WIREFRAMING DEVELOPMENT',
        who: 'University of Rizal System',
        when: 'Sept 2024',
        what: 'Enhancing wireframing development as a tool on Designing a prototype system.'
    }
];


function renderCertificatesCard(element, allBtn, awardBtn, certBtn){
    let cards = '';

    if(allBtn.classList.contains('active')){
        certificates.forEach((value)=>{
            cards += 
            `
                <div class="card">
                    <div class="card-pic">
                        <img src="${value.image}" alt="logo">
                    </div>
                    <div class="content">
                        <h4 class="title">
                            ${value.title}
                        </h4>
                        <p class="who">
                            ${value.who}, ${value.when}
                        </p>
                        <a href="#">
                            [ View Certificate ]
                        </a>
                    </div>
                </div>
            `;
        });
    } else if(awardBtn.classList.contains('active')){
        certificates.forEach((value)=>{
            if(value.tags === 'award'){
                cards += 
                `
                    <div class="card">
                        <div class="card-pic">
                            <img src="${value.image}" alt="logo">
                        </div>
                        <div class="content">
                            <h4 class="title">
                                ${value.title}
                            </h4>
                            <p class="who">
                                ${value.who}, ${value.when}
                            </p>
                            <a href="#">
                                [ View Certificate ]
                            </a>
                        </div>
                    </div>
                `;
            }
        });
    } else if(certBtn.classList.contains('active')){
        certificates.forEach((value)=>{
            if(value.tags === 'certificates'){
                cards += 
                `
                    <div class="card">
                        <div class="card-pic">
                            <img src="${value.image}" alt="logo">
                        </div>
                        <div class="content">
                            <h4 class="title">
                                ${value.title}
                            </h4>
                            <p class="who">
                                ${value.who}, ${value.when}
                            </p>
                            <a href="#">
                                [ View Certificate ]
                            </a>
                        </div>
                    </div>
                `;
            }
        });
    } else{
        console.alert('error');
    }

    element.innerHTML = cards;
}   


export default renderCertificatesCard;
