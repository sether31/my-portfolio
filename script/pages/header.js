function renderHeaderNavigator(){
    document.querySelectorAll('.nav-link a').forEach((link)=>{
        link.addEventListener('click', ()=>{
            if(!link.classList.contains('.active_link')){
                idk();
                link.classList.add('active_link')
            } 
        });
    });

    function idk(){
        const pastLink = document.querySelector('.active_link');
        if(pastLink){
            return pastLink.classList.remove('active_link');
        }
    }
}


export default renderHeaderNavigator;