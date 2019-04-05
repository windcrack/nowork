
export default function menuSlider (){
    // Это старые настройки меню.
    $('.text-slider').slick({
        arrows: false,
        variableWidth: true,
        dots: false,
        infinite: false,
        centerPadding: '0px',
        responsive:[
            {
                breakpoint: 600,
                settings:{
                    adaptiveHeight: true,
                    arrows: false,
                    variableWidth: true,
                    dots: false,
                    initialSlide: 0,
                    slidesToShow: 3,
                    slideToScroll: 1,
                    centerPadding: '0px',
                }
            }
        ]
      });
    // -----------------------------------------
    // Это новое боковое меню.
    const menuLeft = document.querySelector('.leftMenuBlock'),
          inMenu = document.querySelector('.leftMenuMain'),
          btnOpen = document.querySelector('.btn-side-open'),
          headerBlock = document.querySelector('.menuHeader'),
          siteBlock = document.querySelectorAll('.menu-section'),
          btnClose = document.querySelector('.btn-side-close'),
          btnCloseMob = document.querySelector('.btn-side-closeMob'),
          btnCloseMobEl = document.querySelector('.secretBlock .btn-side-closeMob i');
    let width = innerWidth
    const showTime = {
        menu: function(){
            setTimeout(() =>{ inMenu.style.display = 'flex' }, 100)
        },
        headerBlock: function(){
            setTimeout(() =>{ headerBlock.style.display = 'flex' }, 800)
        },
        siteBlock: function(){
            setTimeout(() =>{ siteBlock.forEach(item =>{ item.style.display = 'flex' }) }, 1200)
        },
        hiddeAll: function (){
            inMenu.style.display = 'none'
            headerBlock.style.display = 'none'
            siteBlock.forEach(item =>{ item.style.display = 'none' })
        }
    }
    
    function showLeftSideMenu (open, close, closeMob, closeMobE, menu){
        open.addEventListener('click', () => {
            menu.style.display = 'block'
            close.style.display = 'block'
            closeMob.style.display = 'block'
            open.style.display = 'none'
            showTime.siteBlock()
            showTime.headerBlock()
            showTime.menu()
        })
        close.addEventListener('click', () =>{
            open.style.display = 'block'
            menu.style.display = 'none'
            close.style.display = 'none'
            closeMob.style.display = 'none'
            showTime.hiddeAll()
        })
        if(width <= 600){
            closeMobE.addEventListener('click', () =>{
                open.style.display = 'block'
                menu.style.display = 'none'
                close.style.display = 'none'
                closeMob.style.display = 'none'
                showTime.hiddeAll()
            })
        }
    }
    const main = document.querySelector('main');
    const clientWidth = () =>{
        setInterval(() =>{
            main.innerHTML = `Ширина - ${width}`
        }, 100)
    }
    clientWidth()
    showLeftSideMenu(btnOpen, btnClose, btnCloseMob, btnCloseMobEl, menuLeft)
}
