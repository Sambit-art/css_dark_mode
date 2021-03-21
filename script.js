var btn=document.getElementsByClassName('switchbtn')[0]
var container=document.getElementsByClassName('container')[0]
btn.addEventListener('click',()=>{
    btn.classList.toggle('btnon')
    container.classList.toggle('night')
})