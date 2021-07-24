/*
 * DOM tranversal Method
 * parentNode => node
 * parentElement => element
 * nextSibling => node
 * nextElementSibling => element
 * previousSibling => node
 * previousElementSibling => element
 * prevent default
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

// close.forEach(function (el){
//     el.addEventListener("click",function (e){
//         e.target.parentElement.style.display="none";
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });
const container = document.querySelector(".container");

container.addEventListener("click",function (e){
    if(e.target.className == "close"){
        e.target.parentElement.style.display ="none";
        e.preventDefault();
        e.stopPropagation();
    }
})
// const nama = document.querySelector(".nama");
// console.log(nama.nextElementSibling.nextElementSibling);

// !event bubbling
const cards = document.querySelectorAll(".card");
cards.forEach(function (card){
   card.addEventListener("click",function (e){
       alert("OK");
   });
});
console.log("cards",cards);