import educationData from '../data/education.js';

function renderAboutSection(){
    const section = 
    `
        <article class="container-lg">
            <h2 data-aos="fade-right" data-aos-duration="500">
                About me&#92;&gt;
            </h2>

            <div class="grid-container">
                <article class="about-infos">
                    <div class="picture">
                        <img src="./assets/pics/pic2.jpg" class="cursor_vomit" alt="vegeta" data-aos="fade-right" data-aos-duration="800">
                    </div>

                    <div class="description" data-aos="fade-left" data-aos-duration="1000">
                        <h4 class="name">Hola!</h4>

                        <p class="content">
                            Hi, I'm Seth Hernandez, an aspiring front-end developer with a love-hate relationship with coding. I enjoy the challenge of building responsive websites and growing through every obstacle along the way.
                        </p>

                        <h4 class="hobby-title">
                            ----- My Hobbies -----
                        </h4>

                        <div class="hobbies">
                            <a href="https://en.wikipedia.org/wiki/Procastinate" class="btn cursor_search" target="_blank">
                                Procastinate
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Code" class="btn cursor_search" target="_blank">
                                Write code
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Anime" class="btn cursor_search" target="_blank">
                                Watch anime
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Manhwa" class="btn cursor_search" target="_blank">
                                Read manhwa
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Manhua" class="btn cursor_search" target="_blank">
                                Read manhua
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Manga" class="btn cursor_search" target="_blank">
                                Read manga
                            </a>
                            <a href="#" class="btn cursor_heart_lung" target="_blank">
                                Watch movies with her
                            </a> 
                        </div>
                    </div>
                </article>

                <article class="education" data-aos="fade-down" data-aos-duration="1000">
                    <button class="btn primary-btn js-education-toggle cursor_click">
                        Education
                        <i class="icon">
                            <img src="./assets/icons/icon-resume.svg" alt="icon">
                        </i>
                    </button>
                </article>
            </div>
        </article>

        <article class="bg-education-card-toggle">
            <div class="education-toggle js-education-toggle container-lg">
                <button class="education-exit js-education-exit cursor_close">
                    <img src="../../assets/icons/close_icon.svg" alt="close_icon">
                </button>

                <h2 class="title">
                    My Education
                </h2>

                <div class="grid js-grid-education">
                    ${renderEducation()}
                </div>
            </div>
        </article>
    `;

    document.querySelector('.js-about-section').innerHTML = section;

    // education
    function renderEducation(){
        let myEducation = '';
        educationData.forEach((educ)=>{
            myEducation +=
            `
                <div class="education">
                    <div class="logo">
                        <img src="${educ.image}" alt="logo">
                    </div>
                    <div class="details">
                        <p class="what">
                            ${educ.what}
                        </p>
                        <h3>
                            ${educ.title}
                        </h3>
                        <p class="date">
                            ${educ.date}
                        </p>
                        <p class="where">
                            ${educ.where}
                        </p>
                    </div>
                </div>
            `;
        });
        return myEducation;
    }

    // toggle
    function educationToggle(){
        document.querySelector('.bg-education-card-toggle').style.display = "block";

        document.querySelectorAll('.js-education-exit').forEach((element)=>{
            element.addEventListener('click', ()=>{
                document.querySelector('.bg-education-card-toggle').style.display = "none";
            });
        });

        
    }
    document.querySelector('.js-education-toggle').addEventListener('click', ()=>{
        educationToggle()
    });
}



export default renderAboutSection;