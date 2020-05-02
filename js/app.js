let typed = new Typed('#typed', {
stringsElement: '#typed-strings',
typeSpeed: 40,
backSpeed: 0,
});

const fragment = document.createDocumentFragment();





String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}


function newMenuItem (){
  const sections = document.querySelectorAll('section');
  const new_ul = document.createElement('ul');
  const menu = document.querySelector('.menu')
  for (let i of sections){
    let regexp = /(.*?)_/;
    let pattern = `<li><a href="#${i.id}">${i.id.match(regexp)[1].capitalize()}</a></li>`;
    if(i.id.match(regexp)[1].capitalize() !=='Footer'){
    new_ul.insertAdjacentHTML("beforeEnd", pattern);}
  }
  menu.appendChild(new_ul);
  console.log(new_ul);
  const anchors = document.querySelectorAll('.menu ul li a');
  for(let anchor of anchors){
    anchor.addEventListener('click', function(e){
      e.preventDefault()
      const blockID = anchor.getAttribute('href');
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  
  });
}    
}

document.addEventListener('DOMContentLoaded', function(event) {
  const menu = document.querySelector('.fas');

  const inter_el =  document.querySelector('.inter_el');

  setTimeout(newMenuItem, 0)

  menu.addEventListener('click', function(){
    document.querySelector('.menu').classList.toggle('active');
    })

});

