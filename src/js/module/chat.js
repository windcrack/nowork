export default function chat(){    
    const chat = {
        input: document.querySelector('.textMess'),
        wind: document.querySelector('.windowChat'),
        send: document.querySelector('.sendMess'),
        text: function(textMess, mess){
            textMess = chat.input.value
            mess = document.createElement('div')
            mess.classList.add('mess')
            mess.innerHTML = textMess
            chat.wind.appendChild(mess)
        },
        
        clear: function(){
            chat.input.value = ''
            const time = setTimeout( () => {
                chat.wind.innerHTML = ''
            }, 5000);
            clearInterval(time);
        }
    }

    chat.send.addEventListener('click', e => {
        e.preventDefault()
        chat.text()
        chat.clear()
    })
}