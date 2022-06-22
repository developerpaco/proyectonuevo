var header = document.getElementById('Header')

window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll>10){
        header.style.backgroundColor = '#F5C5B6'
    }else{
        header.style.backgroundColor = 'transparent'
    }
    
})
