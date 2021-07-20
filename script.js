// console.log(document);
//* DOM Selection
/*
 * getElementById() harus ada node root (document.getElementByid())
 * getElementById() -> element
 * by adding style it will be inline css in the tag
 */
// const judul = document.getElementById("judul");
// let nilaiJudul = judul.innerText;
// console.log(nilaiJudul + " 10");
// judul.style.color = "Blue";
// judul.style.backgroundColor = "#ccc";
// judul.innerHTML = "jansen ganteng"; //change value of the element

/*
* document.getElementByTagName()
* return -> HTMLCollection
 */
const p = document.getElementsByTagName("p");
console.log(p[1].innerText);
p[1].style.backgroundColor = "lightblue";

const h1 = document.getElementsByTagName("h1")[0];
console.log(h1);

/*
* document.getElementByClassName()
* return -> HTMLCollection
 */
const p1 = document.getElementsByClassName("p1");
console.log(p1[0].innerText);
p1[0].innerHTML = "change by using js";

/*
* document.querySelector()
* (selector) every tag that can be edit by css, can also be used by javascript
* p,body, etc.
* return -> element
 */
const p4 = document.querySelector("#b p");
p4.style.color = "red";
p4.style.fontSize = "50px";
let p4value = p4.textContent;
console.log(p4value);

const li2 = document.querySelector("section#b ul li:nth-child(2)");
let li2Value = li2.textContent;
console.log(li2Value);

const pfirst = document.querySelector("p");
console.log(pfirst);
pfirst.innerHTML = "hanya terganti paragraf pertama saja";

/*
* document.querySelectorAll()
* (selector) every tag that can be edit by css, can also be used by javascript
* p,body, etc.
* return -> NodeList
*/
const pNode = document.querySelectorAll("p");
console.log(pNode);
console.log(pNode[0].textContent);

//DOM Manipulation part 1
/*
 * element.innerHTML
 * element.style.<property>
 * element.setAttribute()
 * element.classList
 */

const judul = document.querySelector("#judul");
let nilaiJudul = judul.innerText;
judul.innerHTML = "<em>Jansen Stanlie</em>";
judul.style.color = "blue";

const sectionA = document.querySelector("section#a");
console.log(sectionA);

const h1baru = document.getElementsByTagName("h1")[0];
h1baru.setAttribute("name", "h1baru");
console.log(h1baru);

const p2New = document.querySelector(".p2");


/*
    * Class List
    * element.classList.add();
    * element.classList.remove();
    * element.classList.toggle();
    * element.classList.item();
    * element.classList.contains();
    * element.classList.replace();
 */
// p2New.classList.add("label");
// console.log(p2New);
// p2New.classList.remove("label");
// console.log(p2New);
p2New.classList.toggle("label");
console.log("toggle", p2New);
