//Your code goes here

//1. Change Logo, on double click

let logo = document.querySelector('.logo-heading');
logo.addEventListener('dblclick',()=>{
    logo.style.border = "2px solid gray";
    logo.style.borderRadius = "20px";
    logo.style.fontSize = "5rem";
    logo.style.padding = "5px";
    logo.style.boxShadow = "gray 2px 2px";
})

//2. Change each anchor's color, when there is a click

const navAnchor = document.querySelectorAll(".nav-link");
navAnchor.forEach((item) => {
    item.addEventListener('click',(event)=>{
        item.style.color = 'purple';
    })
})

//3. Header logo back to normal on mouseleave

logo.addEventListener('mouseleave', (event) => {
    logo.style.fontSize = '4rem';
    logo.style.border = 'none';
    logo.style.borderRadius = 'unset';
    logo.style.padding = '0';
    logo.style.boxShadow = 'none';
});



