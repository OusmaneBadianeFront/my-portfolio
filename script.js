const menuButton = document.querySelector('.btn-mobile-nav');
// const menuButton = document.querySelector('.btn-mobile-nav');
console.log(menuButton  )
const header = document.querySelector('header');
const navItems=document.querySelectorAll('.nav-item');
const section2 = document.querySelector('.section--2')


// MOBILE NAVIGATION 
menuButton.addEventListener('click',function(e){

header.classList.toggle('open-nav')
}
)

navItems.forEach(nav=>nav.addEventListener('click',function(){
   header.classList.remove('open-nav')
}))


// Sticky Navigation


const obs =new IntersectionObserver(function(entries){

   const ent =  entries[0]
   if(ent.isIntersecting=== false ){
    document.querySelector('.header').classList.add('sticky')
   }

   if(ent.isIntersecting=== true ){
    document.querySelector('.header').classList.remove('sticky')
   }


   
},{
root: null,
threshold:0,
})

obs.observe(section2)