function renderQuoteSection(){
    const section =
    `
        <div class="content">
            <q>
                Success isn’t overnight. It’s when every day you get a little better than the day before. It all adds up.
            </q>

            <p  data-aos="fade-right" data-aos-duration="1500">
                - Dwayne Johnson
            </p>
        </div>
    `;

    document.querySelector('.js-quote-section').innerHTML = section;
}


export default renderQuoteSection;