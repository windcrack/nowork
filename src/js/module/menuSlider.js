export default function menuSlider() {
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
    let width = innerWidth;
    // Обект появелниея блоков по очеродности.
    const showTime = {
        menu: function () {
            setTimeout(() => {
                inMenu.style.display = 'flex'
            }, 100)
        },
        headerBlock: function () {
            setTimeout(() => {
                headerBlock.style.display = 'flex'
            }, 800)
        },
        siteBlock: function () {
            setTimeout(() => {
                siteBlock.forEach(item => {
                    item.style.display = 'flex'
                })
            }, 1200)
        },
        hiddeAll: function () {
            inMenu.style.display = 'none'
            headerBlock.style.display = 'none'
            siteBlock.forEach(item => {
                item.style.display = 'none'
                
            })
        }
    }
    // фунция зарытия открытия меню и всех его частей
    function showLeftSideMenu(open, close, closeMob, closeMobE, menu) {
        open.addEventListener('click', () => {
            menu.style.display = 'block'
            close.style.display = 'block'
            closeMob.style.display = 'block'
            open.style.display = 'none'
            showTime.siteBlock()
            showTime.headerBlock()
            showTime.menu()
        })

        close.addEventListener('click', () => {
            open.style.display = 'block'
            menu.style.display = 'none'
            close.style.display = 'none'
            closeMob.style.display = 'none'
            showTime.hiddeAll()
        })

        if (width <= 600) {
            closeMobE.addEventListener('click', () => {
                open.style.display = 'block'
                menu.style.display = 'none'
                close.style.display = 'none'
                closeMob.style.display = 'none'
                showTime.hiddeAll()
            })
        }
    }
    showLeftSideMenu(btnOpen, btnClose, btnCloseMob, btnCloseMobEl, menuLeft)
}