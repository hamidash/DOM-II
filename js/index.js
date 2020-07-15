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

const navAnchor = document.querySelector(".nav");
// navAnchor.forEach((item) => {
//     item.addEventListener('click',(event)=>{
//         item.style.color = 'purple';
//     })
// })

navAnchor.addEventListener('click',(event) => {
    event.target.style.color = 'purple';
})

//3. Header logo back to normal on mouseleave

logo.addEventListener('mouseleave', (event) => {
    logo.style.fontSize = '4rem';
    logo.style.border = 'none';
    logo.style.borderRadius = 'unset';
    logo.style.padding = '0';
    logo.style.boxShadow = 'none';
});


// 4. MouseOver color change for anchors
navAnchor.addEventListener('mouseover', (event)=>{
    event.target.style.color = "red";
    setTimeout(()=>{
        event.target.style.color = "";
    },500);
}, false);

// 5. Resize to alert window size 

    let height = window.innerHeight;
    let width = window.innerWidth;
    window.addEventListener('resize',()=> {
        while(width < 400){
            alert(`Small screen is detected. Screen size is: ${height} by ${width}`);
        }  
    })

//6.contextMenu (right click) on images to display their aleternative names

let images = document.querySelectorAll('img');

images.forEach((item) => {
    item.addEventListener('contextmenu',()=>{
        alert(`${item.alt} is protected by copyright`);
    })
//7. Use preventDefault to prevent dragging for images
    item.addEventListener('dragstart',(event)=>{
        event.preventDefault();
    })
})

//event Propogation

    let intro = document.querySelector('.intro');
    console.log(intro);
    intro.addEventListener('dblclick',() => {
        intro.style.border = '2px solid black';
        intro.style.borderRadius = '20px';
    })

    let introP = document.querySelector('.intro p');
    console.log(introP);

    introP.addEventListener('dblclick', (event)=>{
        event.stopPropagation();
        introP.style.color = 'blue';
    })