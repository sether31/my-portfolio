function bounce(letter){

    const color = 'rgb(3, 4, 83)';

    if(letter.style.color !== color){
        letter.style.color = 'rgb(3, 4, 83)';
    } else{
        letter.style.color = 'inherit';
    }


    if (!letter.classList.contains('bounce')) { 
        letter.classList.add('bounce'); 
        
        setTimeout( 
            function () { 
                letter.classList.remove('bounce'); 
            }, 
            1000 
        ); 
    } 
}

export default bounce;