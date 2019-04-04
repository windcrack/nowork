
import menuSlider from "/menuSlider.js"
menuSlider();
// const date = {
//     testBlock: document.querySelector('.root'),
//     noRoot: document.querySelector('.noRoot'),
//     inputName: document.querySelector('.name'),
//     inputPass: document.querySelector('.pass'),
//     btn: document.querySelector('button'),
//     quest: function(){
//         let yourName = prompt('Назовите ваше имя', '')
//         this.sayName(yourName)
//     },
//     sayName: function(name){
//         this.testBlock.innerHTML = `Ваше имя -  ${name}`
//     },
// }
// date.quest();

// date.btn.addEventListener('click', e => {
//     e.preventDefault();
//     let name = date.inputName.value,
//         pass = date.inputPass.value,
//         welcomeBlock = document.createElement('div');
//     welcomeBlock.style.color = '#000'
//     welcomeBlock.innerHTML = `
//     Добро пожаловать: ${name}<br>
//     Вы ввели пароль -  ${pass}
//     `
//     date.testBlock.appendChild(welcomeBlock)
// })
// const chat = {
//     input: document.querySelector('.textMess'),
//     wind: document.querySelector('.windowChat'),
//     send: document.querySelector('.sendMess'),
//     text: function(textMess, mess){
//         textMess = chat.input.value
//         mess = document.createElement('div')
//         mess.classList.add('mess')
//         mess.innerHTML = textMess
//         chat.wind.appendChild(mess)
//     },
    
//     clear: function(){
//         chat.input.value = ''
//         const time = setTimeout( () => {
//             chat.wind.innerHTML = ''
//         }, 5000);
//         clearInterval(time);
//     }
// }

// chat.send.addEventListener('click', e => {
//     e.preventDefault()
//     chat.text()
//     chat.clear()
// })