function renderHeroSection(){
    const section = 
    `
        <article class="hero-text">
            <h3 class="introduction" data-aos="fade-right" data-aos-duration="500">
                Hi, my name is
            </h3> 
            <h1 class="name" data-aos="fade-right" data-aos-duration="1000">
                <span class="cursor_target">S</span>
                <span class="cursor_target">e</span>
                <span class="cursor_target">t</span>
                <span class="cursor_target">h</span>
                <span class="cursor_target"></span>
                <span class="cursor_target">H</span>
                <span class="cursor_target">e</span>
                <span class="cursor_target">r</span>
                <span class="cursor_target">n</span>
                <span class="cursor_target">a</span>
                <span class="cursor_target">n</span>
                <span class="cursor_target">d</span>
                <span class="cursor_target">e</span>
                <span class="cursor_target">z</span>
                <span class="highlight cursor_target">
                    &#92;&gt;
                </span>
            </h1>
            <h2 class="description" data-aos="fade-right" data-aos-duration="1500">
                Aspiring 
                <span class="highlight">Frontend</span> Developer 
            <h2>
        </article> 
        
        <!-- links -->
        <article class="cta" data-aos="fade-right" data-aos-duration="1800">
            <a href="#" class="btn  primary-btn cursor_search">
                <img src="./assets/icons/icon-resume.svg" alt="icon-resume" class="icon icon-resume">
                Resume
            </a>

            <a href="#contacts" class="btn  secondary-btn cursor_search">
                <img src="./assets/icons/icon-contact.svg" alt="icon-contact" class="icon icon-contact">
                Contact
            </a>
        </article>  
    `;

    document.querySelector('.js-hero-section').innerHTML = section;
}

export default renderHeroSection;