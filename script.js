var header = document.getElementById('Header')

window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll>10){
        header.style.backgroundColor = '#ffffff'//'#4656B3'
    }else{
        header.style.backgroundColor = 'transparent'
    }
    
})