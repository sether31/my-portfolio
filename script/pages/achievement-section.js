import certificates from '../data/certificates.js';
import skills from '../data/skills.js';

function renderAchievementSkillsSection(){
    const section = 
    `
        <div class="container-lg">
            <h3 class="header" data-aos="fade-right" data-aos-duration="500">Achievement & Skills&#92;&gt;</h3>

            <div class="wrapper">
                <section class="skills">
                    <h3 class="heading" data-aos="fade-right" data-aos-duration="800">Skills</h3>
                    <article class="skillset">
                        <h4 class="sub-heading" data-aos="fade-right" data-aos-duration="1000">
                            Technology and tools
                        </h4>

                        <div class="card js-skills-card"></div>
                    </article>
                </section>

                <section class="awards">
                    <h4 class="heading" data-aos="fade-left" data-aos-duration="800">Achievements</h4>
                    
                    <nav data-aos="fade-left" data-aos-duration="1000">
                        <ul>
                            <li id="all" class="active cursor_click">All</li>
                            <li id="awardBtn" class="cursor_click">Awards</li>
                            <li id="certBtn" class="cursor_click">Certicate</li>
                        </ul>
                    </nav>

                    <article class="achievement-content js-achievement-content"></article>
                </section>
            </div>
        </div>
    `;

    document.querySelector('.js-achievements-skills').innerHTML = section;


    // card skills
    renderSkillsCard();
    function renderSkillsCard(){
        let card = ''; 

        skills.forEach((skill)=>{
            card += 
            `
                <a href="${skill.link}" target="_blank" class="card-item cursor_search" data-aos="zoom-in-right" data-aos-duration="${skill.animationDuration}">
                    <img src="${skill.image}" alt="${skill.name}_icon">
                    ${skill.name}
                </a>
            `;
        });
        document.querySelector('.js-skills-card').innerHTML = card;
    }

    // card achievements
    renderAchievementsCard();
    function renderAchievementsCard(){
        const element = document.querySelector('.js-achievement-content');
        const allBtn =  document.querySelector('#all');
        const awardBtn =  document.querySelector('#awardBtn');
        const certBtn =  document.querySelector('#certBtn');
        let cards = '';
    
        if(allBtn.classList.contains('active')){
            certificates.forEach((value)=>{
                cards += 
                `
                    <div class="card" data-aos="${value.animationType}" data-aos-duration="${value.animationType}">
                        <div class="card-pic">
                            <img src="${value.logoImage}" alt="logo">
                        </div>
                        <div class="content">
                            <h4 class="title">
                                ${value.title}
                            </h4>
                            <p class="who">
                                <a href="${value.where}" class="cursor_click" target="_blank">
                                    <img src="../../assets/icons/mapPin_icon.svg">
                                    ${value.who}
                                </a>
                                , ${value.when}
                            </p>
                            <a class="js-view-certificate cursor_click" data-achievement-id="${value.id}">
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
                                <img src="${value.logoImage}" alt="logo">
                            </div>
                            <div class="content">
                                <h4 class="title">
                                    ${value.title}
                                </h4>
                                <p class="who">
                                    <a href="${value.where}" class="cursor_click" target="_blank">
                                        <img src="../../assets/icons/mapPin_icon.svg">
                                        ${value.who}
                                    </a>
                                    , ${value.when}
                                </p>
                                <a class="js-view-certificate cursor_click" data-achievement-id="${value.id}">
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
                                <img src="${value.logoImage}" alt="logo">
                            </div>
                            <div class="content">
                                <h4 class="title">
                                    ${value.title}
                                </h4>
                                <p class="who">
                                    <a href="#" class="cursor_click">
                                        <img src="../../assets/icons/mapPin_icon.svg">
                                        ${value.who}
                                    </a>
                                    , ${value.when}
                                </p>
                                <a class="js-view-certificate cursor_click" data-achievement-id="${value.id}">
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
        
    
        // awards and certificates
    
        allBtn.addEventListener('click', ()=>{
            allBtn.classList.add('active');
            
            awardBtn.classList.remove('active');
            certBtn.classList.remove('active');
    
            renderAchievementsCard(
                element, allBtn, awardBtn, certBtn
            );
        });
    
        awardBtn.addEventListener('click', ()=>{
            awardBtn.classList.add('active');
            
            allBtn.classList.remove('active');
            certBtn.classList.remove('active');
    
            renderAchievementsCard(
                element, allBtn, awardBtn, certBtn
            );
        });
    
        certBtn.addEventListener('click', ()=>{
            certBtn.classList.add('active');
            
            allBtn.classList.remove('active');
            awardBtn.classList.remove('active');
    
            renderAchievementsCard(
                element, allBtn, awardBtn, certBtn
            );
        });


        
        // card toggle
        document.querySelectorAll('.js-view-certificate').forEach((btn)=>{
            btn.addEventListener('click', ()=>{
                const achievementCardId = btn.dataset.achievementId;

                let matchingItem; 
                
                certificates.forEach((certificate)=>{
                    if(certificate.id === achievementCardId){
                        matchingItem = certificate;
                    }
                });

                achievementsCardToggle(matchingItem);
            });
        });

        function achievementsCardToggle(certificate){
            const cardItem = 
            `
                <button class="achievements-exit js-achievements-exit cursor_close">
                    <img src="../../assets/icons/close_icon.svg" alt="close_icon">
                </button>

                <div class="certificate-img">
                    <img src="${certificate.certificateImage}" alt="certificate-image">
                </div>
                <div class="content">
                    <h2>
                        ${certificate.title}
                    </h2>
                    <p class="who">
                        <a href="${certificate.where}" class="cursor_click">
                            <img src="../../assets/icons/mapPin_icon.svg">
                            ${certificate.who}
                        </a>
                        , ${certificate.when}
                    </p>
                    <h4 class="sub">
                        Details:
                    </h4>
                    <p class="description">
                        ${certificate.what}
                    </p>
                    <a href="${certificate.certificateImage}" class="download" class="cursor_click" download="certificate.jpg">
                        <img src="./assets/icons/github_icon.svg" alt="download_icon">
                        Download
                    </a>
                </div>
            `;

            document.querySelector('.js-achievements-card-toggle').innerHTML = cardItem;
            document.querySelector('.bg-achievements-card-toggle').style.display = "block";

            document.querySelectorAll('.js-achievements-exit').forEach((element)=>{
                element.addEventListener('click', ()=>{
                    document.querySelector('.bg-achievements-card-toggle').style.display = "none";
                });
            });
        }
    }   
}


export default renderAchievementSkillsSection;