    

    //   mune
 
    let show = document.querySelector('.show');
    let hide = document.querySelector('.hide');
    let navber = document.querySelector('.navber');
      function shownav () {
        navber.classList.add('activ');
        show.style.display = 'none';
        hide.style.display = 'block';
       };

       function hidenav () {
        navber.classList.remove('activ');
        show.style.display = 'block';
        hide.style.display = 'none';
       };
       


       window.addEventListener("load" , () =>{
        let onlode = document.querySelector('.onlode');
        onlode.classList.add("active");
        onlode.addEventListener("transitionend" , () =>{
        document.body.removeChild("onlode");
        });
      });



let nums = document.querySelectorAll('.cards .card .nu');
let secieon = document.querySelector('.About-text');
let started = false;
// nums.forEach((num) => start(num));

window.onscroll = function(){
if(window.scrollY >= secieon.offsetTop - 500){
   if(!started){
       nums.forEach((num) => start(num));
   }
   started = true;
}
};

function start(el){
let goal = el.dataset.goal;
let count = setInterval(()=>{
el.textContent++;
if(el.textContent == goal){
clearInterval(count);
}
},2000 / goal );
};







