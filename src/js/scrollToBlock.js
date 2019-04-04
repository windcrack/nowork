const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 1000,
      framesCount = 20;

anchors.forEach(item => {
    item.addEventListener('click', e =>{
        e.preventDefault();
        let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top
        let scroller = setInterval(() =>{
            let scrollBy = coordY / framesCount
            if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight){
               window.scrollBy(0, scrollBy)
            } else {
                window.scrollTo(0, coordY)
                clearInterval(scroller)
            }
        }, animationTime / framesCount)
    })  
});