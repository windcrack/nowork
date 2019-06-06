const dbComand = {
    divInner: document.querySelector('.comandWindow'),
    cmdList: ['!film', '!time', '!help', '!client', '!width', '!height', '!date', '!juke'],
    cmdFilm: 'Паранормальное явление',
    cmdTime: function(){
        let time = new Date(3600 * 24 * 1000)
        dbComand.divInner.innerHTML = `Время - ${time}`
    },
    cmdHelp: function (arr){
        arr.forEach(item => {
            dbComand.divInner.innerHTML = `команда - ${item}`
        })
    },
    cmdClient: function(){
        let client = navigator.userAgent
        dbComand.divInner.innerHTML = `Вашь браузер - ${client}`
    },
    cmdWidth: function(){
        let widthC = document.body.clientWidth
        dbComand.divInner.innerHTML = `Шрина экрана - ${widthC}`
    },
    cmdHeight: function(){
        let clientH = document.body.clientHeight
        dbComand.divInner.innerHTML = `Высота экрана - ${clientH}`
    }
}

if(dbComand.cmdList[1]){
    dbComand.cmdFilm;
}