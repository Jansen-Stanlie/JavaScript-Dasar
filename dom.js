/*
 * DOM tranversal Method
 * parentNode => node
 * parentElement => element
 * nextSibling => node
 * nextElementSibling => element
 * previousSibling => node
 * previousElementSibling => element
 */

//Event Handling
const close = document.querySelectorAll(".close");
const card = document.querySelectorAll(".card");

// close.addEventListener("click",function (){
//     card.style.display="none";
// })
console.log(card);
console.log(close);

// for(let i=0; i<close.length ;i++){
//     close[i].addEventListener("click",function (e){
//         e.target.parentElement.style.display="none";
//         console.log(e.target);
//     })
// };

close.forEach(function (el){
    el.addEventListener("click",function (e){
        e.target.parentElement.style.display="none";
    });
});

const nama = document.querySelector(".nama");
console.log(nama.nextElementSibling.nextElementSibling);