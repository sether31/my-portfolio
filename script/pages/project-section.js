import projects from "../data/projects.js";

function renderProjectsSection(){
    const section = 
    `
        <!-- slider -->
        <div class="slider-container">
            <article class="slider" 
            style="
                --width: 100px;
                --height: 60px;
                --quantity: 10;
                --time: 10s;
            ">
                <div class="list">
                    <div class="item cursor_pumpkin" style="--position: 1">
                        <img src="./assets/icons/html5_icon.svg" alt="">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 2">
                        <img src="./assets/icons/CSS3_icon.svg" alt="">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 3">
                        <img src="./assets/icons/js_icon.svg" alt="">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 4">
                        <img src="./assets/icons/git_icon.svg" alt="">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 5">
                        <img src="./assets/icons/github_icon.svg" alt="">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 6">
                        <img src="./assets/icons/netlify_icon.svg" alt="">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 7">
                        <img src="./assets/icons/vercel_icon.svg" alt="">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 8">
                        <img src="./assets/icons/figma_icon.svg" alt="">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 9">
                        <img src="./assets/icons/vscode_icon.svg" alt="">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 10">
                        <img src="./assets/icons/bootstrap4_icon.svg" alt="icon">
                    </div>
                </div>
            </article>
        </div>


        <div class="container-lg">
            <h2 class="heading">
                My Projects&#92;&gt;
            </h2>

            <article class="project-card js-project-card">
                ${card()}
            </article>
        </div>


        <!-- slider -->
        <div class="slider-container slider-container2">
            <article class="slider" reverse="true"
            style="
                --width: 100px;
                --height: 60px;
                --quantity: 10;
                --time: 10s;
            ">
                <div class="list">
                    <div class="item cursor_pumpkin" style="--position: 1">
                        <img src="./assets/icons/html5_icon.svg" alt="icon">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 2">
                        <img src="./assets/icons/CSS3_icon.svg" alt="icon">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 3">
                        <img src="./assets/icons/js_icon.svg" alt="icon">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 4">
                        <img src="./assets/icons/git_icon.svg" alt="icon">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 5">
                        <img src="./assets/icons/github_icon.svg" alt="icon">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 6">
                        <img src="./assets/icons/netlify_icon.svg" alt="icon">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 7">
                        <img src="./assets/icons/vercel_icon.svg" alt="icon">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 8">
                        <img src="./assets/icons/figma_icon.svg" alt="icon">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 9">
                        <img src="./assets/icons/vscode_icon.svg" alt="icon">
                    </div>
                    <div class="item cursor_pumpkin" style="--position: 10">
                        <img src="./assets/icons/bootstrap4_icon.svg" alt="icon">
                    </div>
                </div>
            </article>
        </div>
    `;
    
    document.querySelector('.js-projects-section').innerHTML = section;

    function card(){
        let card = '';
        projects.forEach((projectItem)=>{
            card += 
            `
                <div class="card" data-aos="${projectItem.animationType}" data-aos-duration="${projectItem.animationDuration}">
                    <div class="video">
                        <video data-project-id="${projectItem.id}" class="vid cursor_resize" src="${projectItem.video}" type="video/mp4" muted loop></video>
                    </div>
    
                    <div class="card-content">
                        <div class="text">
                            <h3 class="title">
                                ${projectItem.name}
                            </h3>
                            <p class="type">
                                ${projectItem.type}
                            </p>    
                        </div>
                        <div class="link-card">
                            <a href="${projectItem.githubLink}" target="_blank" class="cursor_link">
                                <img src="../../assets/icons/github_icon.svg" alt="github_icon">
                            </a>
                            <a href="${projectItem.liveLink}" target="_blank" class="cursor_link">
                                <img src="../../assets/icons/exitArrow_icon.svg" alt="exitArrow_icon">
                            </a>
                        </div>
                    </div>
                </div>
            `;
        });
    
        return card;
    }
    
    document.querySelectorAll('.vid').forEach((video)=>{
        video.addEventListener('mouseenter', ()=>{
            video.play();
        });

        video.addEventListener('mouseout', ()=>{
            video.pause();
        });
    
        video.addEventListener('click', ()=>{
            const projectItemId = video.dataset.projectId;
            let matchingItem; 
            projects.forEach((projectItem)=>{
                if(projectItem.id === projectItemId){
                    matchingItem = projectItem;
                }
            });
    
            cardToggle(matchingItem)
        });
    });

    

    function cardToggle(projectItem){
        const cardItem = 
        `
            <button class="project-exit js-project-exit cursor_close">
                <img src="../../assets/icons/close_icon.svg" alt="close_icon">
            </button>
            
            <div class="vid-container">
                <video src="${projectItem.video}" type="video/mp4" muted loop autoplay></video>
            </div>
            <div class="content">
                <h2 class="title">
                    ${projectItem.name}
                </h2>

                <a href="${projectItem.liveLink}" target="_blank" class="link cursor_link">
                    <span class="icon">
                        <img src="./assets/icons/exitArrowBlack_icon.svg" alt="exitArrow_icon">
                    </span>
                    Go to site
                </a>

                <p class="description">
                    ${projectItem.description}
                </p>

                <h3 class="sub-heading">
                    Technologies
                </h3>

                <div class="technologies">
                    <p class="tech">
                        <span class="icon">
                            <img src="${projectItem.technologies.tech1.icon}" alt="icon">
                        </span>
                        ${projectItem.technologies.tech1.name}
                    </p>
                    <p class="tech">
                        <span class="icon">
                            <img src="${projectItem.technologies.tech2.icon}" alt="icon">
                        </span>
                        ${projectItem.technologies.tech2.name}
                    </p>         
                </div>
            </div>
        `;

        document.querySelector('.js-project-card-toggle').innerHTML = cardItem;
        document.querySelector('.bg-project-card-toggle').style.display = "block";

        document.querySelectorAll('.js-project-exit').forEach((element)=>{
            element.addEventListener('click', ()=>{
                document.querySelector('.bg-project-card-toggle').style.display = "none";
            });
        });
    }
}


export default renderProjectsSection;