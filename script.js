const burger_menu = document.querySelector('.burger-menu');
const nav_links = document.querySelector('.nav-links');

burger_menu.addEventListener('click', function(){
    nav_links.classList.toggle('show');
})


const thumbs = document.querySelectorAll('.thumb');
const display_img = document.querySelector('.display-img');
const lightbox = document.querySelector('.lightbox');
const close = document.querySelector('.lightbox .close');

thumbs.forEach(function(thumb){
    thumb.addEventListener('click', function(e){
        lightbox.classList.add('active')
        display_img.src = e.target.src
    })
})

close.addEventListener('click', function(){
    lightbox.classList.remove('active')
})