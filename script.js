let links=document.querySelectorAll('.scroll')
let targetID
links.forEach(function(element){
    element.addEventListener('click', function(event){
        event.preventDefault()
        targetID = element.getAttributive('href')
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        
    })

})

$(document).ready(function () {
    $('.slider').bxSlider(/*{
        pagerCustom: '.slider-nav',
        infiniteLoop: false,
        hideControlOnEnd: true,
    }*/);
});

