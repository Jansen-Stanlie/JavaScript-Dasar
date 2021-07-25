/*
 * var => function scope
 * Let => block scope
 * Const => block scope (memninimalisir perubahan state)
 * 10 dayas did not lwave time for block scope
 */


// var i = 11,j="jansen stanlie";
// console.log(i);
// console.log(j);
// i = 12;
function test() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}

test();
// console.log(i);
// !!Block scope {} (block) vs Function Scope (javaScript)

// *Function expression
// *SIAF (Self Invoking Anonymous Function)
// *IIFE (Immediately Invoke Function Expression)
(function () {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}());
const zhs = {
    nama: "jansen",
    umur: 33
};
console.log("zhs lama",zhs);
zhs.umur = 35;
console.log("zhs baru",zhs);
