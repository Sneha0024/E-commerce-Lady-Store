burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')

burger.addEventListener('click' , ()=>{
navbar.ClassList.toggle('h-class-resp');
navList.ClassList.toggle('v-class-resp');

})