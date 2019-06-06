export default function modalTime (){
    const modal = document.querySelector('.modalTimer'),
        close = document.querySelector('.close'),
        btnClose = document.querySelector('.buttonCloseTimer'),
        redButton = document.querySelector('.redButton');
    function timeModal(button){
        let now = (new Date).getHours(),
            start = 22,
            end = 9;
        if(!(now > end && now < start)){
            button.addEventListener('click', ()=>{
               openModal(modal)
            })
            close.addEventListener('click', () =>{
                closeModal(modal)
            })
            btnClose.addEventListener('click', ()=>{
                closeModal(modal)
            })
            function closeModal (modal) {
                modal.style.display = 'none'
            }
            function openModal(modal){
                modal.style.display = 'flex'
            }
        }
        console.log(date);
    }
   
    timeModal(redButton);
}