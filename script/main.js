import bounce from "./utils/bounce.js";
import renderCertificatesCard from "./data/certificates.js";

// hero header bounce
document.querySelectorAll('.hero-section .hero-text .name > span') 
.forEach((letter)=>{
    letter.addEventListener('mouseover', ()=>{ 
        bounce(letter);
    });
});


// awards and certificates
const element = document.querySelector('.js-achievement-content');
const allBtn =  document.querySelector('#all');
const awardBtn =  document.querySelector('#awardBtn');
const certBtn =  document.querySelector('#certBtn');


allBtn.addEventListener('click', ()=>{
    allBtn.classList.add('active');
    
    awardBtn.classList.remove('active');
    certBtn.classList.remove('active');

    renderCertificatesCard(
        element, allBtn, awardBtn, certBtn
    );
});

awardBtn.addEventListener('click', ()=>{
    awardBtn.classList.add('active');
    
    allBtn.classList.remove('active');
    certBtn.classList.remove('active');

    renderCertificatesCard(
        element, allBtn, awardBtn, certBtn
    );
});

certBtn.addEventListener('click', ()=>{
    certBtn.classList.add('active');
    
    allBtn.classList.remove('active');
    awardBtn.classList.remove('active');

    renderCertificatesCard(
        element, allBtn, awardBtn, certBtn
    );
});

renderCertificatesCard(
    element, allBtn, awardBtn, certBtn
);

