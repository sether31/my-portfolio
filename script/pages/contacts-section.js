function renderContactSection(){
    const section =
    `
        <h2 class="heading" data-aos="fade-right" data-aos-duration="500">
            Contacts&#92;&gt;
        </h2>
        <article class="grid-container">
            <div class="contact-item" data-aos="zoom-out-right" data-aos-duration="500">
                <div class="picture">
                    <img src="./assets/icons/github_icon _black.svg" alt="guthub_icon">
                </div>
                <div class="content">
                    <h3 class="title">
                        My github account
                    </h3>
                    <a href="https://github.com/sether31" class="cursor_search" target="_blank">
                        @Sether31
                    </a>
                </div>
            </div>

            <div class="contact-item" data-aos="zoom-out-left" data-aos-duration="1000">
                <div class="picture">
                    <img src="./assets/icons/css_battle_icon.png" alt="css_battle_icon">
                </div>
                <div class="content">
                    <h3 class="title">
                        My css battle account
                    </h3>
                    <a href="https://cssbattle.dev/player/sether31" class="cursor_search" target="_blank">
                        @Sether31
                    </a>
                </div>
            </div>

            <div class="contact-item" data-aos="zoom-out-right" data-aos-duration="1500">
                <div class="picture">
                    <img src="./assets/icons/gmail_icon.svg" alt="gmail_icon">
                </div>
                <div class="content">
                    <h3 class="title">
                        Send me an email: 
                    </h3>
                    <a href="mailto: sethmichaelhernandez@gmail.com" class="cursor_search" target="_blank">
                        sethmichaelhernandez @gmail.com
                    </a>
                </div>
            </div>

            <div class="contact-item" data-aos="zoom-out-left" data-aos-duration="2000">
                <div class="picture">
                    <img src="./assets/icons/front_end_mentor_icon.svg" alt="frontendmentor_logo">
                </div>
                <div class="content">
                    <h3 class="title">
                        My frontend mentor account
                    </h3>
                    <a href="https://www.frontendmentor.io/profile/sether31" class="cursor_search" target="_blank">
                        @Sether31
                    </a>
                </div>
            </div>
        </article>
    `;

    document.querySelector('.js-contacts-section').innerHTML = section;
}


export default renderContactSection;