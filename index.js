/* document.getElementById('more').addEventListener('click', function() {
    console.log("Ahora esta seccion es visible")
    document.getElementById('show').style.visibility="visible";
}); */

function mostrar(){
    document.getElementById('more').addEventListener("click", function() {
    document.getElementById(section).style.visibility="visible";
    })
}