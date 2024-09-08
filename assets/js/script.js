//CODIGO ORIGINAL
/*function pintar(){ 
    ele.style.backgroundColor = 'yellow' 
    }
    const ele = document.getElementById("ele1") 
    ele.addEventListener("click", pintar);
*/

//codigo modificado 2.2
/*  const ele = document.getElementById("ele1") 
    function pintar(ele) {
        ele.style.backgroundColor = 'yellow';
    }
    ele.addEventListener("click", () => pintar(ele));*/


// cambiar a color amarillo (codigo modificado 2.3)

const ele = document.getElementById("ele1");
function pintar(ele, color) {
    ele.style.backgroundColor = color;
}
pintar(ele, 'green');

ele.addEventListener("click", function () {
  pintar(ele, "yellow");
});

