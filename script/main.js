import bounce from "./utils/bounce.js";
import renderHeroSection from "./pages/hero-section.js";
import renderAboutSection from "./pages/about-section.js";
import renderAchievementSkillsSection from "./pages/achievement-section.js";
import renderProjectsSection from "./pages/project-section.js";
import renderContactSection from "./pages/contacts-section.js";
import renderHeaderNavigator from "./pages/header.js";
import renderQuoteSection from "./pages/quote-section.js";


// render pages
renderHeroSection();
renderHeaderNavigator();
renderAboutSection();
renderAchievementSkillsSection();
renderProjectsSection();
renderContactSection();
renderQuoteSection();


document.querySelectorAll('.hero-section .hero-text .name > span') 
.forEach((letter)=>{
    letter.addEventListener('mouseover', ()=>{ 
        bounce(letter);
    });
});

AOS.init();