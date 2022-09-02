burger = document.querySelector(".burger")
menubar = document.querySelector(".menubar")
rightnav = document.querySelector(".rightnav")
search = document.querySelector(".search")
searchclose = document.querySelector(".search-close")
navtext = document.querySelector(".navtext")
logo = document.querySelector(".logo")

burger.addEventListener('click',()=>{
    menubar.classList.toggle('hid-class');

})

search.addEventListener('click',()=>{
    rightnav.classList.toggle('v-resp-right-nav')
    searchclose.classList.toggle('rightnav-content-resp')
    navtext.classList.toggle('rightnav-content-resp')
    logo.classList.toggle('opacity-responsive')
})