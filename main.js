let btnMenu = document.querySelector("#btnMenu");
let menu = document.querySelector("#menu");
let submenubtn = document.querySelector(".btn-submenu");
let submenu = document.querySelector(".submenu");



document.querySelector('.btn-submenu').onclick = () => {
    submenu.classList.toggle('actives')
}

// if (window.innerWidth < 769) {
//     submenubtn.addEventListener('click', ()=>{
//         submenu.classList.toggle('actives');
//     });
// };


btnMenu.addEventListener("click", () => {
    menu.classList.toggle('active')
});




// btnMenu.addEventListener("click", () =>{
//     menu.classList.toggle("mostrar")
// })


// for (let i = 0; i < submenubtn.length; i++) {
//     submenubtn[i].addEventListener("click", function(){
//         if(window.innerWidth < 1024){
//             const subMenu = this.nextElementSibling;
//             const height = subMenu.scrollHeight;

//             if (subMenu.classList.contains("desplegar")) {
//                 subMenu.classList.remove("desplegar");
//                 subMenu.removeAttribute("style");
//             }else{
//                 subMenu.classList.add("desplegar");
//                 subMenu.style.height = height + "px";
//             }

            
//         }
//     });
    
// }